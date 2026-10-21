const buttons = document.querySelectorAll("button[data-dir]")
const braille = document.querySelector(".braille")
const light = document.querySelector(".light")

const l = [
  ["yellow", "blue", "red", "green"],
  ["green", "blue", "yellow", "red"],
  ["red", "green", "blue", "yellow"],
  ["yellow", "red", "green", "blue"]
]
const b = [
  ["2", "7", "6", "3", "4"],
  ["4", "1", "2", "9", "8"],
  ["3", "5", "9", "8", "6"],
  ["7", "2", "1", "3", "6"]
]
const ans = [
  ["left", "down", "up", "right"],
  ["left", "right", "left", "down"],
  ["left", "right", "up", "right"]
]
curIter = 0

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (mistake < 3 && curPhase < 4) {
      if (button.dataset.dir == ans[curIter][curPhase]) {
        complete()
        light.classList.remove("red", "green", "blue", "yellow")
        light.classList.add(l[curIter][curPhase])
        braille.dataset.number = b[curIter][curPhase]
      } else {
        restart()
        addCross()
        curIter = curIter + 1
        light.classList.add(l[curIter][curPhase])
        braille.dataset.number = b[curIter][curPhase]
      }
    }
  })
})
