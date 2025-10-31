"use client";
import { createRef, useEffect, type ReactElement, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { stages } from "~/stages";
import EnglishAnomaly from "./englishAnomaly";
import { biasedRandom, updateWeight0 } from "~/random";
import ImageMultiplicationAnomaly from "./imageMultiplicationAnomaly";

function Example({
  title,
  description,
  code,
  element,
  flexboxCollapse,
  capitalizeCode,
}: {
  title: string;
  description: string;
  code: string;
  element: ReactElement;
  flexboxCollapse: string[];
  capitalizeCode: string;
}) {
  return (
    <div className={`mt-5 mb-5 ml-20 mr-20`}>
      <div className={`text-2xl underline`}>{title}</div>
      <div className={`flex h-70`}>
        <span className={`w-1/2 m-4`}>{description}</span>
        <span className={`w-1/2 flex flex-col`}>
          <code
            className={`whitespace-pre-wrap p-4 bg-neutral-900 border border-gray-600 rounded-lg h-2/3 m-2 text-[0.8rem] ${capitalizeCode}`}
          >
            {code.trim()}
          </code>
          <div
            className={`border border-gray-600 rounded-lg bg-white h-1/3 m-2 flex ${flexboxCollapse[1]} items-center`}
          >
            {element}
          </div>
        </span>
      </div>
    </div>
  );
}

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const pageNum = Number(localStorage.getItem("pageNum")); // ページ番号0~8
  const stageId = stages[biasedRandom(stages)].id; // ページの種類のID
  console.log(stageId);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const changeWhenScrollingBackRefs = useRef(
    Array.from({ length: 15 }, () => createRef<HTMLDivElement>())
  ).current;
  const replacedFlags: boolean[] = Array(15).fill(false);

  const x = useRef(0); // 現在位置
  const y = useRef(0);
  const mouseX = useRef(0); // マウス位置
  const mouseY = useRef(0);
  let imgWidthHalf = 0; //画像の左端から右端までの長さの半分
  let imgHightHalf = 0; //画像の上端から下端までの長さの半分

  const chasing = useRef(false);

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
        const dist =
          ((mouseX.current - imgCenterX) ** 2 +
            (mouseY.current - imgCenterY) ** 2) **
          0.5;

        if (dist < 200) {
          chasing.current = true;

          const rect = imgRef.current.getBoundingClientRect();
          x.current = rect.left + window.scrollX + imgWidthHalf;
          y.current = rect.top + window.screenY + imgHightHalf;

          imgRef.current.style.position = "absolute";
          imgRef.current.style.left = `${x.current}px`;
          imgRef.current.style.top = `${y.current}px`;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const speed = 0.05;
    let animId: number;
    const chase = () => {
      if (imgRef.current && chasing.current) {
        x.current += (mouseX.current - x.current) * speed;
        y.current += (mouseY.current - y.current) * speed;

        imgRef.current.style.left = `${x.current - imgWidthHalf}px`;
        imgRef.current.style.top = `${y.current - imgHightHalf}px`;
      }
      animId = requestAnimationFrame(chase);
    };
    chase();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  });

  useEffect(() => {
    if (stageId === 15) {
      navigate("/引き返せ引き返せ引き返せ引き返せ引き返せ引き返せ");
    }
  }, [stageId, navigate]);

  useEffect(() => {
    if (stageId !== 21) return;
    const handleScroll = () => {
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
    };
  });

  // 異変の変数

  let ExampleButtonFunction: (...args: any[]) => void = () => {}; //二つ目のExampleに含まれているボタンに渡す関数を入れるための変数
  let TopButtonFunction: (...args: any[]) => void = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const wrongColorForHello = stageId === 1 ? "text-[green]" : "text-[#0000ff]";
  const irasutoyaImageAngular = stageId === 2 ? "rotate-186" : "rotate-6";
  const backgroundColorSuddenlyToYellow = stageId === 3 ? "bg-[#FFF2B2]" : "";
  const bgColorGraduallyTurningGrey =
    stageId === 4 ? "gradual-grey" : "bg-[#091b0c]";
  if (stageId === 5) {
    ExampleButtonFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = e.currentTarget;
      btn.classList.add("scale-200", "bg-red-500", "duration-300");
      setTimeout(() => {
        btn.classList.remove("scale-200", "bg-red-500", "duration-300");
      }, 600);
    };
  }
  const errorMessageShow =
    stageId === 6 ? ["flex", "show-after-5s"] : ["none", ""];
  const colorChangOnHover = stageId === 7 ? "hover:bg-red-500" : "";
  const flexboxCollapse =
    stageId === 8
      ? ["justify-start", "justify-start"]
      : ["justify-between", "justify-center"];
  const changedTitle = stageId === 9 ? "欢迎" : "ようこそ";
  if (stageId === 10) {
    ExampleButtonFunction = () => {
      const PageWrapper = document.getElementById("PageWrapper");
      const Header = document.getElementById("Header");
      PageWrapper?.classList.add("buttonPushBgcolorAnomaly");
      Header?.classList.add("buttonPushBgcolorAnomaly");
    };
  }
  if (stageId === 11) {
    return <EnglishAnomaly />;
  }
  const LiElementHTMLOrder = stageId === 12 ? 2 : 0;
  if (stageId === 13) {
    TopButtonFunction = () => {
      const nextBtn = document.getElementById("nextBtn")!;
      nextBtn.style.marginBottom = "100px";

      const topBtn = document.getElementById("topBtn")!;
      const parent = topBtn.offsetParent as HTMLElement;

      const rect = topBtn.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const startTop = rect.top - parentRect.top - 100;

      topBtn.style.position = "absolute";
      topBtn.style.top = `${startTop}px`;

      topBtn.style.transition = "top 1s ease-in-out";

      const stopTop = 200;

      requestAnimationFrame(() => {
        topBtn.style.top = `${stopTop}px`;
      });
    };
  }
  if (stageId === 15) {
    return null;
  }
  const hoverAnomaly =
    stageId === 16 ? ["group-hover:hidden", "group-hover:block"] : ["", ""];
  const capitalizeCode = stageId === 17 ? "uppercase" : "";
  const textJavaOrType = stageId === 18 ? "Type" : "Java";
  const programLanguageKind = stageId === 19 ? "Tailwind CSS" : "CSS";
  const rotate = stageId === 22 ? "animate-rotate" : "";

  if(stageId === 23) return <ImageMultiplicationAnomaly/>;

  return (
    <div
      key={location.key}
      className={`text-white relative opacity-0 animate-fadeIn`}
    >
      <div
        className={`${bgColorGraduallyTurningGrey} ${backgroundColorSuddenlyToYellow}`}
        id="PageWrapper"
      >
        <div
          className={`top-0 fixed ${bgColorGraduallyTurningGrey} ${backgroundColorSuddenlyToYellow} bg-[#091b0c] border-b-2 border-gray-500 w-full h-20 flex items-center ${flexboxCollapse[0]} px-8`}
          style={{ zIndex: 2 }}
          id="Header"
        >
          <span className={`${rotate}`}>
            <span className={`text-6xl text-yellow-400`}>{pageNum}. </span>
            <span className={`text-4xl`}>{changedTitle}</span>
          </span>

          <button
            className={`bg-red-500 text-2xl p-3 border-2 border-black cursor-pointer ${rotate}`}
            onClick={() => navigate("/")}
          >
            ゲーム中断
          </button>
        </div>
        <div className={`flex justify-start mr-10 mb-10`}>
          <button
            className={`bg-[orangered] text-2xl p-3 border-2 border-black mt-30 ml-10 cursor-pointer`}
            onClick={() => {
              chasing.current = false;
              if (imgRef.current) {
                imgRef.current.style.position = "";
                imgRef.current.style.left = "";
                imgRef.current.style.top = "";
              }
              if (stageId === 0) {
                localStorage.setItem("pageNum", "0");
                navigate("/game");
              } else {
                stages.filter((s) => s.id === stageId && s.state !== "isDetected")[0].state = "isDetectedNew";
                stages.filter((s) => s.id === stageId)[0].weight = 0;
                updateWeight0(stages);
                if (pageNum === 8) {
                  navigate("/end");
                } else {
                  localStorage.setItem("pageNum", `${pageNum + 1}`);
                  navigate("/game");
                }
              }
            }}
          >
            ← 戻る
          </button>
        </div>
        <div className={`w-4/5 ml-auto mr-auto`}>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "100vh",
              width: "100vw",
              backgroundColor: "blue",
              color: "black",
              display: `${errorMessageShow[0]}`,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              pointerEvents: "none",
              opacity: "0.8",
              zIndex: "5",
            }}
            className={`${errorMessageShow[1]}`}
          >
            {
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "black",
                  color: "white",
                  padding: "40px",
                  fontSize: "2rem",
                  boxShadow: "0 0 40px red",
                  fontFamily: "Share Tech Mono, monospace",
                  justifyContent: "center",
                }}
              >
                An unexpected error occurred <br />
                <br />
                details:
                <br />
                Turn back Turn back Turn back Turn back Turn back Turn back Turn
                back Turn back Turn back Turn back Turn back Turn back Turn back
                Turn back Turn back Turn back Turn back Turn back
              </div>
            }
          </div>
          <div
            className={`font-bold text-center text-8xl underline decoration-[orangered] ${rotate}`}
          >
            <div className={`w-[400px] inline group`}>
              <div
                className={`${hoverAnomaly[0]}`}
                ref={changeWhenScrollingBackRefs[0]}
              >
                {changedTitle}
              </div>
              <div className={`hidden text-8xl ${hoverAnomaly[1]}`}>
                繧医≧縺薙◎
              </div>
            </div>
          </div>
          <div className={`mt-10 mb-10`} ref={changeWhenScrollingBackRefs[1]}>
            このゲームでは、主に「CSS」という言語を用いて、異変を再現しています！
            CSSについて、ここで軽く学んでおきましょう。
          </div>
          <div className={`bg-[orangered] h-0.5`}></div>
          <div className={`mt-10 mb-10`}>
            <div className={`mb-5`} ref={changeWhenScrollingBackRefs[2]}>
              ウェブ開発では、主に以下の3つの言語が使われています。
            </div>
            <ul className={`space-y-6 flex flex-col`}>
              <li
                className={`p-4 border border-gray-600 rounded-lg order-${LiElementHTMLOrder} ${rotate}`}
              >
                <dl>
                  <dt className={`font-bold text-2xl text-[orangered]`}>
                    <div ref={changeWhenScrollingBackRefs[3]}>HTML</div>
                  </dt>
                  <dd className={`mt-1 text-lg`}>
                    <div ref={changeWhenScrollingBackRefs[4]}>
                      ウェブページの骨格を作る言語。
                    </div>
                  </dd>
                </dl>
              </li>
              <li
                className={`p-4 border border-gray-600 rounded-lg order-1 ${rotate}`}
              >
                <dl>
                  <dt className={`font-bold text-2xl text-[orangered]`}>
                    <div ref={changeWhenScrollingBackRefs[5]}>CSS</div>
                  </dt>
                  <dd className={`mt-1 text-lg`}>
                    <div ref={changeWhenScrollingBackRefs[6]}>
                      ウェブページの見た目を決める言語。
                    </div>
                  </dd>
                </dl>
              </li>
              <li
                className={`p-4 border border-gray-600 rounded-lg order-3 ${rotate}`}
              >
                <dl>
                  <dt className={`font-bold text-2xl text-[orangered]`}>
                    <div ref={changeWhenScrollingBackRefs[7]}>
                      {textJavaOrType}Script
                    </div>
                  </dt>
                  <dd className={`mt-1 text-lg`}>
                    <div ref={changeWhenScrollingBackRefs[8]}>
                      ウェブページに動きをつけたり、複雑な処理をさせたりする言語。
                    </div>
                  </dd>
                </dl>
              </li>
            </ul>
            <div className={`mt-10`} ref={changeWhenScrollingBackRefs[9]}>
              CSSは、ウェブページのデザインを整える上で欠かせません。以下で、CSSの具体的な例を見ていきましょう。
            </div>
          </div>
          <div
            className={`text-4xl underline decoration-[orangered] ${rotate}`}
            ref={changeWhenScrollingBackRefs[10]}
          >
            CSS利用例
          </div>
          <Example
            title="1. 文字のカスタマイズ"
            description="右の例では、colorという属性で文字色を、font-sizeという属性で文字の大きさを、font-weightという属性で文字の太さを指定しています。他にも、下線を引いたり、フォントを変えたりすることが可能です。"
            code={(() => {
              if (programLanguageKind === "CSS") {
                return ".text {\n  color: blue;\n  font-size: 60px;\n  font-weight: 800;\n}";
              } else {
                return "className=\n'text-blue-500\n text-[60px]\n font-extrabold'\n";
              }
            })()}
            element={
              <div
                className={`${wrongColorForHello} text-6xl font-sans font-extrabold ${rotate}`}
              >
                Hello!
              </div>
            }
            flexboxCollapse={flexboxCollapse}
            capitalizeCode={capitalizeCode}
          />
          <Example
            title="2. ボタンのカスタマイズ"
            description="右の例では、borderで枠線を、box-shadowで影を表現しています。また、.button:activeと書かれた方には、ボタンが押されたときのスタイルを記述できます。ここでは、background-colorでボタンを赤くし、box-shadowにnone(何も無いこと)を指定して影を消しています。"
            code={(() => {
              if (programLanguageKind === "CSS") {
                return ".button {\n  border: 2px solid black;\n  box-shadow: 2px 2px 5px;\n}\n.button:active {\n  background-color: red;\n  box-shadow: none;\n}";
              } else {
                return "className='\n border-2 border-black\n shadow-[2px_2px_5px]\n active:\n bg-red-500\n active:shadow-none'\n";
              }
            })()}
            element={
              <button
                className={`border-2 border-black shadow-[2px_2px_5px] ${colorChangOnHover} active:bg-red-500 active:shadow-none font-sans text-black cursor-pointer ${rotate}`}
                onClick={ExampleButtonFunction}
              >
                Click me!
              </button>
            }
            flexboxCollapse={flexboxCollapse}
            capitalizeCode={capitalizeCode}
          />
          <Example
            title="3. 画像のカスタマイズ"
            description="右の例では、widthとheightで画像の大きさを、transformで角度を指定し、filterで画像を白黒にしています。"
            code={(() => {
              if (programLanguageKind === "CSS") {
                return ".img {\n  width: 200px;\n  height: 100px;\n  transform: rotate(6deg);\n  filter: grayscale(100%);\n}";
              } else {
                return "className=\n 'w-[200px]\n h-[100px]\n rotate-[6deg]\n grayscale'\n";
              }
            })()}
            element={
              <img
                ref={imgRef}
                src="/image.png"
                className={`w-40 h-20 ${irasutoyaImageAngular} grayscale absolute ${rotate}`}
                style={{
                  zIndex: "1",
                  pointerEvents: "none",
                }}
              ></img>
            }
            flexboxCollapse={flexboxCollapse}
            capitalizeCode={capitalizeCode}
          />
        </div>
        <div className={`flex justify-end mr-10`} id="nextBtn">
          <button
            className={`bg-[orangered] text-2xl p-3 border-2 border-black cursor-pointer mb-80`}
            onClick={() => {
              chasing.current = false;
              if (imgRef.current) {
                imgRef.current.style.position = "";
                imgRef.current.style.left = "";
                imgRef.current.style.top = "";
              }
              if (stageId !== 0) {
                stages.filter((s) => s.id === stageId)[0].state =
                  "isNotDetected";
                localStorage.setItem("pageNum", "0");
                navigate("/game");
              } else {
                if (pageNum === 8) {
                  navigate("/end");
                } else {
                  localStorage.setItem("pageNum", `${pageNum + 1}`);
                  navigate("/game");
                }
              }
            }}
          >
            次へ →
          </button>
        </div>
        <div className={`flex ml-10 ${rotate}`}>
          <button
            className={`bg-[orangered] text-2xl p-3 border-2 border-black cursor-pointer mb-10`}
            onClick={TopButtonFunction}
            id="topBtn"
          >
            Topへ戻る
          </button>
        </div>
      </div>
    </div>
  );
}
