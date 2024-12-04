document.addEventListener('DOMContentLoaded', () => {
    // selecteer de elementen
    const hamburger = document.querySelector('.hamburger input');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Click event op hamburger (het menu lijkt op een hamburger)
    hamburger.addEventListener('click', () => {
        // aan/uit toggle van de zichtbaarheid
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});
