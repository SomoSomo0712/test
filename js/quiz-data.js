// ====== すべてのクイズデータをここに定義します ======

const QUIZ_DATA = [
  {
    // === 1番目のビデオとクイズセット ===
    id: 0,
    title: "Video1", // スプレッドシートに記録されるタイトル
    videoId: 'u4k7CWtDIwY', // 1番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "この話者は、お客様に接する上で最も大事なこととして、自分自身がどうあるべきだと語っていますか？<br>What does the interviewee in this documentary say is the most important personal quality when dealing with customers?",
        options: ["お客様に感動を与えるため、常に完璧な料理を提供し続けること / To constantly provide perfect dishes in order to impress customers.", "お客様との会話を楽しお客様との会話を楽しみ、毎日を息抜きのように感じること / To enjoy conversations with customers and feel as if every day is a break.", "健康であり、笑顔を絶やさずに聞き上手な接待をすること / To be healthy, and to serve customers by being a good listener with a constant smile.", "長年の常連客を大切にし、新しい客とは時間をかけて関係を作ること / To cherish long-time regular customers and take the time to build relationships with new ones."],
        correctAnswer: "健康であり、笑顔を絶やさずに聞き上手な接待をすること / To be healthy, and to serve customers by being a good listener with a constant smile."
      },
      { // 2問目
        text: "5 x 3 はいくつですか？",
        options: ["10", "15", "20", "25"],
        correctAnswer: "15"
      },
      { // 3問目
        text: "10 - 2 はいくつですか？",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8"
      },
      { // 4問目
        text: "20 ÷ 4 はいくつですか？",
        options: ["4", "5", "6", "8"],
        correctAnswer: "5"
      },
      { // 5問目
        text: "2の3乗はいくつですか？",
        options: ["4", "6", "8", "16"],
        correctAnswer: "8"
      }
    ]
  },
  {
    // === 2番目のビデオとクイズセット ===
    id: 1,
    title: "Video2",
    videoId: 'ZuiCMC8NW98', // 2番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "福岡"],
        correctAnswer: "東京"
      },
      { // 2問目
        text: "日本で一番高い山は何ですか？",
        options: ["富士山", "北岳", "奥穂高岳", "阿蘇山"],
        correctAnswer: "富士山"
      },
      { // 3問目
        text: "日本で一番大きい湖は何ですか？",
        options: ["浜名湖", "サロマ湖", "琵琶湖", "霞ヶ浦"],
        correctAnswer: "琵琶湖"
      },
      { // 4問目
        text: "日本で一番長い川は何ですか？",
        options: ["信濃川", "利根川", "石狩川", "木曽川"],
        correctAnswer: "信濃川"
      },
      { // 5問目
        text: "沖縄県の県庁所在地はどこですか？",
        options: ["石垣市", "沖縄市", "宮古島市", "那覇市"],
        correctAnswer: "那覇市"
      }
    ]
  },
  {
    // === 3番目のビデオとクイズセット ===
    id: 2,
    title: "Video3",
    videoId: 'LW3nUSIla3w', // 2番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "福岡"],
        correctAnswer: "東京"
      },
      { // 2問目
        text: "日本で一番高い山は何ですか？",
        options: ["富士山", "北岳", "奥穂高岳", "阿蘇山"],
        correctAnswer: "富士山"
      },
      { // 3問目
        text: "日本で一番大きい湖は何ですか？",
        options: ["浜名湖", "サロマ湖", "琵琶湖", "霞ヶ浦"],
        correctAnswer: "琵琶湖"
      },
      { // 4問目
        text: "日本で一番長い川は何ですか？",
        options: ["信濃川", "利根川", "石狩川", "木曽川"],
        correctAnswer: "信濃川"
      },
      { // 5問目
        text: "沖縄県の県庁所在地はどこですか？",
        options: ["石垣市", "沖縄市", "宮古島市", "那覇市"],
        correctAnswer: "那覇市"
      }
    ]
  },
  {
    // === 4番目のビデオとクイズセット ===
    id: 3,
    title: "Video4",
    videoId: 'WsTecmry4wI', // 2番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "福岡"],
        correctAnswer: "東京"
      },
      { // 2問目
        text: "日本で一番高い山は何ですか？",
        options: ["富士山", "北岳", "奥穂高岳", "阿蘇山"],
        correctAnswer: "富士山"
      },
      { // 3問目
        text: "日本で一番大きい湖は何ですか？",
        options: ["浜名湖", "サロマ湖", "琵琶湖", "霞ヶ浦"],
        correctAnswer: "琵琶湖"
      },
      { // 4問目
        text: "日本で一番長い川は何ですか？",
        options: ["信濃川", "利根川", "石狩川", "木曽川"],
        correctAnswer: "信濃川"
      },
      { // 5問目
        text: "沖縄県の県庁所在地はどこですか？",
        options: ["石垣市", "沖縄市", "宮古島市", "那覇市"],
        correctAnswer: "那覇市"
      }
    ]
  },
  {
    // === 5番目のビデオとクイズセット ===
    id: 4,
    title: "Video5",
    videoId: 'M8UzfMj6Wjk', // 2番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "福岡"],
        correctAnswer: "東京"
      },
      { // 2問目
        text: "日本で一番高い山は何ですか？",
        options: ["富士山", "北岳", "奥穂高岳", "阿蘇山"],
        correctAnswer: "富士山"
      },
      { // 3問目
        text: "日本で一番大きい湖は何ですか？",
        options: ["浜名湖", "サロマ湖", "琵琶湖", "霞ヶ浦"],
        correctAnswer: "琵琶湖"
      },
      { // 4問目
        text: "日本で一番長い川は何ですか？",
        options: ["信濃川", "利根川", "石狩川", "木曽川"],
        correctAnswer: "信濃川"
      },
      { // 5問目
        text: "沖縄県の県庁所在地はどこですか？",
        options: ["石垣市", "沖縄市", "宮古島市", "那覇市"],
        correctAnswer: "那覇市"
      }
    ]
  },
  {
    // === 6番目のビデオとクイズセット ===
    id: 5,
    title: "Video6",
    videoId: 'k5XR98X3bVk', // 2番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "福岡"],
        correctAnswer: "東京"
      },
      { // 2問目
        text: "日本で一番高い山は何ですか？",
        options: ["富士山", "北岳", "奥穂高岳", "阿蘇山"],
        correctAnswer: "富士山"
      },
      { // 3問目
        text: "日本で一番大きい湖は何ですか？",
        options: ["浜名湖", "サロマ湖", "琵琶湖", "霞ヶ浦"],
        correctAnswer: "琵琶湖"
      },
      { // 4問目
        text: "日本で一番長い川は何ですか？",
        options: ["信濃川", "利根川", "石狩川", "木曽川"],
        correctAnswer: "信濃川"
      },
      { // 5問目
        text: "沖縄県の県庁所在地はどこですか？",
        options: ["石垣市", "沖縄市", "宮古島市", "那覇市"],
        correctAnswer: "那覇市"
      }
    ]
  },
  {
    // === 7番目のビデオとクイズセット ===
    id: 6,
    title: "Video7",
    videoId: 'dj1qUTDKV9k', // 2番目のビデオID (ご自身のものに書き換えてください)
    questions: [
      { // 1問目
        text: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "福岡"],
        correctAnswer: "東京"
      },
      { // 2問目
        text: "日本で一番高い山は何ですか？",
        options: ["富士山", "北岳", "奥穂高岳", "阿蘇山"],
        correctAnswer: "富士山"
      },
      { // 3問目
        text: "日本で一番大きい湖は何ですか？",
        options: ["浜名湖", "サロマ湖", "琵琶湖", "霞ヶ浦"],
        correctAnswer: "琵琶湖"
      },
      { // 4問目
        text: "日本で一番長い川は何ですか？",
        options: ["信濃川", "利根川", "石狩川", "木曽川"],
        correctAnswer: "信濃川"
      },
      { // 5問目
        text: "沖縄県の県庁所在地はどこですか？",
        options: ["石垣市", "沖縄市", "宮古島市", "那覇市"],
        correctAnswer: "那覇市"
      }
    ]
  },
  
  // { ... }, で区切って、3番目、4番目...と7番目までのビデオとクイズセットを追加してください。
  // idは 2, 3, 4... と連番になるようにしてください。

];