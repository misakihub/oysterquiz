const quiz = [
{
    question: '問題1.牡蠣は次の４つのうちどの分類の仲間でしょう？',
    answers:[
     '巻貝',　
     '陸貝',　
     '二枚貝',　
     '海貝'
    ],
    correct: '二枚貝'

 },{ question: 'カキと呼ばれている理由は？',
 answers:[
  '柿と似ているから',　
  '海の岩からかき落とすことから',　
  '海からかき集めることから',　
  '開けるときに貝柱をかっ切ることから'
 ],
 correct: '海の岩からかき落とすことから'

 },{ question: '牡蠣の胃に詰まっている緑色の正体は？',
 answers:[
  '海藻',　
  'ミドリムシ',　
  '藻',　
  '植物プランクトン'
 ],
 correct: '植物プランクトン'

 },{question: '牡蠣の体軸で右はどこ？',
 answers:[
  '殻が平べったい方',　
  '殻がふくらんでいる方',　
  '殻が開く方',　
  '殻がくっついてる方(殻長)'
 ],
 correct: '殻が平べったい方'

},{question: '次の４つの中で美味しい牡蠣の見極め方は？',
answers:[
 '外套膜が黒くて小さいもの',　
 '外套膜が黒くて大きいもの',　
 '殻が大きいもの',　
 '殻が小さいもの'
],
correct: '外套膜が黒くて大きいもの'

},{question: '外套膜の役割は？',
answers:[
 'カルシュウムを含んだ物質を出して殻を成長させる',　
 'いらない栄養を外に出す',　
 'カルシュウムを外に出す',　
 '特にない'
],
correct: 'カルシュウムを含んだ物質を出して殻を成長させる'

},{question: '牡蠣のエラについて。呼吸をする以外の役割は？',
answers:[
 '超音波を出す',　
 '他の貝とコミュニケーションを取る',　
 '植物プランクトンをこし取って唇弁(口)に運ぶ',　
 '人間の声を聞き分ける'
],
correct: '植物プランクトンをこし取って唇弁(口)に運ぶ'

},{question: '牡蠣が岩や貝殻など構造物に固着する時、どちら側を固着させるでしょう？',
answers:[
 '上(殻長)',　
 '下(開く方)',　
 '左(ふくらみのある方)',　
 '右(平べったい方)'
],
correct: '左(ふくらみのある方)'

},{question: '牡蠣の食べられない月は英名で「R」のつかない月と言われていますがその理由は？',
answers:[
 '産卵期で精巣と卵巣が非常に増大し、食用とはならない為',　
 '牡蠣の機嫌が悪い為',　
 '牡蠣が食べて欲しくないという意思が強い時期の為',　
 'そんなに食べたら牡蠣がなくなってしまう為'
],
correct: '産卵期で精巣と卵巣が非常に増大し、食用とはならない為'

},{question: '牡蠣にレモンをかけることには意味がありますその理由は？',
answers:[
 '法律で決まっているから',　
 'レモン嫌いを克服する為',　
 'ビタミンCを加えることで鉄分の吸収を助けるから',　
 '旨味成分が引き出させるから'
],
correct: 'ビタミンCを加えることで鉄分の吸収を助けるから'

 }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');


//問題文　選択肢を定義
const setupQuiz = () => { 
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    //constでいっこにまとめたいのにできない
    let buttonLenght = $button.length;
    while (buttonIndex < buttonLenght){
       $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
       buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
     } else {
        window.alert('不正解！');
     }
     quizIndex++;
     if (quizIndex < quizLength){
        setupQuiz();
     } else {
         window.alert('終了!あなたの正解数は' + score + '/' + quizLength +'です！');
     }
};
//ボタンを押したら正誤判定
let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
    });
    handlerIndex++;
}