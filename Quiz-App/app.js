const questionElement = document.querySelector("#question");
const answerBtn = document.querySelector("#answerBtn");
const nextBtn = document.querySelector("#nextBtn");

const questions = [
  // question 1
  {
    question: "Which is largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: "false",
      },
      {
        text: "Blue Whale",
        correct: "true",
      },
      {
        text: "Elephant",
        correct: "false",
      },
      {
        text: "Giraffe",
        correct: "false",
      },
    ],
  },

  // question 2
  {
    question: "Which is smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: "true",
      },
      {
        text: "Blue Whale",
        correct: "false",
      },
      {
        text: "Bhutan",
        correct: "false",
      },
      {
        text: "Shri Lanka",
        correct: "false",
      },
    ],
  },

  // question 3
  {
    question: "Which is largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: "true",
      },
      {
        text: "Gobi",
        correct: "false",
      },
      {
        text: "Sahara",
        correct: "false",
      },
      {
        text: "Antarctia",
        correct: "true",
      },
    ],
  },

  //   question 4
  {
    question: "Which is smallest continent in the world?",
    answers: [
      {
        text: "Asia",
        correct: "true",
      },
      {
        text: "Australia",
        correct: "true",
      },
      {
        text: "Arctic",
        correct: "false",
      },
      {
        text: "Africa",
        correct: "true",
      },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
  } else {
    selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
};

const showScore=() => {
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

const handleNextBtn = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click',() => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();
