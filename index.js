document.addEventListener("DOMContentLoaded", () => {
  // connect de document dingen aan variabelen.
  const hamburger = document.querySelector(".hamburger input");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownContent.style.display = dropdownContent.style.display = "none";

  // Click event op hamburger (het menu lijkt op een hamburger)
  hamburger.addEventListener("click", () => {
    // aan/uit toggle van de zichtbaarheid
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });
});

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    // Zorg ervoor dat de loading screen minimaal 3 seconden zichtbaar is
    setTimeout(() => {
      let loadingScreen = document.getElementsByClassName("LoadingScreen")[0];
      if (loadingScreen) {
        loadingScreen.style.display = "none";
        console.log("Page Loaded Successfully!");
      }
    }, 1900); // 3000 miliseconde -> 3 sec
  } else {
    let loadingScreen = document.getElementsByClassName("LoadingScreen")[0];
    if (loadingScreen) {
      loadingScreen.style.display = "block";
      console.warn("Page didn't load successfully yet!");
    }
  }
};
