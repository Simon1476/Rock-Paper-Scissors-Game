const winSound = new Audio("./sound/win.mp3");
const loseSound = new Audio("./sound/lose.mp3");
const clickSound = new Audio("./sound/click.mp3");

export function playWin() {
  playSound(winSound);
}

export function playLose() {
  playSound(loseSound);
}

export function playClick() {
  playSound(clickSound);
}
