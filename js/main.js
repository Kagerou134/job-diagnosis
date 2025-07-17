// js/main.js

let currentQuestion = 0;
let scores = {
  warrior: 0,
  mage: 0,
  thief: 0,
  priest: 0,
  dragon: 0
};

const questionTitle = document.getElementById("question-title");
const answerButtons = document.getElementById("answer-buttons");
const progressText = document.getElementById("progress-text");

function showQuestion() {
  const q = questions[currentQuestion];
  questionTitle.textContent = q.text;
  answerButtons.innerHTML = ""; // 一旦クリア

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => handleAnswer(answer.type));
    answerButtons.appendChild(btn);
  });

  progressText.textContent = `Q${currentQuestion + 1} / ${questions.length}`;
}

function handleAnswer(type) {
  scores[type]++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    // スコアを保存して結果ページへ
    localStorage.setItem("scores", JSON.stringify(scores));
    location.href = "result.html";
  }
}

// 初期化
showQuestion();
