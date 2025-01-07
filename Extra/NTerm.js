console.log('Script Loaded');

function setupCheckboxes() {
    const checkboxes = [
        document.getElementById('nterm-checkbox'),
        document.getElementById('percentage-checkbox'),
        document.getElementById('fouten-checkbox'),
        document.getElementById('behaalde-checkbox')
    ];

    // Add event listeners to each checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // Uncheck all other checkboxes
                checkboxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
}

function calculate() {
    console.log('Calculation started');

    // Get form inputs
    const voldoendeInput = document.getElementById('voldoende');
    const maxPuntenInput = document.getElementById('max-punten');
    const nTermInput = document.getElementById('nterm-input');
    const percentageInput = document.getElementById('percentage-input');
    const foutenInput = document.getElementById('fouten-input');
    const behaaldeInput = document.getElementById('behaalde-input');
    const StappenPunten = document.getElementById('stappen-punten');

    const nTermCheckbox = document.getElementById('nterm-checkbox');
    const percentageCheckbox = document.getElementById('percentage-checkbox');
    const foutenCheckbox = document.getElementById('fouten-checkbox');
    const behaaldeCheckbox = document.getElementById('behaalde-checkbox');

    const resultsTableBody = document.getElementById('results-table-body');

    // Parse input values
    const voldoende = parseFloat(voldoendeInput.value) || 5.5;
    const maxPunten = parseFloat(maxPuntenInput.value) || 28;
    const nTerm = parseFloat(nTermInput.value) || 1;
    const percentage = parseFloat(percentageInput.value) || 55;
    const foutenPerPunt = parseFloat(foutenInput.value) || 1;
    const behaaldePunten = parseFloat(behaaldeInput.value) || 0;
    const stappenPuntenWaarde = parseFloat(StappenPunten.value) || 0;

    console.log('Voldoende:', voldoende);
    console.log('Max Punten:', maxPunten);

    // Clear the table before appending new rows
    resultsTableBody.innerHTML = '';

    // Loop through all possible points from 0 to maxPunten with steps of 0.25
    for (let correct = 0; correct <= maxPunten; correct += stappenPuntenWaarde) {
        const incorrect = maxPunten - correct; // Fouten = Max punten - Correcte punten
        let grade = 0;

        if (nTermCheckbox.checked) {
            // Calculate grade using Nterm formula
            if (maxPunten && voldoende && nTerm) {
                grade = (correct / maxPunten) * 9 + nTerm;
            }
        } else if (percentageCheckbox.checked) {
            // Ensure all required inputs are valid numbers
            if (maxPunten > 0 && !isNaN(voldoende) && !isNaN(percentage)) {
                // Calculate the grade based on percentage
                const grens = percentage / 100; // Percentage omgezet naar een decimaal
                grade = ((correct / maxPunten) - grens) * (10 - voldoende) / (1 - grens) + voldoende;
            } else {
                console.error('Invalid inputs for maxPunten, percentage, or voldoende.');
            }
        } else if (foutenCheckbox.checked) {
            grade = maxPunten/( incorrect/foutenPerPunt);

        } else if (behaaldeCheckbox.checked) {
            // Calculate grade based on behaalde punten

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

// Initialize the checkboxes setup
setupCheckboxes();




function exportToCSV() {
    const table = document.getElementById('results-table');
    let csvContent = '';

    // Get table headers
    const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
    csvContent += headers.join(',') + '\n';

    // Get table rows
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
        csvContent += cells.join(',') + '\n';
    });

    // Create a Blob for the CSV data
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'results.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('CSV exported successfully');
}
