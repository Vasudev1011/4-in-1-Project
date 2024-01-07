const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const black = document.getElementById("black");
const yellow = document.getElementById("yellow");
const violet = document.getElementById("voilet");

const heading = document.getElementById("heading");
const foot = document.getElementById("foot");

const body = document.body;

function changeColors(bgColor, textColor) {
  body.style.background = bgColor;
  heading.style.color = textColor;
  foot.style.color = textColor;
}

blue.onclick = () => changeColors("rgb(52, 134, 235)", "black");
red.onclick = () => changeColors("rgb(235, 52, 52)", "black");
green.onclick = () => changeColors("rgb(5, 173, 53)", "black");
black.onclick = () => changeColors("rgb(28, 28, 28)", "white");
yellow.onclick = () => changeColors("rgb(214, 203, 43)", "black");
violet.onclick = () => changeColors("rgb(122, 52, 235)", "black");
