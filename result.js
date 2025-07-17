// js/result.js

const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultImg = document.getElementById("result-img");

const scores = JSON.parse(localStorage.getItem("scores"));

const resultData = {
  warrior: {
    title: "戦士タイプ",
    description: "あなたは仲間の先頭に立つリーダー。情熱と勇気で道を切り開くタイプです！",
    img: "assets/img/warrior.png"
  },
  mage: {
    title: "魔法使いタイプ",
    description: "あなたは冷静沈着な知恵者。戦略と知識で勝利を導きます！",
    img: "assets/img/mage.png"
  },
  thief: {
    title: "盗賊タイプ",
    description: "あなたは素早くスマートな切り込み隊長。臨機応変に立ち回れる器用人間！",
    img: "assets/img/thief.png"
  },
  priest: {
    title: "僧侶タイプ",
    description: "あなたは癒しと調和の心を持つヒーラー。仲間からの信頼も厚い！",
    img: "assets/img/priest.png"
  },
  dragon: {
    title: "ドラゴンタイプ",
    description: "あなたは唯一無二の存在。規格外の才能とカリスマで世界を圧倒！",
    img: "assets/img/dragon.png"
  }
};

// 一番スコアが高い職業を取得
let topType = "warrior"; // 初期値
let maxScore = 0;
for (let type in scores) {
  if (scores[type] > maxScore) {
    maxScore = scores[type];
    topType = type;
  }
}

const result = resultData[topType];
resultTitle.textContent = result.title;
resultDescription.textContent = result.description;
resultImg.src = result.img;
