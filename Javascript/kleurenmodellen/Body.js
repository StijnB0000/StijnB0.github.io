console.log("kleurenmodellen.html body.js loaded");

hoverlistR = document.getElementById("hoverlistR");
hoverlistG = document.getElementById("hoverlistG");
hoverlistB = document.getElementById("hoverlistB");
hoverlistGe = document.getElementById("hoverlistGe");


//als de muis erop gaat:

hoverlistR.addEventListener("mouseover", function(){
    console.log("Hoverlist R is hovered");
    document.getElementById("clrRedBox").style.backgroundColor = "#c3423f";
});

hoverlistG.addEventListener("mouseover", function(){
    console.log("Hoverlist G is hovered");
    document.getElementById("clrGreenBox").style.backgroundColor = "#4b7f52";
});

hoverlistB.addEventListener("mouseover", function(){
    console.log("Hoverlist B is hovered");
    document.getElementById("clrBlueBox").style.backgroundColor = "#3c91e6";
});

hoverlistGe.addEventListener("mouseover", function(){
    console.log("Hoverlist Ge is hovered");
    document.getElementById("clrYellowBox").style.backgroundColor = "#d9f83b";
});


// en nu als de muis eraf gaat:

hoverlistR.addEventListener("mouseleave", function(){
    document.getElementById("clrRedBox").style.backgroundColor = "#00000000";
});

hoverlistG.addEventListener("mouseleave", function(){
    document.getElementById("clrGreenBox").style.backgroundColor = "#00000000";
});

hoverlistB.addEventListener("mouseleave", function(){
    document.getElementById("clrBlueBox").style.backgroundColor = "#00000000";
});

hoverlistGe.addEventListener("mouseleave", function(){
    document.getElementById("clrYellowBox").style.backgroundColor = "#00000000";
});



