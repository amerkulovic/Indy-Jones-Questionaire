const btnStartEl = document.querySelector(".btn-start");
const pTag = document.querySelector("p");

let activeQuestion = 1;

const questions = [
  {
    question1: "What was the name of the first Indiana Jones movie?",
    choice1: "The Raiders of the Lost Ark",
    choice2: "The Temple of Doom",
    choice3: "The Last Crusade",
    choice4: "The Kingdom of the Crystal Skull",
    answer: "The Raiders of the Lost Ark",
  },
  {
    question1: "Who plays Indiana Jones?",
    choice1: "Mel Gibson",
    choice2: "Leonardo Di Caprio",
    choice3: "Harrison Ford",
    choice4: "Arnold Schwarzeneggar",
    answer: "Harrison Ford",
  },
];
btnStartEl.addEventListener("click", function () {
  pTag.classList.add("hidden");
});
