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

// 🔀 配列シャッフル関数
function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function showQuestion() {
  const q = questions[currentQuestion];
  const shuffledAnswers = shuffleArray(q.answers); // 回答をシャッフル！

  questionTitle.textContent = q.text;
  answerButtons.innerHTML = ""; // 一旦クリア

  shuffledAnswers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => handleAnswer(answer));
    answerButtons.appendChild(btn);
  });

  progressText.textContent = `Q${currentQuestion + 1} / ${questions.length}`;
}

function handleAnswer(answer) {
  // 🔁 pointsオブジェクトをもとに複数タイプに加点
  for (const type in answer.points) {
    scores[type] += answer.points[type];
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem("scores", JSON.stringify(scores));
    location.href = "result.html";
  }
}

// 初期化
showQuestion();
