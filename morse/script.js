const buttons = document.querySelectorAll("button.upbutton")
const screens = document.querySelectorAll(".screen")
const enter = document.querySelector(".enter")
const morseFiles =[
  "https://vitalsbat.github.io/bombanana-modules/morse/morse1.wav",
  "https://vitalsbat.github.io/bombanana-modules/morse/morse3.wav",
  "https://vitalsbat.github.io/bombanana-modules/morse/morse5.wav",
  "https://vitalsbat.github.io/bombanana-modules/morse/morse7.wav",
]
let current = 0
let isRunning = true
let curAudio = null

let curNumbers = [0, 0, 0, 0]
const ans = [5, 9, 8, 1]

function playNext() {
  if (!isRunning) return

  screens.forEach(screen => screen.classList.remove("blink"))

  const screen = screens[current]
  screen.classList.add("blink")

  curAudio = new Audio(morseFiles[current])
  curAudio.play()

  curAudio.addEventListener("ended", () => {
    screen.classList.remove("blink")

    setTimeout(() => {
      current = (current + 1) % 4
      playNext();
    }, 1000)
  }, {once: true})
}

function stopMorse() {
  isRunning = false
  if (curAudio) {
    curAudio.pause()
    curAudio.currentTime = 0
  }
  screens.forEach(screen => screen.classList.remove("blink"))
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (curPhase === 0) {
      curNumbers[index] = (curNumbers[index] + 1) % 10
      screens[index].textContent = curNumbers[index]
    }
  })
})

enter.addEventListener("click", () => {
  if (curPhase === 0) {
    if (equalArray(curNumbers, ans)) {
      complete()
      stopMorse()
    } else {
      addCross()
    }
  }
})

playNext()
