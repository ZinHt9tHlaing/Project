const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const msg3 = document.querySelector("#msg3");
const guessBtn = document.querySelector("#guessBtn");
const gameDiv = document.querySelector("#gameDiv");
const gameBorder = document.querySelector("#gameBorder");
const gameRestart = document.querySelector("#gameRestart");

let chance = 10;
let guessArr = [];

let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);

let play = () => {
  let guessNum = parseInt(document.querySelector("#guessNum").value);

  // number check between 1 to 50
  if (guessNum < 1 || guessNum > 50) {
    alert("Please enter number between 1 to 50");
  } else {
    // answer - high / equal / low
    if (guessNum > answer) {
      // high
      gameDiv.classList.add("wrong");
      gameBorder.classList.add("num-border");
      msg1.innerHTML = `Your number is <span class="text-red-700">too high</span> 😤`;
      chance--;
      msg2.innerText = "Number of chance to guess : " + chance;
      guessArr.push(guessNum);
      msg3.innerText = "Guessed numbers are : " + guessArr;
      document.querySelector("#guessNum").value = "";
    }
    // equal
    else if (guessNum === answer) {
      gameDiv.classList.add("true");
      guessBtn.disabled = true;
      gameBorder.classList.add("num-border");
      msg1.innerText = "🎉 Congratulations! You won this game 🥳";
    }
    // low
    else {
      gameDiv.classList.add("wrong");
      gameBorder.classList.add("num-border");
      msg1.innerHTML = `Your number is <span class="text-red-700 font-bold ">too low</span> 👿`;
      chance--;
      msg2.innerText = "Number of chance to guess : " + chance;
      guessArr.push(guessNum);
      msg3.innerText = "Guessed numbers are : " + guessArr;
      document.querySelector("#guessNum").value = "";
    }

    // chance check start
    if (chance <= 0) {
      guessBtn.disabled = true;
      alert("Your chance is empty. Please restart your game");
      restart();
    }
    // chance check end
  }
};

guessBtn.addEventListener("click", play);

const restart = () => {
  answer = Math.floor(Math.random() * 50) + 1;
  console.log(answer);

  document.querySelector("#guessNum").value = "";
  guessBtn.disabled = false;
  gameDiv.classList.remove("wrong");
  gameDiv.classList.remove("true");
  msg1.innerText = "Your game restarts now !!";
  chance = 10;
  msg2.innerText = "Number of chance to guess : " + chance;
  guessArr = [];
  msg3.innerText = "Guessed numbers are : " + guessArr;
};

gameRestart.addEventListener("click", restart);
