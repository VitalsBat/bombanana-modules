const dial = document.querySelector(".dial");
const buttons = document.querySelectorAll(".ansbutton")
const check = "symbol lock.mp3"
const audio = new Audio(check)

let curPos = 0
let curIter = 0

const sympos = [
  [1, 0, 2, 1],
  [3, 2, 3, 0],
  [1, 3, 2, 0]
]
const ans = [
  ["yellow", "yellow", "red", "red"],
  ["red", "yellow", "green", "yellow"],
  ["yellow", "yellow", "red", "yellow"]
]

function randomColor() {
  const permutations = [
    ["red", "yellow", "green"],
    ["red", "green", "yellow"],
    ["yellow", "red", "green"],
    ["yellow", "green", "red"],
    ["green", "red", "yellow"],
    ["green", "yellow", "red"]
  ];
  const current = Array.from(buttons, button => button.dataset.color);
  const choices = permutations.filter(permutation =>
    !permutation.every((color, index) => color === current[index])
  );
  const next = choices[Math.floor(Math.random() * choices.length)];

  buttons.forEach((button, index) => {
    button.dataset.color = next[index];
  });
}

let rotation = 0;
let rotnum = 0
dial.addEventListener("click", () => {
  if (curPhase < 4 && mistake < 3) {
    rotation += 90;
    dial.style.transform = `rotate(${rotation}deg)`;
    rotnum = (rotnum + 1) % 4
    if (rotnum === sympos[curIter][curPhase]) {
      audio.play().catch(() => {})
    }
  }
});

randomColor()
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (curPhase < 4 && mistake < 3) {
      if (rotnum === sympos[curIter][curPhase] && button.dataset.color === ans[curIter][curPhase]) {
        complete()
        randomColor()
      } else {
        addCross()
        restart()
        curIter += 1
      }
    }
  })
})
