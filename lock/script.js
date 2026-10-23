const wheels = document.querySelectorAll(".wheel")
const braille = document.querySelectorAll(".braille")
const enter = document.querySelector(".v-enter")
const lights = document.querySelectorAll(".light")

const colors = [
  ["green", "blue", "red", "yellow"],
  ["blue", "yellow", "green", "red"],
  ["yellow", "green", "red", "blue"],
  ["red", "blue", "yellow", "green"]
]

let curPos = [1, 1, 1, 1]
const ans = [
  [7, 4, 6, 3],
  [1, 5, 9, 6],
  [4, 2, 6, 3],
  [3, 4, 7, 8]
]
let curIter = 0

wheels.forEach((wheel, index) => {
  wheel.addEventListener("click", () => {
    if (curPhase === 0) {
      curPos[index] = curPos[index] + 1
      if (curPos[index] > 9) {
        curPos[index] = 1
      }
      braille[index].dataset.number = String(curPos[index])
    }
  })
})

function wrong() {
  if (curIter < 3) {
    curIter += 1
    for (let i = 0; i < 4; i++) {
      lights[i].classList.remove("red", "green", "blue", "yellow")
      lights[i].classList.add(colors[curIter][i])
    }
  }
}

enter.addEventListener("click", () => {
  if (curPhase === 0) {
    if (equalArray(curPos, ans[curIter])) {
      complete()
    } else {
      addCross()
      wrong()
      curPos = [1, 1, 1, 1]
      braille.forEach((num) => {
        num.dataset.number = 1
      })
    }
  }
})
