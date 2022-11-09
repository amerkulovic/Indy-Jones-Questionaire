const questions = [
  {
    question: "What was the name of the first Indiana Jones movie?",
    choice1: "The Raiders of the Lost Ark",
    choice2: "The Temple of Doom",
    choice3: "The Last Crusade",
    choice4: "The Kingdom of the Crystal Skull",
    answer: "The Raiders of the Lost Ark",
  },
  {
    question: "Who plays Indiana Jones?",
    choice1: "Mel Gibson",
    choice2: "Leonardo Di Caprio",
    choice3: "Harrison Ford",
    choice4: "Arnold Schwarzeneggar",
    answer: "Harrison Ford",
  },
  {
    question: 'Which country does "Temple of Doom" mainly take place in?',
    choice1: "Spain",
    choice2: "India",
    choice3: "Nepal",
    choice4: "Italy",
    answer: "India",
  },
  {
    question: "Who is Indiana Jones' companion in 'The Last Crusade'?",
    choice1: "Shortround",
    choice2: "Marion Ravenwood",
    choice3: "Henry Jones, Sr.",
    choice4: "Willie Scott",
    answer: "Henry Jones, Sr.",
  },
  {
    question: 'When did "Indiana Jones and the Raiders of the Lost Ark" release?',
    choice1: "1979",
    choice2: "1984",
    choice3: "1978",
    choice4: "1981",
    answer: "1981",
  },
];
const btnStartEl = document.querySelector(".btn-start");
const btnNextEl = document.querySelector(".btn-next");
const btnFinishEl = document.querySelector(".btn-finish");
const currentQuestionEl = document.querySelector(".current--question");
const choice1El = document.querySelector("#choice1");
const choice2El = document.querySelector("#choice2");
const choice3El = document.querySelector("#choice3");
const choice4El = document.querySelector("#choice4");
// Mistake 1 : Didn't do All
const choiceBtn = document.querySelectorAll(".choice--btn");
const highlightAnswerEl = document.querySelector(".highlight-answer");
const startText = document.querySelector(".start-text");
const scoreEl = document.querySelector(".score");
const scoreHolderEl = document.querySelector(".score-holder");
const bodyStyleEl = document.querySelector("body-style");

let score = 0;
let activeQuestion = 0;

function updateValues() {
  currentQuestionEl.textContent = questions[activeQuestion].question;
  choice1El.textContent = questions[activeQuestion].choice1;
  choice2El.textContent = questions[activeQuestion].choice2;
  choice3El.textContent = questions[activeQuestion].choice3;
  choice4El.textContent = questions[activeQuestion].choice4;
}
function removeUnselectedOption(selectedOption) {
  choiceBtn.forEach((item) => {
    if (item !== selectedOption) {
      // Mistake 2 : Had choiceBtn and no classList
      item.classList.remove("highlight-answer");
    }
  });
}
function removeHiddenAndHighlight() {
  choice1El.classList.remove("hidden", "highlight-answer");
  choice2El.classList.remove("hidden", "highlight-answer");
  choice3El.classList.remove("hidden", "highlight-answer");
  choice4El.classList.remove("hidden", "highlight-answer");
}
choiceBtn.forEach((item) => {
  item.addEventListener("click", function () {
    if (!item.classList.contains("highlight-answer")) {
      item.classList.add("highlight-answer");
      removeUnselectedOption(item);
    } else {
      item.classList.remove("highlight-answer");
    }
  });
});

btnStartEl.addEventListener("click", function () {
  updateValues();
  removeHiddenAndHighlight();
  currentQuestionEl.classList.remove("hidden");
  btnNextEl.classList.remove("hidden");
  scoreHolderEl.classList.remove("hidden");
  startText.classList.add("hidden");
  btnStartEl.classList.add("hidden");
});

btnNextEl.addEventListener("click", function () {
  removeHiddenAndHighlight();
  activeQuestion++;
  updateValues();
  console.log(activeQuestion);
  if (activeQuestion === 4) {
    btnNextEl.classList.add("hidden");
    btnFinishEl.classList.remove("hidden");
  }
  choiceBtn.forEach((item) => {
    if (choiceBtn.classList.contains("highlight-answer")) {
      if (item.answer === answer[activeQuestion].answer) {
        score++;
        scoreHolderEl.textContent = `Score : ${score}/5`;
      }
    }
  });
});

// btnFinishEl.addEventListener("click", function () {
//   bodyStyleEl.classList.add("hidden");
// });
