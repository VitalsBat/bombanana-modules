const buttons = document.querySelectorAll("button[data-output]")
const answer = document.querySelector(".answer")
const light = document.querySelector(".light")

const ans1 = "39"
const ans2 = "7"

buttons.forEach((button) => {
  button.addEventListener("click", () => {
  if (curPhase === 0) {
    answer.textContent += button.dataset.output
    if (answer.textContent.length >= 2) {
      if (answer.textContent === ans1) {
        complete()
        light.classList.add("yellow")
      } else {
        addCross()
        answer.textContent = ""
      }
    }
  } else if (curPhase === 1) {
    if (button.dataset.output === ans2) {
      complete()
    } else {
      addCross()
    }
  }
})})
