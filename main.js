// To select the body
let body = document.getElementById("gradient");
// Selecting the two color-inputs
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
// Selecting the h3 tag
let css = document.querySelector("h3");

// creating a function to get the value of the input colors
function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

// Performing callback functions to set the background color
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// creating a random button
let button = document.createElement("button");
button.appendChild(document.createTextNode("Random"));
button.classList.add("button");
body.appendChild(button);

// generate random value for color
function randomColor(){
    let color = "rgb(" + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")";
    return color;
}

// Set random color
function setRandom(){
    let random1 = randomColor();
    let random2 = randomColor();
    body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
    css.textContent = body.style.background + ";";
}

// To perform call-back function to set the random colors
button.addEventListener("click", setRandom);