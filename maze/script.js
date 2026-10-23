const buttons = document.querySelectorAll("button.direction-button")
const lights = document.querySelectorAll(".light")


const start = 8
let position = start
const victory = 14

walls = [
  [1,2], [1,7], [3,9],
  [7,13], [8,14], [8,9], [9,10], [10,11], [11,17],
  [12,13], [13,14], [15,21], [15,16], [16,22],
  [24,25], [25,26], [27,33], [28,34],
  [31,32], [34,35],
  [5,6], [11,12], [17,18], [23,24], [29,30]
]

function containArray(target, nested) {
  return nested.some(arr => equalArray(arr, target));
}

function updatePos(target) {
  lights[position].classList.remove("red")
  position = target
  if (target != victory) {
    lights[target].classList.add("red")
  } else {
    complete()
  }
}

function move(target) {
  if (containArray([position, target], walls) || containArray([target, position], walls)) {
    updatePos(start)
    addCross()
  } else if (target < 0 || target > 35) {
    updatePos(start)
    addCross()
  } else {
    updatePos(target)
  }
}

buttons[0].addEventListener("click", () => {
  if (curPhase === 0) {
    const target = position - 6
    move(target)
  }
})

buttons[1].addEventListener("click", () => {
  if (curPhase === 0) {
    const target = position +1
    move(target)
  }
})

buttons[2].addEventListener("click", () => {
  if (curPhase === 0) {
    const target = position + 6
    move(target)
  }
})

buttons[3].addEventListener("click", () => {
  if (curPhase === 0) {
    const target = position - 1
    move(target)
  }
})
