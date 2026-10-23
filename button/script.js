const buttons = document.querySelectorAll("button.gray")
const screens = document.querySelectorAll(".screen")

let cur = [0, 0, 0, 0]
const ans = [3, 0, 3, 5]

function reset() {
  cur = [0, 0, 0, 0]
  screens.forEach((screen) => {
    screen.textContent = "0"
  })
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (curPhase === 0) {
      cur[index] += 1
      screens[index].textContent = cur[index]
      if (cur[index] > ans[index]) {
        reset()
        addCross()
      }
      if (equalArray(cur, ans)) {
        complete()
      }
    }
  })
})
