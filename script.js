const text = "Hi, I'm Venkat 👋";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("intro-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
