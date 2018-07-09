var color1 = document.getElementById("input1")
var color2 = document.getElementById("input2")
var body = document.getElementById("gradient")
var resultField = document.getElementById("result")
var button = document.getElementById("random")

function setGradient() {
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+color2.value+")"
	resultField.textContent = body.style.background
}

setGradient()
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
button.addEventListener("click", setRandomColor)

//Random color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
	color1.value = getRandomColor()
	color2.value = getRandomColor()
	setGradient()
}