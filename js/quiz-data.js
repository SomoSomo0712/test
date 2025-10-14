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
        options: ["お客様に感動を与えるため、常に完璧な料理を提供し続けること <br> To constantly provide perfect dishes in order to impress customers.", "お客様との会話を楽しお客様との会話を楽しみ、毎日を息抜きのように感じること <br> To enjoy conversations with customers and feel as if every day is a break.", "健康であり、笑顔を絶やさずに聞き上手な接待をすること <br> To be healthy, and to serve customers by being a good listener with a constant smile.", "長年の常連客を大切にし、新しい客とは時間をかけて関係を作ること <br> To cherish long-time regular customers and take the time to build relationships with new ones.","わからない / I don't know"],
        correctAnswer: "健康であり、笑顔を絶やさずに聞き上手な接待をすること <br> To be healthy, and to serve customers by being a good listener with a constant smile."
      },
      { // 2問目
        text: "「根を張らない限りは花は咲かないんです」という言葉は、話者自身のどのような経験を表現していると考えられますか？<br>Which part of the interviewee's experience do you think is expressed by the words, 'Without roots, flowers will not bloom'?",
        options: ["コツコツと貯金を続けた結果、ようやく自分のお店を持つことができた経験 <br> The experience of finally being able to open her own shop as a result of constantly saving money.", "長年働いてきたことで健康を損なったが、そのおかげで健康のありがたみが分かったという経験 <br> The experience of realizing the value of health because she damaged her health after working for many years.", "お店を始めた当初は客が来なかったが、地道な努力を続けたことで繁盛店になった経験 <br> The experience of the shop becoming prosperous through steady effort, even though no customers came when she first started.", "夫が亡くなり、たくさん涙を流すという辛い時期を乗り越えてきたからこそ、今があるという経験 <br> The experience of being where she is today precisely because she overcame the difficult period of shedding many tears after her husband passed away.","わからない / I don't know"],
        correctAnswer: "夫が亡くなり、たくさん涙を流すという辛い時期を乗り越えてきたからこそ、今があるという経験 <br> The experience of being where she is today precisely because she overcame the difficult period of shedding many tears after her husband passed away."
      },
      { // 3問目
        text: "話者が「かね」ではなく「おかね」という言葉をあえて使った理由として、最も考えられるものは何ですか？<br>What is the most likely reason the interviewee deliberately use the word 'okane' instead of 'kane'?",
        options: ["お客様が懸命に働いて得たお金そのものに敬意を払い、単なる物質としてではなく、その背景にある努力までをも尊重するため <br>  To respect not just the money itself that customers worked hard to earn, but also the effort behind it, treating it as more than a mere physical object.", "丁寧な言葉遣いをすることで、お客様に心地よくお金を支払ってもらうため <br> By using polite language, make customers feel comfortable paying.", "社会人として、また接客業のプロとして、常に正しい敬語を使うべきだから <br> As a working adult and a professional in the service industry, she should always use correct honorific language.", "「かね」という言葉の響きが持つ無機質さや冷たさを避け、「おかね」という柔らかい響きを好んでいるから <br> Because she prefers to avoid the inorganic and cold sound of the word \"kane\" and prefers the softer sound of \"okane.\"", "わからない / I don't know"],
        correctAnswer: "お客様が懸命に働いて得たお金そのものに敬意を払い、単なる物質としてではなく、その背景にある努力までをも尊重するため <br>  To respect not just the money itself that customers worked hard to earn, but also the effort behind it, treating it as more than a mere physical object."
      },
      { // 4問目
        text: "ドキュメンタリーの中で、話者はお客様に「ほっとする」時間を提供したいという想いから、お店の経営に関するある方針をどのように述べましたか？<br>Based on her wish to provide customers with a \"relaxing\" and comfortable time, how did the interviewee describe a policy she has for running her shop?",
        options: ["お店の運営のために、お客様から寄付金を集めるようなことはしたくない  <br> She does not want to do things like collect donations from customers to help run the shop.", "お客様にリラックスしてもらうため、メニューの値段を値上げしたくない <br> She does not want to raise the prices of her menu items, so that her customers can relax.", "お店の経営が苦しいことをお客様に悟られたくない <br> She does not want her customers to realize that her shop is facing financial difficulties.", "チャリティーなどの目的で、お客様から寄付金を集めたくない <br> She does not want to collect donations from her customers for purposes like charity.", "わからない / I don't know"],
        correctAnswer: "お客様にリラックスしてもらうため、メニューの値段を値上げしたくない <br> She does not want to raise the prices of her menu items, so that her customers can relax."
      },
      { // 5問目
        text: "ドキュメンタリーの中で使われた「2本のレール」とはどういうことですか。<br>What does the expression \"the two rails\" mean in this context? ",
        options: ["お店の物理的な寿命と、自分自身の体力の限界という、どちらが先に訪れるか分からない二つの流れのこと。 <br>  The two parallel courses of the shop's physical lifespan and her own physical limits, not knowing which will come to an end first.", "楽なことと苦しいことは常に隣り合わせであるという、人生の浮き沈みのこと。 <br>  The ups and downs of life, meaning that comfort and hardship are always side-by-side.", "お客様との関係と自分の健康という、仕事をする上で大切にすべき二つの基本方針のこと。 <br>  The two basic principles that she should value in her work: her relationship with customers and her own health.", "過去の辛い思い出と、これからの未来への希望という、心の中に共存する二つの気持ちのこと。 <br> The two feelings that coexist in her heart: painful memories from the past and hope for the future.", "わからない / I don't know"],
        correctAnswer: "お店の物理的な寿命と、自分自身の体力の限界という、どちらが先に訪れるか分からない二つの流れのこと。 <br>  The two parallel courses of the shop's physical lifespan and her own physical limits, not knowing which will come to an end first."
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
        text: "コーヒーショップ「The Moon and The Dog」という店名について、インタビューの中でどのように由来が説明されていましたか?<br>How was the origin of the coffee shop name \"The Moon and The Dog\" explained in the interview?",
        options: ["話者が子供の頃から大切にしていた絵本のタイトルから <br> From the title of a picture book the interviewee cherished since childhood.", "夜空に浮かぶ月と、力強く生きる犬のイメージを組み合わせた言葉から <br> From words combining the image of the moon in the night sky and a dog with strong vitality.", "以前見かけたCDアルバムのタイトルを逆にしたものから <br> From reversing the title of a CD album seen before.", "お店の所在地と関係のあるキーワードを組み合わせたものから <br> From keywords related to the shop's location.", "わからない / I don't know"],
        correctAnswer: "以前見かけたCDアルバムのタイトルを逆にしたものから <br> From reversing the title of a CD album seen before."
      },
      { // 2問目
        text: "話者が、以前勤めていた大規模な書店での仕事について、どのような点が楽しかったと述べていますか？<br>Regarding the work at the large bookstore where the interviewee previously worked, what aspect did she mention finding enjoyable?",
        options: ["特定の専門分野に特化した書物の深い知識を得られたこと <br> Gaining deep knowledge of books specialized in specific fields.","様々なジャンルの本に触れ、多くのことを学ぶことができたと感じたこと <br> Feeling able to touch upon various genres of books and learn many things.", "多くの顧客と交流し、彼らの読書傾向を知ることができたこと <br> Interacting with many customers and learning about their reading preferences.", "本の仕入れや陳列といった、店舗運営の実務を経験できたこと <br> Gaining practical experience in store operations such as book procurement and display.", "わからない / I don't know"],
        correctAnswer: "様々なジャンルの本に触れ、多くのことを学ぶことができたと感じたこと <br> Feeling able to touch upon various genres of books and learn many things."
      },
      { // 3問目
        text: "話者が「自分の力で何かをしたい」と思い、自分で書店を開くことを決めた主なきっかけは何だと述べていますか？<br>What did the interviewee mainly state as the major reason (trigger) for thinking \"I want to do something with my own power\" and deciding to open her own bookstore?",
        options: ["以前の勤務先で、書店経営のノウハウを完全に習得したため <br> Because she had completely mastered the know-how of bookstore management at her previous workplace.", "雇われて働くというスタイルに、自身の限界や適性の不一致を感じたため <br> Because she felt a limit or a mismatch in suitability with the style of working for someone else.", "書店という特定の分野で独立開業することに、大きなビジネスチャンスを見出したため <br> Because she saw a big business opportunity in opening an independent business in the specific field of bookstores.", "多くの顧客からの勧めや応援が、独立の決断を後押ししたため <br> Recommendations and encouragement from many customers motivated her decision to become independent.", "わからない / I don't know"],
        correctAnswer: "雇われて働くというスタイルに、自身の限界や適性の不一致を感じたため <br> Because she felt a limit or a mismatch in suitability with the style of working for someone else."
      },
      { // 4問目
        text: "自分で書店を経営するようになって感じている面白さや楽しさとして、インタビューで述べられているのはどれですか？<br>Which of the following did the interviewee mention in the interview as the interesting or enjoyable aspects she feel since starting to manage their own bookstore?",
        options: ["過去の勤務経験ではできなかった、思いついたことをすぐに実行できること <br> Being able to immediately implement ideas that she couldn't do in her past work experience.", "経営者として、日々の売上目標達成に向けて工夫を凝らすこと <br> As a manager, devising strategies to achieve daily sales targets.", "様々なジャンルの古本を査定・買取し、本の価値を見極めること <br> Appraising and purchasing used books of various genres and determining their value.", "書店を地域の文化交流の場として発展させていくプロセスそのもの <br> The process itself of developing the bookstore into a place for local cultural exchange.", "わからない / I don't know"],
        correctAnswer: "過去の勤務経験ではできなかった、思いついたことをすぐに実行できること <br> Being able to immediately implement ideas that she couldn't do in her past work experience."
      },
      { // 5問目
        text: "仕事に対する現在の考え方について、インタビューの中で以前と比べてどのように変化したと述べていますか？<br>Regarding her current perspective on work, how did the interviewee state it has changed compared to before in the interview?",
        options: ["以前は仕事は楽しいものではないと思っていたが、今はやりがいを感じるようになった <br> Before, she thought work wasn't enjoyable, but now she feels a sense of purpose.", "以前は苦痛の中に少しの楽しみがあると感じていたが、今は仕事そのものを楽しいと言えるようになった <br> Before, she felt there was a little bit of enjoyment amidst mostly pain, but now she can say that the work itself is enjoyable.", "以前は仕事は自己犠牲を伴うものだと考えていたが、今は自己成長の機会だと捉えている <br> Before, she thought work involved self-sacrifice, but now she sees it as an opportunity for self-growth.", "以前は仕事とプライベートを完全に分けていたが、今は仕事が生活の一部となり楽しめている <br> Before, she completely separated work and private life, but now work is part of her life and she is enjoying it.", "わからない / I don't know"],
        correctAnswer: "以前は苦痛の中に少しの楽しみがあると感じていたが、今は仕事そのものを楽しいと言えるようになった <br> Before, she felt there was a little bit of enjoyment amidst mostly pain, but now she can say that the work itself is enjoyable."
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
        text: "インタビューの中で、話者が所属するサークルで「主な楽器」として演奏されているものについて、その楽器の特徴をどのように述べていますか？<br>In the interview, how does the interviewee describe the characteristics of the instrument mainly played in the club he belongs to, referring to it as the \"main instrument\"?",
        options: ["イタリアで生まれた、あまり見る機会がない楽器 <br> An instrument from Italy, not often seen.", "イギリスで生まれた、クラシックでよく見る楽器 <br> An instrument from the UK, often seen in classical music.", "フランスで生まれた、初心者でもすぐに音が出せる楽器 <br> An instrument from France, with which even beginners can immediately produce sound.", "オーストリアで生まれた、あまり触る機会がない楽器 <br> An instrument from Austria, not often played.","わからない / I don't know"],
        correctAnswer: "イタリアで生まれた、あまり見る機会がない楽器 <br> An instrument from Italy, not often seen."
      },
      { // 2問目
        text: "話者のサークルでは、4年生はいつ活動から引退しますか？<br>According to the interviewee, when do fourth-year students leave from the club activities he belongs to?",
        options: ["10月 / October", "11月 / November", "12月 / December", "3月 / March", "わからない / I don't know"],
        correctAnswer: "12月 / December"
      },
      { // 3問目
        text: "話者は、ご自身が所属するサークルの人間関係について、どのように述べていますか？<br>How does the interviewee describe the relationships in the club he belongs to?",
        options: ["同級生同士の繋がりが強く、演奏以外でも交流が盛んである <br> Relationships with people who joined the club activity in the same year are strong, and they interact frequently even outside of performances.", "男女の垣根がなく、他のサークルと比べて人間関係は良好である <br> There are no barriers between men and women, and relationships are better compared to other clubs.", "先輩後輩関係なく、メンバー間の繋がりが強い <br> Relationships between senior and junior members are very close, and connections with people who joined the club activity in the same year are also strong.", "グループ間での関係も良好で交流が盛んである <br> The relationships between groups are good, and they actively interact with each other.", "わからない / I don't know"],
        correctAnswer: "先輩後輩関係なく、メンバー間の繋がりが強い <br> Relationships between senior and junior members are very close, and connections with people who joined the club activity in the same year are also strong."
      },
      { // 4問目
        text: "インタビューの中で、話者のクラブは定期演奏会をいつ頃、年に何回開催していると述べていますか？<br>In the interview, when and how many times a year does the interviewee state that his club holds its regular concerts?",
        options: ["毎年5月と12月の2回 / Twice a year, in May and December.", "毎年5月か11月の1回 / Once a year, in either May or November.", "毎年12月の1回 / Once a year, in December.", "毎年5月と11月の2回 / Twice a year, in May and November.", "わからない / I don't know"],
        correctAnswer: "毎年5月と11月の2回 / Twice a year, in May and November."
      },
      { // 5問目
        text: "インタビューの中で、話者はご自身の現在の演奏状況について、どのように述べていますか？<br>In the interview, how does the interviewee describe his current playing status?",
        options: ["まだ曲を全く弾けない状況である <br> He is still in a situation where he cannot play songs at all.", "先輩と同じくらい上手く弾けるようになった <br> He has become as good at playing as the senior members.", "多くの曲を問題なく演奏できる <br> He can play many songs without difficulty.", "簡単な曲なら演奏できるようになった <br> He can now play simple songs.", "わからない / I don't know"],
        correctAnswer: "まだ曲を全く弾けない状況である <br> He is still in a situation where he cannot play songs at all."
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
        text: "話者は、具体的にいつからテニスショップでアルバイトを始めたと述べていますか？<br>Specifically, when did the interviewee say he started working part-time at the tennis shop?",
        options: ["学生時代にテニスを始めたばかりの頃 <br> When he first started playing tennis as a student.", "学生としてテニスのトーナメントに出ていた時期 <br> When he was playing tennis tournaments as a student.", "大会の引退後 <br> After his last competition.", "就職活動中 <br> While job-hunting.", "わからない / I don't know"],
        correctAnswer: "大会の引退後 <br> After his last competition."
      },
      { // 2問目
        text: "話者は、ラケットのストリンギング（ガット張り）の技術について、どのように身につけたと述べていますか？<br>How does the interviewee describe how he learned the technique of stringing a racket?",
        options: ["先輩やコーチに教わった <br> He learned from his seniors and coaches.", "自分自身で試行錯誤しながら独学で習得した <br> He learned it by himself through trial and error.", "アルバイト先のテニスショップで教わった <br> He learned it at the tennis shop where he worked part-time.", "ラケットメーカーの研修プログラムで修了した <br> Completed a training program for a racket manufacturer.", "わからない / I don't know"],
        correctAnswer: "アルバイト先のテニスショップで教わった <br> He learned it at the tennis shop where he worked part-time."
      },
      { // 3問目
        text: "話者によると、ラケットのストリンギング作業全体（ガット張り以外の作業も含めて）にかかるおおよその時間として、何分程度と述べていますか？<br>According to the interviewee, approximately how many minutes does it take to string a racket (including other steps)?",
        options: ["10分程度 / About 10 minutes", "20分程度 / About 20 minutes", "30分程度 / About 30 minutes", "１時間程度 / About 1 hour", "わからない / I don't know"],
        correctAnswer: "30分程度 / About 30 minutes"
      },
      { // 4問目
        text: "話者は、ラケットのストリンギングにおいて、仕上がりに差が出る重要なポイントはどこだと述べていますか？<br>What key points does the interviewee mention in stringing a racket that will make a difference in the final result?",
        options: ["使用するストリングス（ガット）の素材を適切に選んでいるか <br> Whether the material of the strings (gut) is well chosen.", "ストリンギングマシンの手入れがなっているか <br> How well the stringing machine is organized.", "ラケットごとに適切な張り方を知っているか <br> Whether you know the correct way to string each racket.", "ストリンガーの体力や集中力による <br> Depends of stringer's physical strength and concentration.", "わからない / I don't know"],
        correctAnswer: "ラケットごとに適切な張り方を知っているか <br> Whether you know the correct way to string each racket."
      },
      { // 5問目
        text: "話者が仕事をしていて特に満足感を得られることとして、インタビューの中で挙げられているのはどれですか？<br>In the interview, what aspect of the interviewee's job did the interviewee mention as being particularly satisfying?",
        options: ["新しいラケットやシューズがいち早く手に入ること <br> Being able to get new rackets and shoes quickly.", "自分のアドバイスによってお客さんの成績が向上した時 <br> When his advice helps a client improve their performance.", "（一般の）お客さんが他のストリンガーではなく自分にストリンギングを依頼してくれる時 <br> When a customer asks him to string their racket instead of asking another stringer.", "仕事を通してテニスの技術が向上していると実感する時 <br> When he realizes that his tennis skills are improving through his work.", "わからない / I don't know"],
        correctAnswer: "（一般の）お客さんが他のストリンガーではなく自分にストリンギングを依頼してくれる時 <br> When a customer asks him to string their racket instead of asking another stringer."
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
        text: "話者は、ご自身にとって募金活動（ファンドレイジング）をどのように捉えていると述べていますか？<br>What does the interviewee think about fundraising?",
        options: ["社会貢献を行う唯一の方法である <br> It is the only way to make a social contribution.", "組織の活動を維持・拡大するための、金銭的な基盤となるもの <br> It is a financial basis for maintaining and expanding the organization's activities.", "自分が持つ様々な目標を実現するための、多様な方法の一つである <br> It is one of many ways to achieve the various goals he has.", "人々に活動への理解を促し、共感を得るための最初のステップ <br> It is the first step in helping people understand and emphasise their activities.","わからない / I don't know"],
        correctAnswer: "自分が持つ様々な目標を実現するための、多様な方法の一つである <br> It is one of many ways to achieve the various goals he has."
      },
      { // 2問目
        text: "インタビューの中で、話者が特に募金活動（ファンドレイジング）を行っている対象として挙げたのはどのような子供たちですか？<br>In the interview, what kind of children did the interviewee mention as the ones he was particularly targeting through his fundraising efforts?",
        options: ["児童虐待により命を落とす子供たち <br> Children who die from child abuse.", "学校に通えない日本の子供たち <br> Japanese children who can't go to school.", "災害で被災した日本の子供たち <br> Children who were affected by disaster in Japan.", "貧困に苦しむ海外の子供たち <br> Children who were suffering by poverty overseas.","わからない / I don't know"],
        correctAnswer: "児童虐待により命を落とす子供たち <br> Children who die from child abuse."
      },
      { // 3問目
        text: "話者が行っている募金活動の具体的な方法について、どのように説明していますか？<br>How does the interviewee explain the specific methods of fundraising?",
        options: ["企業や団体にアプローチし、大口の寄付や協賛を得る <br> Approaching companies and organizations to secure major donations and sponsorship.", "街頭で通行人に直接話しかけ、活動への理解と協力を求める <br> Talk directly to passersby on the street to ask for their understanding and cooperation in their activities.", "イベント会場で参加者から寄付を募る <br> Collect donations from attendees at the event.", "インターネットを使ったクラウドファンディングが中心 <br> Mainly online crowdfunding.", "わからない / I don't know"],
        correctAnswer: "街頭で通行人に直接話しかけ、活動への理解と協力を求める <br> Talk directly to passersby on the street to ask for their understanding and cooperation in their activities."
      },
      { // 4問目
        text: "話者がファンドレイジングを始めた「きっかけ」として述べた最も大きな出来事は何ですか？<br>What was the biggest event that the interviewee mentioned that “triggered” him to start fundraising?",
        options: ["以前の仕事で社会貢献の重要性を感じたこと <br> What made him realize the importance of contributing to society in his previous job.", "学生時代に社会問題に関心を持ったこと <br> He became interested in social issues when he was a student.", "尊敬する人物の活動に感銘を受けたこと <br> Being impressed by the activities of someone he respect.", "自身の子供が生まれたこと <br> The birth of his own children.", "わからない / I don't know"],
        correctAnswer: "自身の子供が生まれたこと <br> The birth of his own children."
      },
      { // 5問目
        text: "所属団体である「日本子供募金」の寄付者の年齢層について、話者はどのような特徴を述べていますか？<br>What characteristics does the interviewee mention about the age group of donors to the organization he belongs to, the Japan Child Donation?",
        options: ["10代から20代前半の若年層が全体の60%を占める <br> Young people in their teens and early 20s account for 60% of the total.", "比較的高収入な30代、40代が多い <br> Most of them are in their 30s and 40s with relatively high incomes.", "UNの募金と同様に、60代、70代の高齢者が中心である <br> Like UN donations, the majority of donors are in their 60s and 70s.", "特定の年齢層に偏りがなく、幅広い層から寄付が集まっている <br> There is no bias towards a particular age group, and donations come from a wide range of people.", "わからない / I don't know"],
        correctAnswer: "10代から20代前半の若年層が全体の60%を占める <br> Young people in their teens and early 20s account for 60% of the total."
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
        text: "このサークルで、普段の活動に大体何名くらいのメンバーが参加していると述べていますか？<br>Approximately how many members did the interviewee say are involved in regular activities in this club?",
        options: ["少なくとも10名程度 <br> At least 10 people.", "少なくとも20名程度 <br> At least 20 people.", "少なくとも30名程度 <br> At least 30 people.", "LINEグループの人数と同じくらい <br> Same as the number of people in a LINE group.", "わからない / I don't know"],
        correctAnswer: "少なくとも20名程度 <br> At least 20 people."
      },
      { // 2問目
        text: "インタビューの中で、このサークルの主な活動は何だと述べられていますか？<br>In the interview, what was stated as the group's main activity?",
        options: ["特定のスポーツ（バスケットボールなど）を集中して練習すること <br> Intensive practice of a particular sport (e.g. basketball).", "時間ごとに、バレーボールやバスケットボールなど複数のスポーツを楽しむこと <br> Enjoying multiple sports such as volleyball and basketball at different times.", "参加者全体のスポーツのレベルアップを目指した基礎練習を行うこと <br> Providing basic training aimed at improving the sports level of all participants.", "季節ごとに種目を固定し、その期間は一つの競技に集中して練習や試合を行っている <br> Each season has a fixed event, during which they focus on practicing and competing in one sport.", "わからない / I don't know"],
        correctAnswer: "時間ごとに、バレーボールやバスケットボールなど複数のスポーツを楽しむこと <br> Enjoying multiple sports such as volleyball and basketball at different times."
      },
      { // 3問目
        text: "インタビューの中で、サークルの特に盛り上がる活動として挙げられていたものはどれですか？<br>In the interview, what activities were mentioned as particularly exciting for the club?",
        options: ["毎日のように行う練習試合 <br> Practice matches almost every day.", "年に数回の合宿と、定期的な競技大会 <br> Several training camps per year and regular competitions.", "旅行や逃走中、運動会などのイベント <br> Events such as travel, \"On the run\", and sports days.", "他の大学との交流戦 <br> Inter-university games.", "わからない / I don't know"],
        correctAnswer: "旅行や逃走中、運動会などのイベント <br> Events such as travel, \"On the run\", and sports days."
      },
      { // 4問目
        text: "このサークルの「一番の魅力」は、どのような点だと述べていますか？<br>What does the interviewee say is the “greatest attraction” of this club?",
        options: ["特定のスポーツを専門的に練習し、技術を高められること <br> The ability to specialize in a particular sport and improve one's skills.", "上手い下手に関係なく、みんなで様々なスポーツを楽しめること <br> To be able to enjoy a variety of sports together, regardless of skill level.", "経験者がリーダーシップを発揮し、未経験者を指導できる環境があること <br> There is an environment in which those with experience can demonstrate leadership and provide guidance to those without experience.", "レベルの高いメンバーが集まり、競技を通して互いに高め合えること <br> High-level members come together and can improve each other through competition.","わからない / I don't know"],
        correctAnswer: "上手い下手に関係なく、みんなで様々なスポーツを楽しめること <br> To be able to enjoy a variety of sports together, regardless of skill level."
      },
      { // 5問目
        text: "サークルをより良くするために今後どうしていきたいと述べていますか？<br>What does the interviewee plan to do in the future to improve the club?",
        options: ["男女問わず、彼らにとって居心地のいい場づくりをすること <br> Create a comfortable environment regardless of gender.", "たくさんの人が参加しやすい雰囲気を作っていくこと <br> Create an atmosphere for more people to be active in the club.", "活動場所を増やし、活動頻度を上げること <br> Increase the number of places where activities can be held and the frequency of activities.", "学年に関係なく、交流を深めること <br> To deepen interactions regardless of school year.","わからない / I don't know"],
        correctAnswer: "学年に関係なく、交流を深めること <br> To deepen interactions regardless of school year."
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
        text: "コーヒーショップ「Ochamaro」の店名について、インタビューの中でどのように説明されていましたか？<br>How was the name of the coffee shop \"Ochamar\" explained in the interview?",
        options: ["お茶を美味しく提供することに由来する名前 <br> The name comes from the delicious way tea is served.", "お客様同士がお喋りを楽しむ様子から付けられた名前 <br> The name was chosen because of the way customers enjoy chatting with each other.", "「集まろう（Atsumaro）」という言葉に由来する名前 <br> The name comes from the word \"Atsumaro\" (let's gather together).", "店主の好きな言葉を元にした名前 <br> The name is based on the owner's favorite word.", "わからない / I don't know"],
        correctAnswer: "「集まろう（Atsumaro）」という言葉に由来する名前 <br> The name comes from the word \"Atsumaro\" (let's gather together)."
      },
      { // 2問目
        text: "インタビューの中で、話者が現在のコーヒーショップの仕事を始めたのはいつ頃だと述べられていますか？<br>In the interview, when did the interviewees say they started working at their current coffee shop?",
        options: ["カフェでアルバイトを始めた学生時代から <br> Since he started working part-time at a cafe as a student.", "会社員として働いていた期間中から <br> During the time he worked as a company employee.", "コーヒーに関する専門学校に通っていた期間 <br> The period during which he attended a vocational school related to coffee.", "会社を定年退職した後 <br> After retiring from the company.", "わからない / I don't know"],
        correctAnswer: "会社を定年退職した後 <br> After retiring from the company."
      },
      { // 3問目
        text: "話者が、このお店をどのような場所にしたい、あるいは実現できていると感じていると述べていますか？<br>What kind of place do the interviewees want their store to be, or what kind of place do they feel they have achieved?",
        options: ["一人で来ても、偶然の出会いや人との繋がりが生まれるサロンのような場所 <br> It's a salon-like place where even if you come alone you can have chance encounters and make connections with people.", "静かに一人で過ごし、じっくりと自分の時間と向き合える落ち着いた空間 <br> A calm space where you can spend some quiet time alone and focus on your own time.", "地域のイベント開催を通じて、多くの人が特定の目的に集まる交流拠点 <br> A community hub where many people gather for a specific purpose through the hosting of local events.", "コーヒー愛好家が集まり、コーヒーを共に楽しむための拠点 <br> A place for coffee lovers to gather and enjoy coffee together.","わからない / I don't know"],
        correctAnswer: "一人で来ても、偶然の出会いや人との繋がりが生まれるサロンのような場所 <br> It's a salon-like place where even if you come alone you can have chance encounters and make connections with people."
      },
      { // 4問目
        text: "話者が話した「シンクロニシティ」について、どのように述べられていますか？<br>How did the store interviewees explain the \"synchronicity\" they mentioned?",
        options: ["同じ趣味を持つ人々が自然と集まること <br> People with the same interests naturally come together.", "音楽のリズムやタイミングが完全に一致すること <br> The rhythm and timing of the music match perfectly.", "出会いは偶然ではなく必然であり、お店で人との再会などが起きていること <br> Encounters are not coincidences but fate, and it is not uncommon to meet people again at the store.", "目標を立てると、不思議とそれが現実になること <br> When you set a goal, it miraculously becomes a reality.", "わからない / I don't know"],
        correctAnswer: "出会いは偶然ではなく必然であり、お店で人との再会などが起きていること <br> Encounters are not coincidences but fate, and it is not uncommon to meet people again at the store."
      },
      { // 5問目
        text: "話者がコーヒーショップを経営する「理由」や「やりがい」として特に強調していたことは何ですか？<br>What did the interviewees particularly emphasise as their “reason” or “reward” for running a coffee shop?",
        options: ["お店が特定のイベントを支援することで、新たな顧客層を獲得できることの例 <br> It's an example of how a store can attract new customers by supporting a specific event.", "地域で活発なイベントを開催することが、カフェの集客に繋がる好循環の例 <br> It's an example of a virtuous cycle in which hosting lively local events leads to more customers for the cafe.", "個人的な感動や喜びが、日々の店舗経営の困難を乗り越える力となることの例 <br> It's an example of how personal emotions and joy can give you the strength to overcome the daily challenges of running a store.", "お店の活動が、単なる商売を超えて他者の人生に良い影響を与えていることの実感の例 <br> It's an example of how the store's activities go beyond mere business and have a positive impact on the lives of others.","わからない / I don't know"],
        correctAnswer: "お店の活動が、単なる商売を超えて他者の人生に良い影響を与えていることの実感の例 <br> It's an example of how the store's activities go beyond mere business and have a positive impact on the lives of others."
      }
    ]
  },
  
  // { ... }, で区切って、3番目、4番目...と7番目までのビデオとクイズセットを追加してください。
  // idは 2, 3, 4... と連番になるようにしてください。

];