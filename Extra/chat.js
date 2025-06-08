// Start the base of the LLM
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.2';

const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const historyBox = document.getElementById('history-box');
const latestResponse = document.getElementById('latest-response');

let generator;

// table of gamestats for the LLM
const gameState = {
  playerName: null,
  location: "Unknown",
  lastEvents: [],
  inventory: [],
};

const basePrompt = `You are a creative and engaging game master guiding the player through a fantasy adventure.
Speak in immersive storytelling style, be descriptive, and always end your response with a question to encourage player input.
Keep your answers concise but rich with detail.
Focus on the player's character, choices, and current situation.
Always ask a follow-up question.
Always tell 3 suggested options to choose from: destinations, items to be found, or interesting things the player sees.
`;

// Start prompt to make the game start
const initialAIPrompt = `Welcome to the adventure! What is your character's name?`;

// Summarizes the current game state for context in the prompt -> might change cuz it does make it verrry slow
function summarizeGameState() {
  return `Player's name: ${gameState.playerName || 'Unknown'}.
Current location: ${gameState.location}.
Recent events: ${gameState.lastEvents.slice(-3).join(' | ') || 'None'}.
Inventory: ${gameState.inventory.length > 0 ? gameState.inventory.join(', ') : 'Empty'}.`;
}

// Add message to the ui
function addHistoryItem(text, isUser = false) {
  const div = document.createElement('div');
  div.classList.add('history-item');
  if (isUser) {
    div.style.backgroundColor = '#4a90e2';
    div.style.color = 'white';
  }
  div.textContent = text;
  historyBox.appendChild(div);
  historyBox.scrollTop = historyBox.scrollHeight;
}

// Start function, called at end of script
async function init() {
  sendBtn.disabled = true;
  latestResponse.textContent = "Loading AI model...";
  try {
    generator = await pipeline('text-generation', 'onnx-community/Qwen2.5-0.5B-Instruct');
    latestResponse.textContent = "AI model loaded! Starting game...";
    addHistoryItem(initialAIPrompt, false);
    latestResponse.textContent = initialAIPrompt;
    console.log("Initial AI prompt:", initialAIPrompt);
  } catch (error) {
    latestResponse.textContent = "Failed to load AI model.";
    console.error("Error loading model:", error);
  } finally {
    sendBtn.disabled = false;
  }
}

//make the ai response using the game stats and the input
async function getAIResponse(userInputText) {
  if (!gameState.playerName) {
    gameState.playerName = userInputText;
  }

  const prompt = `${basePrompt}
Current game state:
${summarizeGameState()}

Player says: "${userInputText}"

AI:`;

  console.log("Sending prompt to AI:\n", prompt);

  const output = await generator(prompt, {
    max_new_tokens: 160,
    temperature: 0.9,
    repetition_penalty: 1.2,
  });

  let aiText = output[0].generated_text.substring(prompt.length).split('\n')[0].trim();

  if (!aiText.endsWith('?')) {
    aiText = aiText.endsWith('.') ? aiText.slice(0, -1) + '?' : aiText + '?';
  }

  // Update location if AI mentions it
  const locationMatch = aiText.match(/(?:arrive at|are in|enter|reach|find yourself in) ([A-Za-z\s]+)/i);
  if (locationMatch) {
    gameState.location = locationMatch[1].trim();
  }

  // Track last events, max 10
  gameState.lastEvents.push(aiText);
  if (gameState.lastEvents.length > 10) {
    gameState.lastEvents.shift();
  }

  console.log("Processed AI response:\n", aiText);
  console.log("Updated game state:\n", gameState);

  return aiText;
}

//detect a click on the send button
sendBtn.addEventListener('click', async () => {
  const inputText = userInput.value.trim();
  if (!inputText) {
    alert("Please enter something!");
    return;
  }

  addHistoryItem(inputText, true);
  userInput.value = "";
  sendBtn.disabled = true;
  latestResponse.textContent = "Thinking...";
  console.log("User input:", inputText);

  try {
    const aiResponse = await getAIResponse(inputText);
    addHistoryItem(aiResponse, false);
    latestResponse.textContent = aiResponse;
  } catch (err) {
    console.error("Error during AI response:", err);
    latestResponse.textContent = "Oops! Something went wrong.";
  } finally {
    sendBtn.disabled = false;
  }
});

//start
init();
