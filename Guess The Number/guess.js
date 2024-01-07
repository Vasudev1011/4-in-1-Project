// console.log(randNum);

const btn = document.getElementById("btn");
const previousGuess = document.getElementById("pre-guess");
const remGuess = document.getElementById("rem-guess");
let count = 10;
let countDown = count;

btn.onclick = () => {
  gameOn();
};

function gameOn() {
  let randNum = Math.floor(Math.random() * 10 + 1);
  let userGuess = document.getElementById("inp");

  //   console.log((previousGuess.innerText = `Congrats you got it right`));
  console.log(userGuess.value);
  console.log(randNum);

  let result = Number(userGuess.value);

  if (result > 0) {
    if (result === randNum) {
      previousGuess.innerText = `Congrats you got it right`;
      setTimeout(() => {
        remGuess.innerText = `Guess Remaining:- ${count}`;
      }, 2000);
      remGuess.innerText = `Guess Remaining refill:-${count}`;
      countDown = count;
    } else {
      countDown = countDown - 1;
      if (countDown === 0) {
        previousGuess.innerText = `Previous Guess:- ${userGuess.value}`;
        setTimeout(() => {
          remGuess.innerText = `Guess Remaining:- ${count}`;
        }, 2000);
        remGuess.innerText = `Better Luck Next Time`;
        countDown = count;
      } else {
        previousGuess.innerText = `Previous Guess:- ${userGuess.value}`;
        remGuess.innerText = `Guess Remaining:- ${countDown}`;
      }
    }
  } else {
    alert("please Enter Your Guess");
  }
}
