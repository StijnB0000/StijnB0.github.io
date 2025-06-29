// shared/menu.js

function generateMenu() {
    const menuData = [
        {
            name: "Personal",
            id: "Personal",
            subcategories: [
                { name: "About Me", href: "/Personal/About_Me.html" },
                { name: "Family", href: "/Personal/Family.html" },
                { name: "Under Construction", href: "/Personal/UnderConstruction.html" },
            ],
        },
        {
            name: "School",
            id: "School",
            subcategories: [
                { name: "Binairstelsel", href: "/School/Binairstelsel.html" },
                { name: "Bitmap- & Vectorafbeeldingen", href: "/School/Bitmap&VectorAfbeeldingen.html" },
                { name: "Compressie", href: "/School/compressie.html" },
                { name: "Kleurenmodellen", href: "/School/Kleurenmodellen.html" },
            ],
        },
        {
            name: "Extra's",
            id: "Extras",
            subcategories: [
                { name: "Game", href: "/Extra/Game.html" },
                { name: "Nterm", href: "/Extra/NTerm.html" },
            ],
        },
    ];

    const menuContainer = document.getElementById("menu-placeholder");
    if (!menuContainer) {
        console.error("Menu placeholder not found!");
        return;
    }

    // Create Home Button
    const homeButton = document.createElement("button");
    homeButton.className = "HomeButton";
    homeButton.innerHTML = '<span><a href="/index.html" class="home-link-style">Home!</a></span>'; // Use class for styling
    menuContainer.appendChild(homeButton);

    // Create Dropdown (Hamburger Menu)
    const dropdownDiv = document.createElement("div");
    dropdownDiv.className = "dropdown";

    const hamburgerLabel = document.createElement("label");
    hamburgerLabel.className = "hamburger";

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 32 32");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("class", "line line-top-bottom");
    path1.setAttribute("d", "M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("class", "line");
    path2.setAttribute("d", "M7 16 27 16");

    svg.appendChild(path1);
    svg.appendChild(path2);
    hamburgerLabel.appendChild(checkboxInput);
    hamburgerLabel.appendChild(svg);
    dropdownDiv.appendChild(hamburgerLabel);
    menuContainer.appendChild(dropdownDiv);

    // Create Dropdown Content
    const dropdownContentDiv = document.createElement("div");
    dropdownContentDiv.className = "dropdown-content";
    const ul = document.createElement("ul");

    menuData.forEach(category => {
        const li = document.createElement("li");
        li.className = "menu-opties";
        li.id = category.id;
        li.textContent = category.name;

        const subUl = document.createElement("ul");
        subUl.className = "subcategories";
        category.subcategories.forEach(sub => {
            const subLi = document.createElement("li");
            subLi.className = "subcategory";
            const a = document.createElement("a");
            a.href = sub.href;
            a.textContent = sub.name;
            subLi.appendChild(a);
            subUl.appendChild(subLi);
        });
        li.appendChild(subUl);
        ul.appendChild(li);
    });

    dropdownContentDiv.appendChild(ul);
    menuContainer.appendChild(dropdownContentDiv);

    // Add event listener for hamburger functionality
    dropdownContentDiv.style.display = "none"; // Initially hidden

    checkboxInput.addEventListener("click", () => {
        dropdownContentDiv.style.display =
            dropdownContentDiv.style.display === "block" ? "none" : "block";
    });
}

// Generate the menu when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateMenu);
