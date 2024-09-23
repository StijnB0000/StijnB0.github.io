console.log("kleurenmodellen.html body.js loaded");

// alles makkelijk toegankelijk maken door het aan een kortere variable te koppelen.
hoverlistR = document.getElementById("hoverlistR");
hoverlistG = document.getElementById("hoverlistG");
hoverlistB = document.getElementById("hoverlistB");
hoverlistGe = document.getElementById("hoverlistGe");

//lijst met aan/uit toggle, als de website start staan ze allemaal op false
let IsRoodActief = false;
let IsGroenActief = false;
let IsBlauwActief = false;
let IsGeelActief = false;

/*
Eerst checken per element of er een muis op gaat, dan checken of hij niet getoggled is met 
muisklik. Als hij nog niet actief is zal hij de kleur laten zien die erbij hoort.
*/
hoverlistR.addEventListener("mouseover", function(){
    console.log("Hoverlist R is hovered");
    if (!IsRoodActief) {
        document.getElementById("clrRedBox").style.backgroundColor = "#c3423f";
    }
});

hoverlistG.addEventListener("mouseover", function(){
    console.log("Hoverlist G is hovered");
    if (!IsGroenActief) {
        document.getElementById("clrGreenBox").style.backgroundColor = "#4b7f52";
    }
});

hoverlistB.addEventListener("mouseover", function(){
    console.log("Hoverlist B is hovered");
    if (!IsBlauwActief) {
        document.getElementById("clrBlueBox").style.backgroundColor = "#3c91e6";
    }
});

hoverlistGe.addEventListener("mouseover", function(){
    console.log("Hoverlist Ge is hovered");
    if (!IsGeelActief) {
        document.getElementById("clrYellowBox").style.backgroundColor = "#FFFF00";
    }
});


/*
Eerst checken per element of er een muis af gaat, dan checken of hij niet getoggled is met 
muisklik. Als hij nog niet actief is zal hij de kleur weer doorzichtig maken.
*/
hoverlistR.addEventListener("mouseleave", function(){
    if (!IsRoodActief) {
        document.getElementById("clrRedBox").style.backgroundColor = "#00000000";
    }
});


hoverlistB.addEventListener("mouseleave", function(){
    if (!IsBlauwActief) {
        document.getElementById("clrBlueBox").style.backgroundColor = "#00000000";
    }
});

hoverlistG.addEventListener("mouseleave", function(){
    if (!IsGroenActief) {
        document.getElementById("clrGreenBox").style.backgroundColor = "#00000000";
    }
});

hoverlistGe.addEventListener("mouseleave", function(){
    if (!IsGeelActief) {
        document.getElementById("clrYellowBox").style.backgroundColor = "#00000000";
    }
});

/*
Checken of de muis klikt, dan wisselt hij van actief/onactief naar het tegenovergestelde., 
dan kleur veranderen op basis van true or false op of hij actief is. 
Daarna op basis van true or false de list style aanpassen zodat je ziet welke aan/uit staat.
Dit 4 keer doen voor elke kleur
*/
hoverlistR.addEventListener("click", function(){
    IsRoodActief = !IsRoodActief
    document.getElementById("clrRedBox").style.backgroundColor = IsRoodActief ? "#c3423f" : "#00000000";
    document.getElementById("hoverlistR").style.listStyle = IsRoodActief ? "square" : "none";
});

hoverlistG.addEventListener("click", function(){
    IsGroenActief = !IsGroenActief
    document.getElementById("clrGreenBox").style.backgroundColor = IsGroenActief ? "#4b7f52" : "#00000000";
    document.getElementById("hoverlistG").style.listStyle = IsGroenActief ? "square" : "none";
});

hoverlistB.addEventListener("click", function(){
    IsBlauwActief = !IsBlauwActief
    document.getElementById("clrBlueBox").style.backgroundColor = IsBlauwActief ? "#3c91e6" : "#00000000";
    document.getElementById("hoverlistB").style.listStyle = IsBlauwActief ? "square" : "none";
});

hoverlistGe.addEventListener("click", function(){
    IsGeelActief = !IsGeelActief
    document.getElementById("clrYellowBox").style.backgroundColor = IsGeelActief ? "#FFFF00" : "#00000000";
    document.getElementById("hoverlistGe").style.listStyle = IsGeelActief ? "square" : "none";
});



/* 
de sliders aan een veriabele koppellen voor makkelijker en kortere code.
*/ 
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
    document.getElementById("GekleurdeTekst").style.color = `rgb(${rood}, ${groen}, ${blauw})`;
}



// zodra de slider veranderd de functie roepen die de tekst veranderd
cyaanSlider.addEventListener('input', updateColor);
magentaSlider.addEventListener('input', updateColor);
geelSlider.addEventListener('input', updateColor);

