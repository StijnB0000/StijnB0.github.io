console.log('Script Loaded');

function calculate() {
    console.log('Calculation started');

    // Get form inputs
    const voldoendeInput = document.getElementById('voldoende');
    const maxPuntenInput = document.getElementById('max-punten');
    const nTermInput = document.getElementById('nterm-input');
    const percentageInput = document.getElementById('percentage-input');
    const foutenInput = document.getElementById('fouten-input');
    const behaaldeInput = document.getElementById('behaalde-input');

    const nTermCheckbox = document.getElementById('nterm-checkbox');
    const percentageCheckbox = document.getElementById('percentage-checkbox');
    const foutenCheckbox = document.getElementById('fouten-checkbox');
    const behaaldeCheckbox = document.getElementById('behaalde-checkbox');

    const resultsTableBody = document.getElementById('results-table-body');

    // Parse input values
    const voldoende = parseFloat(voldoendeInput.value) || 0;
    const maxPunten = parseFloat(maxPuntenInput.value) || 0;
    const nTerm = parseFloat(nTermInput.value) || 0;
    const percentage = parseFloat(percentageInput.value) || 0;
    const foutenPerPunt = parseFloat(foutenInput.value) || 0;
    const behaaldePunten = parseFloat(behaaldeInput.value) || 0;

    console.log('Voldoende:', voldoende);
    console.log('Max Punten:', maxPunten);

    // Clear the table before appending new rows
    resultsTableBody.innerHTML = '';

    // Loop through all possible points from 0 to maxPunten with steps of 0.25
    for (let correct = 0; correct <= maxPunten; correct += 0.25) {
        const incorrect = maxPunten - correct; // Fouten = Max punten - Correcte punten
        let grade = 0;

        if (nTermCheckbox.checked) {
            // Calculate grade using Nterm formula
            if (maxPunten && voldoende && nTerm) {
                grade = ;
            }
        } else if (percentageCheckbox.checked) {
            // Calculate grade using percentage
            grade = ;
        } else if (foutenCheckbox.checked) {
            // Calculate grade based on fouten per punt
            grade = ;
        } else if (behaaldeCheckbox.checked) {
            // Calculate grade based on behaalde punten
            grade = ;
        }

        // Ensure the grade is between 0 and 10
        grade = Math.max(0, Math.min(grade, 10));

        // Add row to the table for each correct answer value
        const newRow = `
            <tr>
                <td>${correct.toFixed(2)}</td>
                <td>${incorrect.toFixed(2)}</td>
                <td>${grade.toFixed(2)}</td>
            </tr>
        `;
        console.log('New row:', newRow);
        resultsTableBody.innerHTML += newRow;
    }

    // Check if no valid calculation was made
    if (!resultsTableBody.innerHTML) {
        console.log('No valid calculation made.');
    }
}
