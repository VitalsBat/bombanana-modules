const answer = document.querySelector(".answer");
const numberButtons = document.querySelectorAll("[data-number]");
const phases = document.querySelectorAll(".phase");
const light = document.querySelector(".light");
const correctAns = "86";
const secondAns = 9;
let solved = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (solved) {
      if (button.dataset.number == String(secondAns)) {
        phases[0].classList.add("done");
      }
      return;
    }
    answer.textContent += button.dataset.number;
    if (answer.textContent.length == 2) {
      if (answer.textContent == correctAns) {
        light.classList.add("is-lit");
        phases[1].classList.add("done");
        solved = true;
      } else {
        answer.textContent = "";
      }
    }
  });
});
