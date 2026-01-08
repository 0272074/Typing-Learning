window.GAME_DATA = {
  subjects: {
    japanese: { label: "国語", color: "#FF6B6B" },
    math: { label: "算数", color: "#4ECDC4" },
    science: { label: "理科", color: "#45B7D1" },
    social: { label: "社会", color: "#96CEB4" },
    english: { label: "外国語", color: "#FFEEAD" },
    music: { label: "音楽", color: "#D4A5A5" },
    home: { label: "家庭科", color: "#FF9F43" }
  },
  questions: [
    /* --- 国語 --- */
    // Lv1
    { subject: "japanese", level: 1, word: "本", kana: "ほん", explanations: ["物語や 絵が かいてある。", "図書館に たくさん ある。"] },
    { subject: "japanese", level: 1, word: "空", kana: "そら", explanations: ["上を 見上げると ある。", "雲が 浮かんで いる。"] },
    { subject: "japanese", level: 1, word: "川", kana: "かわ", explanations: ["水が 流れて いる。", "魚が 泳いで いる。"] },
    // Lv2
    { subject: "japanese", level: 2, word: "学校", kana: "がっこう", explanations: ["先生や 友達が いる。", "勉強を する 場所。"] },
    { subject: "japanese", level: 2, word: "日記", kana: "にっき", explanations: ["一日の 出来事を 書く。", "毎日 続けると よい。"] },
    { subject: "japanese", level: 2, word: "手紙", kana: "てがみ", explanations: ["気持ちを 伝える 文章。", "ポストに 出す。"] },
    // Lv3
    { subject: "japanese", level: 3, word: "図書館", kana: "としょかん", explanations: ["本が たくさん ある 建物。", "静かに 本を 読む。"] },
    { subject: "japanese", level: 3, word: "新聞", kana: "しんぶん", explanations: ["ニュースが かいてある。", "毎日 家に 届く。"] },
    { subject: "japanese", level: 3, word: "説明書", kana: "せつめいしょ", explanations: ["使い方が かいてある。", "読むと 分かるように なる。"] },

    /* --- 算数 --- */
    // Lv1
    { subject: "math", level: 1, word: "かず", kana: "かず", explanations: ["１，２，３と 数える。", "多いか 少ないか 分かる。"] },
    { subject: "math", level: 1, word: "とけい", kana: "とけい", explanations: ["時間を 教えて くれる。", "長い針と 短い針が ある。"] },
    { subject: "math", level: 1, word: "まる", kana: "まる", explanations: ["ボールのような 形。", "角が ない。"] },
    // Lv2
    { subject: "math", level: 2, word: "さんすう", kana: "さんすう", explanations: ["計算を する 勉強。", "数字を 使う。"] },
    { subject: "math", level: 2, word: "ひきざん", kana: "ひきざん", explanations: ["残りは いくつか 計算する。", "引く と いう。"] },
    { subject: "math", level: 2, word: "ずけい", kana: "ずけい", explanations: ["三角形や 四角形の こと。", "形を 調べる。"] },
    // Lv3
    { subject: "math", level: 3, word: "ぶんすう", kana: "ぶんすう", explanations: ["数を 分けた もの。", "２分の１ など。"] },
    { subject: "math", level: 3, word: "しょうすう", kana: "しょうすう", explanations: ["１より 小さい 数。", "０．１ など。"] },
    { subject: "math", level: 3, word: "わりざん", kana: "わりざん", explanations: ["同じ数ずつ 分ける 計算。", "割る と いう。"] },

    /* --- 理科 --- */
    // Lv1
    { subject: "science", level: 1, word: "むし", kana: "むし", explanations: ["カブトムシや チョウ。", "足が ６本 ある。"] },
    { subject: "science", level: 1, word: "はな", kana: "はな", explanations: ["きれいな 色で さく。", "種が できる。"] },
    { subject: "science", level: 1, word: "あめ", kana: "あめ", explanations: ["空から 降ってくる 水。", "傘を さす。"] },
    // Lv2
    { subject: "science", level: 2, word: "じしゃく", kana: "じしゃく", explanations: ["鉄を 引きつける。", "Ｎ極と Ｓ極が ある。"] },
    { subject: "science", level: 2, word: "でんち", kana: "でんち", explanations: ["電気を ためる もの。", "おもちゃを 動かす。"] },
    { subject: "science", level: 2, word: "たいよう", kana: "たいよう", explanations: ["空にある 明るい 星。", "東から 出て 西へ 沈む。"] },
    // Lv3
    { subject: "science", level: 3, word: "じっけん", kana: "じっけん", explanations: ["予想して 確かめる こと。", "理科室で 行う。"] },
    { subject: "science", level: 3, word: "けんびきょう", kana: "けんびきょう", explanations: ["小さいものを 大きく見る。", "レンズを 使う。"] },
    { subject: "science", level: 3, word: "すいようえき", kana: "すいようえき", explanations: ["物が 水に 溶けた 液。", "食塩水 など。"] },

    /* --- 社会 --- */
    // Lv1
    { subject: "social", level: 1, word: "まち", kana: "まち", explanations: ["人が たくさん 住んでいる。", "お店や 家が ある。"] },
    { subject: "social", level: 1, word: "みせ", kana: "みせ", explanations: ["物を 売ったり 買ったり する。", "スーパーや コンビニ。"] },
    { subject: "social", level: 1, word: "ちず", kana: "ちず", explanations: ["場所が 分かる 絵。", "上から 見た 様子。"] },
    // Lv2
    { subject: "social", level: 2, word: "交番", kana: "こうばん", explanations: ["お巡りさんが いる。", "困ったときに 行く。"] },
    { subject: "social", level: 2, word: "消防車", kana: "しょうぼうしゃ", explanations: ["火事を 消しに 行く。", "赤い 車。"] },
    { subject: "social", level: 2, word: "工場", kana: "こうじょう", explanations: ["物を たくさん 作る。", "機械が 動いて いる。"] },
    // Lv3
    { subject: "social", level: 3, word: "都道府県", kana: "とどうふけん", explanations: ["日本を 分けた 区域。", "４７ ある。"] },
    { subject: "social", level: 3, word: "歴史", kana: "れきし", explanations: ["昔 あった 出来事。", "古い 時代の こと。"] },
    { subject: "social", level: 3, word: "国会", kana: "こっかい", explanations: ["話し合って 決める所。", "法律を 作る。"] },

    /* --- 外国語 (English) --- */
    // Special handling for English: Use 'romanji' field for display/check target
    // Lv1
    { subject: "english", level: 1, word: "cat", kana: "ねこ", romanji: "cat", explanations: ["Meow と鳴く動物。", "ペットとして人気。"] },
    { subject: "english", level: 1, word: "dog", kana: "いぬ", romanji: "dog", explanations: ["ワンワンとほえる。", "散歩が大好き。"] },
    { subject: "english", level: 1, word: "red", kana: "あか", romanji: "red", explanations: ["リンゴや イチゴの色。", "信号の 止まれの色。"] },
    // Lv2
    { subject: "english", level: 2, word: "apple", kana: "りんご", romanji: "apple", explanations: ["赤くて 丸い 果物。", "甘酸っぱい。"] },
    { subject: "english", level: 2, word: "book", kana: "ほん", romanji: "book", explanations: ["文字や 絵が かいてある。", "読むと 面白い。"] },
    { subject: "english", level: 2, word: "pen", kana: "ぺん", romanji: "pen", explanations: ["字を 書く 道具。", "インクで 書く。"] },
    // Lv3
    { subject: "english", level: 3, word: "school", kana: "がっこう", romanji: "school", explanations: ["勉強をする 場所。", "友達に 会える。"] },
    { subject: "english", level: 3, word: "friend", kana: "ともだち", romanji: "friend", explanations: ["仲の良い 人。", "一緒に 遊ぶ。"] },
    { subject: "english", level: 3, word: "orange", kana: "オレンジ", romanji: "orange", explanations: ["だいだい色の 果物。", "ジュースにすると おいしい。"] },

    /* --- 音楽 --- */
    // Lv1
    { subject: "music", level: 1, word: "うた", kana: "うた", explanations: ["声を出して メロディを歌う。", "楽しい気持ちになる。"] },
    { subject: "music", level: 1, word: "おと", kana: "おと", explanations: ["耳で 聞こえる もの。", "高い音や 低い音が ある。"] },
    { subject: "music", level: 1, word: "すず", kana: "すず", explanations: ["振ると シャンシャンと 鳴る。", "キラキラした 音。"] },
    // Lv2
    { subject: "music", level: 2, word: "リズム", kana: "りずむ", explanations: ["音楽の 拍子。", "手拍子を する。"] },
    { subject: "music", level: 2, word: "たいこ", kana: "たいこ", explanations: ["バチで たたく 楽器。", "ドンドンと 鳴る。"] },
    { subject: "music", level: 2, word: "ピアノ", kana: "ぴあの", explanations: ["鍵盤を 押して 弾く。", "白い鍵盤と 黒い鍵盤。"] },
    // Lv3
    { subject: "music", level: 3, word: "がっそう", kana: "がっそう", explanations: ["みんなで 演奏する。", "心を 合わせる。"] },
    { subject: "music", level: 3, word: "指揮者", kana: "しきしゃ", explanations: ["演奏を まとめる 人。", "棒を 振る。"] },
    { subject: "music", level: 3, word: "リコーダー", kana: "りこーだー", explanations: ["縦笛の こと。", "息を 吹き込む。"] },

    /* --- 家庭科 --- */
    // Lv1 (Note: Home Ec starts high grade usually, but keeping simplistic for game consistency)
    { subject: "home", level: 1, word: "ふく", kana: "ふく", explanations: ["体に着る もの。", "洗濯して きれいに する。"] },
    { subject: "home", level: 1, word: "みず", kana: "みず", explanations: ["飲むと おいしい。", "料理や 洗濯に 使う。"] },
    { subject: "home", level: 1, word: "いえ", kana: "いえ", explanations: ["家族が 住む 場所。", "掃除を する。"] },
    // Lv2
    { subject: "home", level: 2, word: "りょうり", kana: "りょうり", explanations: ["ご飯を 作る こと。", "包丁や 火を 使う。"] },
    { subject: "home", level: 2, word: "そうじ", kana: "そうじ", explanations: ["ゴミを 片付ける。", "部屋を きれいに する。"] },
    { subject: "home", level: 2, word: "せんたく", kana: "せんたく", explanations: ["服を 洗う こと。", "干して 乾かす。"] },
    // Lv3
    { subject: "home", level: 3, word: "栄養", kana: "えいよう", explanations: ["体を 元気にする 成分。", "バランスよく 食べる。"] },
    { subject: "home", level: 3, word: "ミシン", kana: "みしん", explanations: ["布を 縫う 機械。", "エプロンなどを 作る。"] },
    { subject: "home", level: 3, word: "調理", kana: "ちょうり", explanations: ["食材を 食べられるように する。", "加熱したり 切ったり する。"] }
  ]
};
