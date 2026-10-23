const buttons = document.querySelectorAll("button")
const check = "soundboard check true.mp3"
const audio = new Audio(check)

const ans1 = 4
const ans2 = [2,3,7,8]
const color = "yellow"

let curPressed = Array(4).fill(false)

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (curPhase === 0) {
      if (index === ans1) {
        complete()
        audio.play().catch(() => {})
        for (let i = 0; i < 9; i++) {
          if (i != index) {
            buttons[i].classList.remove("red", "yellow", "green", "blue")
          }
        }
      }
    } else if (curPhase === 1) {
      if (ans2.includes(index)) {
        let pos = ans2.indexOf(index)
        button.classList.add(color)
        curPressed[pos] = true
        if (curPressed.every((value) => (value === true))) {
          complete()
        }
      } else {
        addCross()
      }
    }
  })
})
