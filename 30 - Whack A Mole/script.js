const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;
let stop;

const randomTime = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randomTime(1000, 200);
  const hole = randomHole(holes);

  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  document.querySelector("button").disabled = true;
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  peep();
  setTimeout(() => {
    timeUp = true;
    document.querySelector("button").disabled = false;
    clearInterval(stop);
  }, 10000);

  let countdown = 10;
  stop = setInterval(() => {
    countdown--;
    console.log(countdown);
  }, 1000);
};

function boink(e) {
  if (!e.isTrusted) return;
  score++;
  scoreBoard.textContent = score;
  this.classList.remove("up");
}

moles.forEach((mole) => mole.addEventListener("click", boink));
