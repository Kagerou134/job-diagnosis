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
  {
    text: "どんな状況で力を発揮する？",
    answers: [
      { text: "ピンチのときにこそ燃える", points: { warrior: 2, dragon: 1 } },
      { text: "落ち着いた環境でこそ実力が出る", points: { mage: 2, priest: 1 } },
      { text: "予測不能な場面でひらめく", points: { thief: 2, mage: 1 } },
      { text: "誰かを支える役に回ったとき", points: { priest: 2, warrior: 1 } },
      { text: "誰にも縛られないとき", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "自分に足りないと感じるものは？",
    answers: [
      { text: "もっと行動力が欲しい", points: { warrior: 2, thief: 1 } },
      { text: "もっと論理的に考えたい", points: { mage: 2, dragon: 1 } },
      { text: "もっと一貫性を持ちたい", points: { dragon: 2, warrior: 1 } },
      { text: "もっと人との関係を築きたい", points: { priest: 2, mage: 1 } },
      { text: "もっと自由に動きたい", points: { thief: 2, priest: 1 } }
    ]
  },
  {
    text: "ゲームでよく選ぶ役割は？",
    answers: [
      { text: "前衛で殴る", points: { warrior: 2, dragon: 1 } },
      { text: "後衛で支援や魔法", points: { mage: 2, priest: 1 } },
      { text: "ステルスやトリッキーな動き", points: { thief: 2, mage: 1 } },
      { text: "味方のサポート", points: { priest: 2, warrior: 1 } },
      { text: "なんでもできるバランス型", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "理想の休日プランは？",
    answers: [
      { text: "早起きしてアクティブに動く", points: { warrior: 2, dragon: 1 } },
      { text: "図書館やカフェでゆっくり過ごす", points: { mage: 2, priest: 1 } },
      { text: "その場のノリで予定を変える", points: { thief: 2, mage: 1 } },
      { text: "人と集まって過ごす", points: { priest: 2, warrior: 1 } },
      { text: "誰にも会わず自分だけの時間", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "新しい場所に行ったとき、まずすることは？",
    answers: [
      { text: "隅々まで探検する", points: { thief: 2, warrior: 1 } },
      { text: "地図や情報を確認する", points: { mage: 2, dragon: 1 } },
      { text: "誰かに声をかけてみる", points: { priest: 2, thief: 1 } },
      { text: "雰囲気を感じてじっとする", points: { dragon: 2, priest: 1 } },
      { text: "とにかく体で覚える", points: { warrior: 2, mage: 1 } }
    ]
  },
  {
    text: "他人からよく言われる性格は？",
    answers: [
      { text: "頼りがいがある", points: { warrior: 2, priest: 1 } },
      { text: "頭がキレる", points: { mage: 2, thief: 1 } },
      { text: "自由人", points: { dragon: 2, thief: 1 } },
      { text: "やさしい", points: { priest: 2, mage: 1 } },
      { text: "面白い", points: { thief: 2, dragon: 1 } }
    ]
  },
  {
    text: "仲間にするならどんなタイプ？",
    answers: [
      { text: "前向きで行動力のある人", points: { warrior: 2, thief: 1 } },
      { text: "冷静で分析力のある人", points: { mage: 2, dragon: 1 } },
      { text: "冗談で場を和ませる人", points: { thief: 2, priest: 1 } },
      { text: "安心感のある人", points: { priest: 2, warrior: 1 } },
      { text: "誰にも依存しない強さを持つ人", points: { dragon: 2, mage: 1 } }
    ]
  },
  {
    text: "「勝ち」とは何を意味する？",
    answers: [
      { text: "努力が報われること", points: { warrior: 2, mage: 1 } },
      { text: "知識で状況を制すること", points: { mage: 2, dragon: 1 } },
      { text: "機転で切り抜けること", points: { thief: 2, warrior: 1 } },
      { text: "周囲の信頼を得ること", points: { priest: 2, thief: 1 } },
      { text: "自分を貫き通すこと", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "好きな映画ジャンルは？",
    answers: [
      { text: "アクション・バトル", points: { warrior: 2, thief: 1 } },
      { text: "SF・頭脳戦", points: { mage: 2, dragon: 1 } },
      { text: "サスペンス・ミステリー", points: { thief: 2, mage: 1 } },
      { text: "ヒューマンドラマ", points: { priest: 2, warrior: 1 } },
      { text: "アート系・ファンタジー", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "自分のモチベーションの源は？",
    answers: [
      { text: "誰かの役に立つこと", points: { priest: 2, warrior: 1 } },
      { text: "好奇心と探究心", points: { mage: 2, dragon: 1 } },
      { text: "予想外の刺激", points: { thief: 2, mage: 1 } },
      { text: "挑戦と達成感", points: { warrior: 2, thief: 1 } },
      { text: "自分の世界を深めること", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "どんなときにやる気が出る？",
    answers: [
      { text: "目標が明確なとき", points: { warrior: 2, mage: 1 } },
      { text: "誰かのためになるとき", points: { priest: 2, warrior: 1 } },
      { text: "自由に動けるとき", points: { thief: 2, dragon: 1 } },
      { text: "ひとりで集中できるとき", points: { dragon: 2, mage: 1 } },
      { text: "複数の選択肢があるとき", points: { thief: 2, mage: 1 } }
    ]
  },
  {
    text: "自分を色で表すなら？",
    answers: [
      { text: "真っ赤（情熱と力）", points: { warrior: 2, priest: 1 } },
      { text: "青（冷静と知性）", points: { mage: 2, dragon: 1 } },
      { text: "紫（神秘と自由）", points: { dragon: 2, mage: 1 } },
      { text: "緑（癒しと調和）", points: { priest: 2, thief: 1 } },
      { text: "黄色（好奇心と遊び心）", points: { thief: 2, warrior: 1 } }
    ]
  },
  {
    text: "SNSでのあなたのスタンスは？",
    answers: [
      { text: "発信多めで盛り上げる", points: { warrior: 2, thief: 1 } },
      { text: "情報収集・発言少なめ", points: { mage: 2, dragon: 1 } },
      { text: "裏垢でこっそり楽しむ", points: { thief: 2, mage: 1 } },
      { text: "他人の投稿に反応・支援型", points: { priest: 2, warrior: 1 } },
      { text: "たまに突然浮上する", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "プレゼントを選ぶとき、重視するのは？",
    answers: [
      { text: "実用性と喜び", points: { warrior: 2, priest: 1 } },
      { text: "相手の性格や好み分析", points: { mage: 2, dragon: 1 } },
      { text: "意外性とセンス", points: { thief: 2, mage: 1 } },
      { text: "感情やストーリー性", points: { priest: 2, thief: 1 } },
      { text: "一生記憶に残るような個性", points: { dragon: 2, warrior: 1 } }
    ]
  },
  {
    text: "あなたの時間感覚は？",
    answers: [
      { text: "常に時間を意識して動く", points: { mage: 2, warrior: 1 } },
      { text: "マイペースで気にしない", points: { dragon: 2, priest: 1 } },
      { text: "ギリギリを楽しむタイプ", points: { thief: 2, warrior: 1 } },
      { text: "早め早めの行動派", points: { priest: 2, mage: 1 } },
      { text: "時空を超えてる", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "1日が48時間だったら？",
    answers: [
      { text: "筋トレと仕事に使う", points: { warrior: 2, dragon: 1 } },
      { text: "知識の探求と研究に使う", points: { mage: 2, priest: 1 } },
      { text: "遊びと刺激を求めて動く", points: { thief: 2, warrior: 1 } },
      { text: "人との交流を楽しむ", points: { priest: 2, thief: 1 } },
      { text: "ひとりの世界に浸る", points: { dragon: 2, mage: 1 } }
    ]
  },
  {
    text: "子どものころ憧れたのは？",
    answers: [
      { text: "ヒーロー", points: { warrior: 2, priest: 1 } },
      { text: "天才科学者", points: { mage: 2, dragon: 1 } },
      { text: "大泥棒", points: { thief: 2, mage: 1 } },
      { text: "お医者さんや看護師", points: { priest: 2, warrior: 1 } },
      { text: "竜や魔王などのカリスマ存在", points: { dragon: 2, thief: 1 } }
    ]
  },
  {
    text: "どのスキルに惹かれる？",
    answers: [
      { text: "高い戦闘力", points: { warrior: 2, thief: 1 } },
      { text: "知識による支配", points: { mage: 2, dragon: 1 } },
      { text: "変幻自在な動き", points: { thief: 2, mage: 1 } },
      { text: "人の心を癒す力", points: { priest: 2, warrior: 1 } },
      { text: "空間や流れを操る力", points: { dragon: 2, priest: 1 } }
    ]
  },
  {
    text: "ピンチのときのあなたは？",
    answers: [
      { text: "即行動で突き進む", points: { warrior: 2, thief: 1 } },
      { text: "落ち着いて分析", points: { mage: 2, priest: 1 } },
      { text: "裏技や回避を考える", points: { thief: 2, dragon: 1 } },
      { text: "周囲を支えながら進む", points: { priest: 2, warrior: 1 } },
      { text: "あえて止まって流れを変える", points: { dragon: 2, mage: 1 } }
    ]
  },
  {
    text: "あなたの理想の強さは？",
    answers: [
      { text: "物理的に圧倒的", points: { warrior: 2, dragon: 1 } },
      { text: "知で制す", points: { mage: 2, priest: 1 } },
      { text: "誰にも読めない動き", points: { thief: 2, mage: 1 } },
      { text: "誰かを守れる優しさ", points: { priest: 2, warrior: 1 } },
      { text: "孤高でも揺るがない存在感", points: { dragon: 2, thief: 1 } }
    ]
  }
];
