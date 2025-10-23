export type StageType = {
  id: number;
  keyword: string;
  detail: string;
  code: string;
  image: string;
  state: "isDetected" | "isNotDetected" | "isNotEncountered";
};
export let stages: StageType[] = [
  {
    id: 0,
    keyword: "通常",
    detail: "通常のページ",
    code: "",
    image: "",
    state: "isDetected",
  },
  {
    id: 1,
    keyword: "文字の色変化",
    detail: '"Hello!"の文字が青ではなく緑色になっています。',
    code: `color: green;`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 2,
    keyword: "画像の傾きが変",
    detail: `CSS利用例の3.画像のカスタマイズの画像が、通常時よりも半回転多く傾いています。`,
    code: `{transform: rotate(186deg);`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 3,
    keyword: "背景色の急変化",
    detail: "背景色が急に明るい色に変わっています",
    code: 
    "background-color : #FFF2B2",
    image:"",
    state:"isNotEncountered",
  },
  {
    id: 4,
    keyword: "背景色が次第に変化",
    detail: "背景がだんだん灰色になっていきます。",
    code: `@keyframes gradual-grey-anim {
  from {
    background-color: #091b0c;
  }
  to {
    background-color: #364839;
  }
}
.gradual-grey {
  animation-name: gradual-grey-anim;
  animation-duration: 20s;
  animation-fill-mode: forwards;
}`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 5,
    keyword: "ボタンをクリックすると大きくなる",
    detail: `通常はクリックすると赤くなる仕様になっているボタンが、クリックすると大きくなってしまいます。`,
    code: `(e)=>{
    const btn = e.currentTarget;
    btn.classList.add("scale-200","bg-red-500","duration-300");
    setTimeout(()=>{
      btn.classList.remove("scale-200", "bg-red-500","duration-300");
      },600)
    }`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 6,
    keyword: "エラーメッセージ",
    detail: `ボタンをクリックすると引き返せというエラーメッセージが出てきます。`,
    code: `<div
          style={{
            position:"fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100vh",                        //縦幅画面いっぱい
            width: "100vw",                         //横幅画面いっぱい
            backgroundColor: "blue",                //背景色青
            color: "black",                         //文字の色黒
            display: "errorMessageShow",            //変数で表示方法を管理
            alignItems: "center",                   //縦方向に中央寄せ
            justifyContent: "center",               //横方向に中央寄せ
            flexDirection: "column",                //要素を縦に並べる
            pointerEvents:"none",                   //後ろのボタンが反応するようにする
          }}
        >
        {(
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "black",
              color: "white",
              padding: "40px",  //文字周りの余白指定
              fontSize: "2rem",
              boxShadow: "0 0 40px red",
              fontFamily: "Share Tech Mono, monospace", //文字のフォント指定
              justifyContent:"center"
            }}
            >
            Unexpected Error Had Happened <br /><br />
            details:<br />
            Turn back Turn back Turn back Turn back Turn back Turn back Turn back Turn back Turn back 
            Turn back Turn back Turn back Turn back Turn back Turn back Turn back Turn back Turn back 
          </div>
        )}
        </div>`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 7,
    keyword: "ボタンにホバーしたときに色が変わる",
    detail:
      "ボタンを押したときではなく、カーソルを合わせた（ホバーという）時点で既に色が変わってしまっています。",
    code: `.button:hover {
  background-color: red;
}`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 8,
    keyword: "数か所の配置が崩壊",
    detail: `flexboxという仕組みがよく配置で使われますが、設定の仕方を間違えると思った通りの配置にはなってくれません。`,
    code: `{
      display: flex;
      justify-content: flex-start;
    }`,
    image: "",
    state: "isNotEncountered",
  }
];
