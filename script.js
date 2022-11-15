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
    question: 'Who is Indiana Jones\' companion in "The Last Crusade"?',
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
  {
    question: "Where does Indiana Jones teach archaeology?",
    choice1: "Harvard College",
    choice2: "Trinity College",
    choice3: "Marshal College",
    choice4: "Yale College",
    answer: "Marshal College",
  },
  {
    question: "What does Henry Jones, Sr. call Inidana?",
    choice1: "Junior",
    choice2: "Son",
    choice3: "Indy",
    choice4: "Jones",
    answer: "Junior",
  },
  {
    question: "What is Indiana Jones afraid of?",
    choice1: "Spiders",
    choice2: "Monkeys",
    choice3: "Snakes",
    choice4: "Tight Spaces",
    answer: "Snakes",
  },
  {
    question: "Which film takes place first chronologically in the Indiana Jones Universe?",
    choice1: "The Raiders of the Lost Ark",
    choice2: "The Temple of Doom",
    choice3: "The Last Crusade",
    choice4: "The Kingdom of the Crystal Skull",
    answer: "The Temple of Doom",
  },
  {
    question: 'Which actress plays "Irina Spalko" in Kingdom of the Crystal Skull?',
    choice1: "Kate Upshaw",
    choice2: "Cate Blanchett",
    choice3: "Angelina Jolie",
    choice4: "Karen Allen",
    answer: "Cate Blanchett",
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
let choiceBtn = document.querySelectorAll(".choice--btn");
const highlightAnswerEl = document.querySelector(".highlight-answer");
const startText = document.querySelector(".start-text");
const scoreEl = document.querySelector(".score");
const scoreHolderEl = document.querySelector(".score-holder");
const scoreBoxStyleEl = document.querySelector(".scorebox-style");
const textBoxStyleEl = document.querySelector(".textbox-style");
const submitBoxEl = document.querySelector(".submit-box");
const formTag = document.querySelector("form");
const messageEl = document.querySelector(".message");
const timerEl = document.querySelector(".timer");
const highScoreStyleEl = document.querySelector(".highscore-style");
const nameDisplayEl = document.querySelector(".name-display");
const scoreDisplayEl = document.querySelector(".score-display");
const restartBtn = document.querySelector(".restart_button");

let ulTimeEl = document.querySelector("#ulTime");
let ulNameEl = document.querySelector("#ulName");

let selectedAnswer = "";
let score = 0;
let highscore = JSON.parse(localStorage.getItem("highscore"));
let activeQuestion = 0;
let timeLeft = 60;
let finalTime = 0;

function displayMessage() {
  let message = "GAME OVER!";
  messageEl.textContent = message;
}

function countdown() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `${timeLeft} seconds remaining`;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.classList.add("hidden");
      btnNextEl.classList.add("hidden");
      btnFinishEl.classList.add("hidden");
      textBoxStyleEl.classList.add("hidden");
      formTag.classList.remove("hidden");
      displayMessage();
    } else if (timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.classList.add("hidden");
      btnNextEl.classList.add("hidden");
      btnFinishEl.classList.add("hidden");
      textBoxStyleEl.classList.add("hidden");
      formTag.classList.remove("hidden");
      displayMessage();
    }
  }, 1000);
}

function updateValues() {
  currentQuestionEl.textContent = questions[activeQuestion].question;
  choice1El.textContent = questions[activeQuestion].choice1;
  choice2El.textContent = questions[activeQuestion].choice2;
  choice3El.textContent = questions[activeQuestion].choice3;
  choice4El.textContent = questions[activeQuestion].choice4;
}
function removeUnselectedOption(selectedOption) {
  choiceBtn.forEach((choice) => {
    if (choice !== selectedOption) {
      // Mistake 2 : Had choiceBtn and no classList
      choice.classList.remove("highlight-answer");
    }
  });
}
choiceBtn.forEach((choice) => {
  choice.addEventListener("click", function () {
    if (!choice.classList.contains("highlight-answer")) {
      choice.classList.add("highlight-answer");
      removeUnselectedOption(choice);
    } else {
      choice.classList.remove("highlight-answer");
    }
  });
});

function removeHiddenAndHighlight() {
  choice1El.classList.remove("hidden", "highlight-answer");
  choice2El.classList.remove("hidden", "highlight-answer");
  choice3El.classList.remove("hidden", "highlight-answer");
  choice4El.classList.remove("hidden", "highlight-answer");
}

function validate_answer(event) {
  event.preventDefault();
  selectedAnswer = event.target.innerHTML;
}

btnStartEl.addEventListener("click", function () {
  updateValues();
  removeHiddenAndHighlight();
  currentQuestionEl.classList.remove("hidden");
  btnNextEl.classList.remove("hidden");
  scoreHolderEl.classList.remove("hidden");
  textBoxStyleEl.classList.remove("hidden");
  scoreBoxStyleEl.classList.remove("hidden");
  startText.classList.add("hidden");
  btnStartEl.classList.add("hidden");
  restartBtn.classList.add("hidden");

  countdown();
});

btnNextEl.addEventListener("click", function () {
  removeHiddenAndHighlight();
  activeQuestion++;
  updateValues();
  if (activeQuestion === 9) {
    btnNextEl.classList.add("hidden");
    btnFinishEl.classList.remove("hidden");
  }
  if (selectedAnswer !== questions[activeQuestion - 1].answer) {
    timeLeft -= 5;
  } else {
    score++;
    scoreHolderEl.innerHTML = `Correct : ${score}/10`;
  }
});
btnFinishEl.addEventListener("click", function () {
  if (selectedAnswer !== questions[activeQuestion].answer) {
    timeLeft -= 5;
  } else {
    score++;
    scoreHolderEl.innerHTML = `Correct : ${score}/10`;
  }
  if (timeLeft > 0) {
    finalTime = timeLeft;
  } else {
    finalTime;
  }
  timeLeft = 0;
  formTag.classList.remove("hidden");
  textBoxStyleEl.classList.add("hidden");
  btnFinishEl.classList.add("hidden");
  timerEl.classList.add("hidden");
  messageEl.classList.add("hidden");
});
restartBtn.addEventListener("click", function () {
  window.location.reload();
});

function submit_score(event) {
  formTag.classList.add("hidden");
  highScoreStyleEl.classList.remove("hidden");
  event.preventDefault();
  let finalData = {
    initials: document.getElementById("initials").value || "N/A",
    time: finalTime,
    score: score,
  };
  if (highscore === null) {
    highscore = [];
    highscore.push(finalData);
  } else {
    highscore.push(finalData);
  }
  for (let i = 0; i < highscore.length; i++) {
    let liName = document.createElement("li");
    let liTime = document.createElement("li");
    let name = highscore[i].initials;
    let time = highscore[i].time;
    liName.appendChild(document.createTextNode(name));
    liTime.appendChild(document.createTextNode(time));

    ulNameEl.append(liName);
    ulTimeEl.append(liTime);
  }
  restartBtn.classList.remove("hidden");
  localStorage.setItem("highscore", JSON.stringify(highscore));
}
