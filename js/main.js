let btn = document.getElementById("btn");
let x_btn = document.getElementById("x_btn");
let displayIMG = document.querySelector(".displayIMG");

btn.onclick = function() {
    displayIMG.style.visibility = "visible";
}
x_btn.onclick = function() {
    displayIMG.style.visibility = "hidden";
}