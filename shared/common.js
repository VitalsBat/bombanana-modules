// Mistake Counter
const cross = document.querySelector(".cross")
let mistake = 0

function addCross() {
  mistake = Math.min(mistake + 1, 3);
  cross.classList.remove("red1", "red2", "red3");
  if (mistake > 0) {
    cross.classList.add(`red${mistake}`)
  }
}

// Phase Counter
const phases = document.querySelectorAll(".phase")
let curPhase = 0

function complete() {
  curPhase = curPhase + 1
  if (curPhase > 0) {
    phases[phases.length - curPhase].classList.add("done")
  }
}

// Format Braille
document.querySelectorAll('.braille').forEach(el => {
  if (el.children.length == 0) {
    el.innerHTML = '<span></span><span></span><span></span><span></span>';
  }
});
