console.log("kleurenmodellen.html body.js loaded");

hoverlistR = document.getElementById("hoverlistR");
hoverlistG = document.getElementById("hoverlistG");
hoverlistB = document.getElementById("hoverlistB");
hoverlistGe = document.getElementById("hoverlistGe");

//lijst met aan/uit toggle
let IsRoodActief = false;
let IsGroenActief = false;
let IsBlauwActief = false;
let IsGeelActief = false;

//als de muis erop gaat:

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


// en nu als de muis eraf gaat:

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





