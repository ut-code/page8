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
    code: "background-color : #FFF2B2",
    image: "",
    state: "isNotEncountered",
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
            opecity:"0.8",                          //透明度
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
  },
  {
    id: 9,
    keyword: "タイトル変化",
    detail: `タイトルの中身が中国語になっています。`,
    code: `
      <span className="text-4xl">欢迎</span>
      ~
      <div className="font-bold text-center text-8xl underline decoration-[orangered]">
        欢迎     //要素の中身を記述するところ
      </div>
    `,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 10,
    keyword: "ボタンを押すと背景が変わる",
    detail: `ボタンを押すと、背景色が真っ赤になり、文字も黒い不気味なページになってしまいます。`,
    code: `.buttonPushBgcolorAnomaly{
  color: black;
  background-color: #b91c1c;
}`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 11,
    keyword: "英語になる",
    detail: `ページ全体が英語になっています。`,
    code: `
(HTMLのコード)
      if (stageId === 11) {
          return <EnglishAnomaly />;   //<EnglishAnomaly />は英語で書かれたコンポーネント（構成要素）
      }
      `,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 12,
    keyword: "HTMLとCSSの順番が逆",
    detail: `HTMLの説明欄とCSSの説明欄が逆になっています。`,
    code: `<li className={"p-4 border border-gray-600 rounded-lg order-2"}> //orderで表示順を指定できます
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">HTML</dt>
                <dd className="mt-1 text-lg">ウェブページの骨格を作る言語。</dd>
              </dl>
            </li>
            <li className="p-4 border border-gray-600 rounded-lg order-1">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">CSS</dt>
                <dd className="mt-1 text-lg">
                  ウェブページの見た目を決める言語。
                </dd>
              </dl>
            </li>`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 13,
    keyword: "Topボタン上昇",
    detail: `Topへ戻るボタンを押すと、画面ではなくボタンが上昇してしまいます。`,
    code: `TopButtonFunction = ()=>{
  const nextBtn = document.getElementById("nextBtn")!;
  nextBtn.style.marginBottom = '100px';

  const topBtn = document.getElementById('topBtn')!;
  const parent = topBtn.offsetParent as HTMLElement;

  const rect = topBtn.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  const startTop = rect.top - parentRect.top - 100;

  topBtn.style.position = 'absolute';
  topBtn.style.top = ‘＄{startTop}px‘;

  topBtn.style.transition = 'top 1s ease-in-out';

  const stopTop = 200

  requestAnimationFrame(() => {
    topBtn.style.top = ‘＄{stopTop}px‘;
  })`,
  image: "",
  state: "isNotEncountered"
  },
  {
    id: 14,
    keyword: "画像がついてくる",
    detail: `マウスカーソルを近づけると画像が追いかけてきます。以下のコードでは、マウスカーソルの位置を取得して、それをもとに画像の位置を変えています。`,
    code: `
useEffect(() => {
    if (stageId !== 14) return;
    if (!imgRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.pageX;
      mouseY.current = e.pageY;

      if (!chasing.current && imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        imgWidthHalf = rect.width / 2;
        imgHightHalf = rect.height / 2;
        const imgCenterX = rect.left + window.scrollX + imgWidthHalf;
        const imgCenterY = rect.top + window.scrollY + imgHightHalf;
        const dist = ((mouseX.current - imgCenterX)**2 + (mouseY.current - imgCenterY)**2)**0.5;

        if (dist < 200) {
          chasing.current = true;

          const rect = imgRef.current.getBoundingClientRect();
          x.current = rect.left + window.scrollX + imgWidthHalf;
          y.current = rect.top + window.screenY + imgHightHalf;

          imgRef.current.style.position = "absolute";
          imgRef.current.style.left = '\${x.current}px';
          imgRef.current.style.top = "\${y.current}px";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const speed = 0.05;
    let animId:number;
    const chase = () => {
      if (imgRef.current && chasing.current) {
        
        x.current += (mouseX.current - x.current) * speed;
        y.current += (mouseY.current - y.current) * speed;

        imgRef.current.style.left = '\${x.current - imgWidthHalf}px';
        imgRef.current.style.top = '\${y.current - imgHightHalf}px';
      }
      animId = requestAnimationFrame(chase);
    };
    chase();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  });
`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 15,
    keyword: "URLがおかしい",
    detail: `URLがとんでもないことになっています。`,
    code: `
(Javascriptのコード)
if (stageId === 15) {
  navigate("/引き返せ引き返せ引き返せ引き返せ引き返せ引き返せ");
>>>>>>> main
}`,
    image: "",
    state: "isNotEncountered",
  },
  {
      id: 16,
    keyword: "文字化け",
    detail: `ようこそにカーソルを合わせると文字化けします。`,
    code: `<div className="w-[400px] inline-block group">
  <span className="group-hover:hidden">ようこそ</span>
  <span className={"hidden text-6xl group-hover:block"}>繧医≧縺薙◎</span>
</div>`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 17,
    keyword: "大文字になる",
    detail: `CSSのコードが大文字になってしまいます。`,
    code: `text-transform: uppercase;`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 18,
    keyword: "JavaScriptの文字が変化",
    detail: `JavaScriptの文字がTypeScriptになっています。TypeScriptは実際にある言語でJavaScriptに「型」の仕組みを追加した言語です。`,
    code: `<dt className="font-bold text-2xl text-[orangered]">
            TypeScript
          </dt>`,
    image: "",
    state: "isNotEncountered",
  },
  {
    id: 19,
    keyword: "プログラミングの例が変化",
    detail: `例に記述されているプログラムがCSSからTailwindCSSに変化しています。`,
    code: `className=\n'text-blue-500\n text-[60px]\n font-extrabold'\n
~
className='\n border-2 border-black\n shadow-[2px_2px_5px]\n active:\n bg-red-500\n active:shadow-none'\n
~
className=\n 'w-[200px]\n h-[100px]\n rotate-[6deg]\n grayscale'\n`,
    image: "",
    state: "isNotEncountered",
  },
];
