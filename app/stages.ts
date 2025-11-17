export type StageType = {
  id: number;
  keyword: string;
  detail: string;
  code: string;
  image: string;
  state: "isDetected" | "isNotDetected" | "isNotEncountered" | "isDetectedNew";
  weight: number;
};

export let initialWeight = [
  { id: 0, weight: 15 },
  { id: 1, weight: 6 },
  { id: 2, weight: 6 },
  { id: 3, weight: 3 },
  { id: 4, weight: 6 },
  { id: 5, weight: 6 },
  { id: 6, weight: 3 },
  { id: 7, weight: 6 },
  { id: 8, weight: 3 },
  { id: 9, weight: 3 },
  { id: 10, weight: 6 },
  { id: 11, weight: 3 },
  { id: 12, weight: 6 },
  { id: 13, weight: 6 },
  { id: 14, weight: 6 },
  { id: 15, weight: 6 },
  { id: 16, weight: 6 },
  { id: 17, weight: 6 },
  { id: 18, weight: 6 },
  { id: 19, weight: 6 },
  { id: 20, weight: 6 },
  { id: 21, weight: 6 },
  { id: 22, weight: 6 },
  { id: 23, weight: 6 },
  { id: 24, weight: 6 },
  { id: 25, weight: 6 },
  { id: 26, weight: 6 },
  { id: 27, weight: 6 },
  { id: 28, weight: 3 },
  { id: 29, weight: 3 },
  { id: 30, weight: 6 },
  { id: 31, weight: 6 },
  { id: 32, weight: 3 },
  { id: 33, weight: 6 },
  { id: 34, weight: 6 },
  { id: 35, weight: 6 },
  { id: 36, weight: 6 },
]; //重み係数の初期値保存用

export let stages: StageType[] = [
  {
    id: 0,
    keyword: "通常",
    detail: "通常のページ",
    code: "",
    image: "",
    state: "isDetected",
    weight: 15,
  },
  {
    id: 1,
    keyword: "文字の色変化",
    detail: '"Hello!"の文字が青ではなく緑色になっています。',
    code: `color: green;`,
    image: "/anomalyImgs/1.jpeg",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 2,
    keyword: "画像の傾きが変",
    detail: `CSS利用例の3.画像のカスタマイズの画像が、通常時よりも半回転多く傾いています。`,
    code: `{transform: rotate(186deg);`,
    image: "/anomalyImgs/2.jpeg",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 3,
    keyword: "背景色の急変化",
    detail: "背景色が急に明るい色に変わっています",
    code: "background-color : #FFF2B2",
    image: "/anomalyImgs/3.jpeg",
    state: "isNotEncountered",
    weight: 3,
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
    image: "/anomalyImgs/4.jpeg",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 5,
    keyword: "押してはいけないボタン",
    detail: `Don't Click me!と書いてあります。押したらゲームオーバー。フリじゃないよ`,
    code: `    buttonText = "Don't Click me!"
    ExampleButtonFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const currentTop = rect.top + window.scrollY;
      const currentLeft = rect.left + window.scrollX;

      btn.style.position = "fixed";
      btn.style.top = ‘＄{currentTop}px‘;
      btn.style.left = ‘＄{currentLeft}px‘;

      btn.style.width = ‘＄{rect.width}px‘;
      btn.style.height = ‘＄{rect.height}px‘;

      btn.style.transition = "all 0.5s ease"
      btn.textContent = "Game Over";
      setTimeout(() => {
        btn.style.top = "0px";
        btn.style.left = "0px";
        btn.style.width = "100vw";
        btn.style.height = "100vh";
        btn.style.backgroundColor = "#8B0000";
        btn.style.zIndex = "9999";
        btn.style.fontSize = "3rem";
        btn.disabled = true;
      }, 1000)
      setTimeout(() => {
        navigate("/");
      }, 3000);
    };`,
    image: "/anomalyImgs/5.jpeg",
    state: "isNotEncountered",
    weight: 6,
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
    image: "/anomalyImgs/6.jpeg",
    state: "isNotEncountered",
    weight: 3,
  },
  {
    id: 7,
    keyword: "ボタンにホバーしたときに色が変わる",
    detail:
      "ボタンを押したときではなく、カーソルを合わせた（ホバーという）時点で既に色が変わってしまっています。",
    code: `.button:hover {
  background-color: red;
}`,
    image: "/anomalyImgs/7.jpeg",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 8,
    keyword: "数か所の配置が崩壊",
    detail: `flexboxという仕組みがよく配置で使われますが、設定の仕方を間違えると思った通りの配置にはなってくれません。`,
    code: `{
      display: flex;
      justify-content: flex-start;
    }`,
    image: "/anomalyImgs/8.jpeg",
    state: "isNotEncountered",
    weight: 3,
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
    image: "/anomalyImgs/9.jpeg",
    state: "isNotEncountered",
    weight: 3,
  },
  {
    id: 10,
    keyword: "ボタンを押すと背景が変わる",
    detail: `ボタンを押すと、背景色が真っ赤になり、文字も黒い不気味なページになってしまいます。`,
    code: `.buttonPushBgcolorAnomaly{
  color: black;
  background-color: #b91c1c;
}`,
    image: "/anomalyImgs/10.jpeg",
    state: "isNotEncountered",
    weight: 6,
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
    image: "/anomalyImgs/11.jpeg",
    state: "isNotEncountered",
    weight: 3,
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
    image: "/anomalyImgs/12.jpeg",
    state: "isNotEncountered",
    weight: 6,
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
    image: "/anomalyImgs/13.png",
    state: "isNotEncountered",
    weight: 6,
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
    image: "/anomalyImgs/14.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 15,
    keyword: "URLがおかしい",
    detail: `URLがとんでもないことになっています。`,
    code: `
(Javascriptのコード)
if (stageId === 15) {
  navigate("/引き返せ引き返せ引き返せ引き返せ引き返せ引き返せ");
}`,
    image: "/anomalyImgs/15.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 16,
    keyword: "文字化け",
    detail: `ようこそにカーソルを合わせると文字化けします。`,
    code: `<div className="w-[400px] inline-block group">
  <span className="group-hover:hidden">ようこそ</span>
  <span className={"hidden text-6xl group-hover:block"}>繧医≧縺薙◎</span>
</div>`,
    image: "/anomalyImgs/16.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 17,
    keyword: "大文字になる",
    detail: `CSSのコードが大文字になってしまいます。`,
    code: `text-transform: uppercase;`,
    image: "/anomalyImgs/17.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 18,
    keyword: "JavaScriptの文字が変化",
    detail: `JavaScriptの文字がTypeScriptになっています。TypeScriptは実際にある言語でJavaScriptに「型」の仕組みを追加した言語です。`,
    code: `<dt className="font-bold text-2xl text-[orangered]">
            TypeScript
          </dt>`,
    image: "/anomalyImgs/18.png",
    state: "isNotEncountered",
    weight: 6,
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
    image: "/anomalyImgs/19.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 20,
    keyword: "次へ →ボタンが変化",
    detail: `次へ →ボタンが０番へ →ボタンになっています`,
    code: `<span className="block group-hover:hidden">次へ →</span>
            <span className="hidden group-hover:block">０番へ →</span>`,
    image: "/anomalyImgs/20.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 21,
    keyword: "スクロールを引き返すと文字が変化",
    detail: `下スクロールをして画面外から出た文字を、もう一度見にいくと変化します。`,
    code: `    const handleScroll = () => {
      const $elms = changeWhenScrollingBackRefs.map((ref) => ref.current);
      $elms.forEach(($elm) => {
        if (!$elm) return;
        const i = $elms.indexOf($elm);
        if ($elm.getBoundingClientRect().bottom < 0 && !replacedFlags[i]) {
          $elm.textContent = "👁️".repeat($elm.textContent.length);
          replacedFlags[i] = true;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };`,
    image: "/anomalyImgs/21.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 22,
    keyword: "いろいろ回転する",
    detail: `画面上にあるあらゆるものが回転します`,
    code: `@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate {
  display: inline-block;
  animation: rotate 2s linear infinite;
}`,
    image: "/anomalyImgs/22.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 23,
    keyword: "画像が増殖",
    detail: `画像が画面いっぱいに増殖しています。`,
    code: `function Irasutoya({
      top,
      left,
      rotationAngle,
      scale}:{
        top: number;
        left: number;
        rotationAngle: number;
        scale: number;
      }){
        const style: CSSProperties = {
        position: 'absolute',
        top: top,
        left: left,
        transform: ‘rotate(＄{rotationAngle}deg) scale(＄{scale})‘,
        zIndex: 0
      };
      return <img src="/image.png" style={style} className="w-40 h-20 grayscale" />;
      }`,
    image: "/anomalyImgs/23.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 24,
    keyword: "謎の文字列が隠れている",
    detail: `選択すると謎の文字列が現れます。`,
    code: `
    -index.html-
    <p className="secret whitespace-pre">
    —— ■■■■■ ——
    ■■ : ■■ ■■■■■://■■■■■.■■■■■■.■■■
    ■■■■■■■■■■
    ■■■■■■■■■■■■■■■■■■</p>
    
    -style.css-
    .secret {
      color: transparent;
    }

    .secret::selection {
      color: red; /* 範囲選択時に表示される色 */
    }
`,
    image: "/anomalyImgs/24.png",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 25,
    keyword: "偽ゴール",
    detail: `8番でないのにゴールに行けると言ってきます。`,
    code: `if (stageId === 25) return <FakeEnd />;`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 26,
    keyword: "勝手にスクロール",
    detail: `スクロールしないと上に戻されます。`,
    code: `  let scrollTimeout: ReturnType<typeof setTimeout>;

  function handleScroll() {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000); 
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 27,
    keyword: "怖い広告",
    detail: `ut.code();の広告が怖くなっています。`,
    code: ``,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 28,
    keyword: "マウスカーソルの形が変わる",
    detail: `ボタンにマウスカーソルを合わせるとカーソルの形状が禁止の形になります`,
    code: `
    <button
      className={"cursor-not-allowed"}
    >
      Click me!
    </button>
`,
    image: "",
    state: "isNotEncountered",
    weight: 3,
  },
  {
    id: 29,
    keyword: "画像がどんどんおおきくなる",
    detail: `画像が徐々に大きくなっていきます。`,
    code: `
    <img
      src="/image.png"
      className={"scale-[10] duration-[60000ms]"}
    ></img>
`,
    image: "",
    state: "isNotEncountered",
    weight: 3,
  },
  {
    id: 30,
    keyword: "スクロールバーの色が変",
    detail: `スクロールバーが暗い赤色になっています。`,
    code: `  useEffect(() => {
        if (stageId === 30) {
          document.documentElement.style.setProperty(
            "--scroll-color",
            "linear-gradient(#000 0%, #800 80%, #600 100%)"
          );
          return () => {
            document.documentElement.style.setProperty("--scroll-color", "#666");
          };
        }
      });`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 31,
    keyword: "画面が割れる",
    detail: `画面にいきなりヒビが入ります。`,
    code: `          <img
            src="/crack.png"
            style={{
              position: "fixed",
              top: "40%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              height: "500px",
              width: "700px",
              display: \`\${crackShow[0]}\`,
              pointerEvents: "none",
              zIndex: "5",
            }}
            className={\`\${crackShow[1]}\`}
          />`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 32,
    keyword: "画面が揺れる",
    detail: `画面が一瞬揺れます。`,
    code: `
    @keyframes shakeAfter3s {
  20% {
    margin: 30px 0 0 60px;
  }
  40% {
    margin: 0;
  }
  55% {
    margin: 60px 0 0 20px;
  }
  70% {
    margin: 0;
  }
  85% {
    margin: 10px 0 0 20px;
  }
  100% {
    margin: 0;
  }
}
  .shake-after-3s {
  animation: shakeAfter3s 250ms linear;
  animation-delay: 3s;
}`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 33,
    keyword: "ローマ数字になってる",
    detail: `左上の進行度の数字がローマ数字になっています`,
    code: `
    <span>I</span>
`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 34,
    keyword: "カウントダウン",
    detail: `一定以上スクロールするとカウントダウンが始まります。`,
    code: `
    useEffect(() => {
        if (stageId !== 34) return;
    
        const timer = setInterval(() => {
          if (countdown.current) {
            const pageNumEle = document.getElementById("pageNumber");
            const pageTitleEle =document.getElementById("pageTitle");
            if(pageNumEle && pageTitleEle){
              pageNumEle.textContent = String(countRef.current)        //カウントダウンを表示
              pageNumEle.style.fontSize = "120px";
              pageNumEle.style.color = "red";
              pageTitleEle.style.display = "none";
            };
    
            if (countRef.current <= 0){    //強制的にリセット
              chasing.current = false;
              countdown.current = false;
              if (imgRef.current) {
                imgRef.current.style.position = "";
                imgRef.current.style.left = "";
                imgRef.current.style.top = "";
              }
              stages.filter((s) => s.id === stageId)[0].state =
                "isNotDetected";
              localStorage.setItem("pageNum", "0");
              navigate("/game");
            };
    
            countRef.current -= 1;
          };
        }, 1000);    //1秒ずつ行う
    
        return () => {
          window.removeEventListener("scroll",handleCountdown);
          clearInterval(timer)
        };
      });
`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 35,
    keyword: "要素がない",
    detail: `HTML、CSS、JavaScriptの説明が書いてあった要素がなくなっています。`,
    code: `
    {isLiElementShow && (                         //isLiElementShowがtrueなら見える、falseなら描画されない
      <ul className={"space-y-6 flex flex-col"}>
        <li
          className={"p-4 border border-gray-600 rounded-lg"}
        >
          ...
`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
  {
    id: 36,
    keyword: "ファビコン変化",
    detail: `ファビコンとは、ブラウザのタブにあるアイコンのことです。普段は数字の「8」のアイコンですが、横向きの「8」になってしまっています。`,
    code: `  useEffect(() => {
        const favicon = document.querySelector("link[rel='icon']");
        if (stageId === 36 && favicon instanceof HTMLLinkElement)
          favicon.href = "/favicon (1).ico";
    
        return () => {
          if (favicon instanceof HTMLLinkElement) favicon.href = "/favicon.ico";
        };
      }, [stageId]);`,
    image: "",
    state: "isNotEncountered",
    weight: 6,
  },
];
