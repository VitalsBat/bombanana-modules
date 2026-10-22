const wheels = document.querySelectorAll(".wheel")
const braille = document.querySelectorAll(".braille")
const enter = document.querySelector(".v-enter")

let curPos = [1, 1, 1, 1]
const ans = [7, 4, 6, 3]

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

enter.addEventListener("click", () => {
  if (curPhase === 0) {
    if (equalArray(curPos, ans)) {
      complete()
    } else {
      addCross()
    }
  }
})
