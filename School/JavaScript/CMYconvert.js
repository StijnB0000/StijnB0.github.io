const cyaanSlider = document.getElementById('CyaanSlider');
const magentaSlider = document.getElementById('MagentaSlider');
const geelSlider = document.getElementById('GeelSlider');


/*
Een functie die word geroepen zodra er een verandering is in een van de sliders.
*/
function updateColor() {
    // de waarde van de sliders is een variabele ztten
    const cyaanwaarde = cyaanSlider.value;
    const magentawaarde = magentaSlider.value;
    const geelwaarde = geelSlider.value;


    // de waardes in de console printen voor het testen, de rare $ tekens zijn ervoor om te zorgen dat 
    // de waardes echt geladen zijn 
    console.log(`Cyaan: ${cyaanwaarde}, Magenta: ${magentawaarde}, Geel: ${geelwaarde}`);


    //CMY omzetten in RGB voor de css
    const rood = 255 - cyaanwaarde; 
    const groen = 255 - magentawaarde; 
    const blauw = 255 - geelwaarde; 

    // De kleur veranderen van het element doormiddel van css en de $ tekens om te zorgen dat de
    //elementen die je wilt veranderen ingeladen zijn
    document.getElementsByClassName("coloredBlock")[0].style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;

}



// zodra de slider veranderd de functie roepen die de tekst veranderd
cyaanSlider.addEventListener('input', updateColor);
magentaSlider.addEventListener('input', updateColor);
geelSlider.addEventListener('input', updateColor);