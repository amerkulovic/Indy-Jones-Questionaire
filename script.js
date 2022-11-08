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
];

const btnStartEl = document.querySelector(".btn-start");
const currentQuestionEl = document.querySelector(".current--question");
const choice1El = document.querySelector("#choice1");
const choice2El = document.querySelector("#choice2");
const choice3El = document.querySelector("#choice3");
const choice4El = document.querySelector("#choice4");
const choiceBtn = document.querySelector(".choice--btn");

btnStartEl.addEventListener("click", function () {
  choiceBtn.classList.remove("hidden");
  currentQuestionEl.innerHTML = questions[0].question;
  choice1El.innerHTML = questions[0].choice1;
  choice2El.innerHTML = questions[0].choice2;
  choice3El.innerHTML = questions[0].choice3;
  choice4El.innerHTML = questions[0].choice4;
  btnStartEl.textContent = "Next";
});
