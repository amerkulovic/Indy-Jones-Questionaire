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
    question:
      'When did "Indiana Jones and the Raiders of the Lost Ark" release?',
    choice1: "1979",
    choice2: "1984",
    choice3: "1978",
    choice4: "1981",
    answer: "1981",
  },
];
let activeQuestion = 1;
const btnStartEl = document.querySelector(".btn-start");
const btnNextEl = document.querySelector(".btn-next");
const currentQuestionEl = document.querySelector(".current--question");
const choice1El = document.querySelector("#choice1");
const choice2El = document.querySelector("#choice2");
const choice3El = document.querySelector("#choice3");
const choice4El = document.querySelector("#choice4");
// Mistake 1 : Didn't do All
const choiceBtn = document.querySelectorAll(".choice--btn");
const highlightAnswerEl = document.querySelector(".highlight-answer");

btnStartEl.addEventListener("click", function () {
  choice1El.classList.remove("hidden");
  choice2El.classList.remove("hidden");
  choice3El.classList.remove("hidden");
  choice4El.classList.remove("hidden");
  currentQuestionEl.textContent = questions[0].question;
  choice1El.textContent = questions[0].choice1;
  choice2El.textContent = questions[0].choice2;
  choice3El.textContent = questions[0].choice3;
  choice4El.textContent = questions[0].choice4;
  btnStartEl.classList.add("hidden");
  btnNextEl.classList.remove("hidden");
});

btnNextEl.addEventListener("click", function () {
  if (questions[activeQuestion]) {
    choice1El.classList.remove("highlight-answer");
    choice2El.classList.remove("highlight-answer");
    choice3El.classList.remove("highlight-answer");
    choice4El.classList.remove("highlight-answer");
    currentQuestionEl.textContent = questions[activeQuestion].question;
    choice1El.textContent = questions[activeQuestion].choice1;
    choice2El.textContent = questions[activeQuestion].choice2;
    choice3El.textContent = questions[activeQuestion].choice3;
    choice4El.textContent = questions[activeQuestion].choice4;
    activeQuestion++;
  }
});

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
function removeUnselectedOption(selectedOption) {
  choiceBtn.forEach((item) => {
    if (item !== selectedOption) {
      // Mistake 2 : Had choiceBtn and no classList
      item.classList.remove("highlight-answer");
    }
  });
}

