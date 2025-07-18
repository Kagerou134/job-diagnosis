const questions = [
  {
    text: "困難に直面したとき、あなたはどうする？",
    answers: [
      { text: "とにかく動いて突破口を探す", points: { warrior: 2, thief: 1 } },
      { text: "まず状況を整理し戦略を立てる", points: { mage: 2, dragon: 1 } },
      { text: "他に抜け道がないか探る", points: { thief: 2, mage: 1 } },
      { text: "周囲の人に相談しながら考える", points: { priest: 2, warrior: 1 } },
      { text: "流れに逆らわず、自分のタイミングを待つ", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "初対面の人にどう接する？",
    answers: [
      { text: "自分から明るく話しかける", points: { warrior: 2, priest: 1 } },
      { text: "相手の様子を見てから距離を詰める", points: { mage: 2, dragon: 1 } },
      { text: "軽い冗談で場を和ませる", points: { thief: 2, warrior: 1 } },
      { text: "丁寧に挨拶して関係を築く", points: { priest: 2, mage: 1 } },
      { text: "無理に合わせず自然体で接する", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "自分にとっての「強さ」とは？",
    answers: [
      { text: "恐れずに前に進めること", points: { warrior: 2, dragon: 1 } },
      { text: "状況を見極めて判断できること", points: { mage: 2, thief: 1 } },
      { text: "どんな環境にも対応できること", points: { thief: 2, mage: 1 } },
      { text: "誰かを支えることができること", points: { priest: 2, warrior: 1 } },
      { text: "他人に振り回されずに在ること", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "休みの日の理想の過ごし方は？",
    answers: [
      { text: "体を動かしてリフレッシュ", points: { warrior: 2, dragon: 1 } },
      { text: "知識を深める時間に使う", points: { mage: 2, priest: 1 } },
      { text: "気の向くままにふらっと出かける", points: { thief: 2, dragon: 1 } },
      { text: "落ち着いた場所で人と過ごす", points: { priest: 2, mage: 1 } },
      { text: "一人で好きなことに没頭する", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "褒められたとき、あなたは？",
    answers: [
      { text: "もっと頑張ろうと思う", points: { warrior: 2, mage: 1 } },
      { text: "表面上は冷静だが嬉しい", points: { mage: 2, dragon: 1 } },
      { text: "軽く流すけど内心はガッツポーズ", points: { thief: 2, warrior: 1 } },
      { text: "謙虚に感謝を伝える", points: { priest: 2, thief: 1 } },
      { text: "自分の価値を再確認する", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "チームでのあなたの役割は？",
    answers: [
      { text: "全体を引っ張るムードメーカー", points: { warrior: 2, thief: 1 } },
      { text: "計画立てて裏から支える参謀", points: { mage: 2, dragon: 1 } },
      { text: "場の空気を和ませるバランサー", points: { thief: 2, priest: 1 } },
      { text: "不安を受け止める癒し系", points: { priest: 2, mage: 1 } },
      { text: "自分の得意分野だけを確実にこなす職人型", points: { dragon: 2, warrior: 1 } }
    ]
  },
  {
    text: "理想のリーダー像は？",
    answers: [
      { text: "熱意があって背中で語れる人", points: { warrior: 2, priest: 1 } },
      { text: "常に冷静で論理的な人", points: { mage: 2, dragon: 1 } },
      { text: "ユーモアがあって柔軟な人", points: { thief: 2, mage: 1 } },
      { text: "優しさと誠実さがある人", points: { priest: 2, warrior: 1 } },
      { text: "自分の軸をブレずに持っている人", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "あなたが一番大事にしていることは？",
    answers: [
      { text: "信念", points: { warrior: 2, dragon: 1 } },
      { text: "知識と理解", points: { mage: 2, priest: 1 } },
      { text: "自由", points: { thief: 2, dragon: 1 } },
      { text: "優しさと共感", points: { priest: 2, mage: 1 } },
      { text: "自分らしさ", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "トラブル発生！どう動く？",
    answers: [
      { text: "先頭に立って解決に動く", points: { warrior: 2, thief: 1 } },
      { text: "冷静に情報を集めて対応する", points: { mage: 2, dragon: 1 } },
      { text: "状況を見て臨機応変に動く", points: { thief: 2, mage: 1 } },
      { text: "周囲を落ち着かせて協力を呼びかける", points: { priest: 2, warrior: 1 } },
      { text: "あえて静観し、流れを見守る", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "あなたにとって「仲間」とは？",
    answers: [
      { text: "共に戦う仲間", points: { warrior: 2, mage: 1 } },
      { text: "情報を共有し合う知的な存在", points: { mage: 2, priest: 1 } },
      { text: "楽しい時間を共にする気の合う人たち", points: { thief: 2, warrior: 1 } },
      { text: "助け合える心の支え", points: { priest: 2, dragon: 1 } },
      { text: "それぞれが自分の道を歩む同志", points: { dragon: 2, thief: 1 } }
    ]
  }
];
