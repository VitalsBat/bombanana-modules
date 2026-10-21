const levers = document.querySelectorAll(".lever")
let curPos = [0, 0, 0, 0]
const ans = [1, 1, 0, 1]

const enter = document.querySelector(".enter")

function equalArray(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  return arr1.every((elt, idx) => (elt === arr2[idx]))
}

levers.forEach((lever, index) => {
  lever.addEventListener("click", () => {
    lever.dataset.state = (curPos[index] === 0 ? "up" : "down")
    curPos[index] = (curPos[index] + 1)%2
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
