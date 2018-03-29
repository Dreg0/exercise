function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keys.length; i++) {
    key.addEventListener("transitionend", removeTransition);
  }
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  else {
    this.classList.remove("playing");
  }
}

// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
