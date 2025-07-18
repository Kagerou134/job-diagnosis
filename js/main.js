// 質問20問の中からランダムに10問だけ使用する
const selectedQuestions = shuffleArray(questions).slice(0, 10);

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

// 🔀 配列シャッフル関数（使い回し）
function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function showQuestion() {
  const q = selectedQuestions[currentQuestion]; // ← ここをselectedQuestionsに変更
  const shuffledAnswers = shuffleArray(q.answers);

  questionTitle.textContent = q.text;
  answerButtons.innerHTML = "";

  shuffledAnswers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => handleAnswer(answer));
    answerButtons.appendChild(btn);
  });

  progressText.textContent = `Q${currentQuestion + 1} / ${selectedQuestions.length}`;
}

function handleAnswer(answer) {
  for (const type in answer.points) {
    scores[type] += answer.points[type];
  }

  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    showQuestion();
  } else {
    localStorage.setItem("scores", JSON.stringify(scores));
    location.href = "result.html";
  }
}

// 初期化
showQuestion();
