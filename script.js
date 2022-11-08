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
let activeQuestion = 0;
const btnStartEl = document.querySelector(".btn-start");
const currentQuestionEl = document.querySelector(".current--question");
const choice1El = document.querySelector("#choice1");
const choice2El = document.querySelector("#choice2");
const choice3El = document.querySelector("#choice3");
const choice4El = document.querySelector("#choice4");
const choiceBtn = document.querySelector(".choice--btn");
const highlightAnswerEl = document.querySelector(".highlight-answer");

choice1El.addEventListener("click", function () {
  if (choice1El.classList.contains("highlight-answer")) {
    choice1El.classList.remove("highlight-answer");
  } else {
    choice1El.classList.add("highlight-answer");
  }
});
choice2El.addEventListener("click", function () {
  if (choice2El.classList.contains("highlight-answer")) {
    choice2El.classList.remove("highlight-answer");
  } else {
    choice2El.classList.add("highlight-answer");
  }
});
choice3El.addEventListener("click", function () {
  if (choice3El.classList.contains("highlight-answer")) {
    choice3El.classList.remove("highlight-answer");
  } else {
    choice3El.classList.add("highlight-answer");
  }
});
choice4El.addEventListener("click", function () {
  if (choice4El.classList.contains("highlight-answer")) {
    choice4El.classList.remove("highlight-answer");
  } else {
    choice4El.classList.add("highlight-answer");
  }
});

btnStartEl.addEventListener("click", function () {
  choice1El.classList.remove("hidden");
  choice2El.classList.remove("hidden");
  choice3El.classList.remove("hidden");
  choice4El.classList.remove("hidden");
  if (questions[activeQuestion]) {
    currentQuestionEl.innerHTML = questions[activeQuestion].question;
    choice1El.textContent = questions[activeQuestion].choice1;
    choice2El.textContent = questions[activeQuestion].choice2;
    choice3El.textContent = questions[activeQuestion].choice3;
    choice4El.textContent = questions[activeQuestion].choice4;
    btnStartEl.textContent = "Next";
    activeQuestion++;
  }
});
