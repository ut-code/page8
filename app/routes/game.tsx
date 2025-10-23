"use client";
import {
  useState,
  useEffect,
  type ComponentType,
  type ReactElement,
} from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { stages, type StageType } from "~/stages";

function Example({
  title,
  description,
  code,
  element,
}: {
  title: string;
  description: string;
  code: string;
  element: ReactElement;
}) {
  return (
    <div className="mt-5 mb-5 ml-20 mr-20">
      <div className="text-2xl underline">{title}</div>
      <div className="flex h-70">
        <span className="w-1/2 m-4">{description}</span>
        <span className="w-1/2 flex flex-col">
          <code className="whitespace-pre-wrap p-4 bg-neutral-900 border border-gray-600 rounded-lg h-2/3 m-2 text-[0.8rem]">
            {code.trim()}
          </code>
          <div className="border border-gray-600 rounded-lg bg-white h-1/3 m-2 flex justify-center items-center">
            {element}
          </div>
        </span>
      </div>
    </div>
  );
}

export default function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageNum = Number(localStorage.getItem("pageNum")); // ページ番号0~8
  // const [stageInfo, setStageInfo] = useState<StageType>();
  // const [PageComponent, setPageComponent] = useState<ComponentType<{
  //   pageNum: number;
  //   stageId: number;
  // }> | null>(null);
  const stageId = Math.floor(Math.random() * stages.length); // ページの種類のID
  // useEffect(() => {
  //   const currentStage = stages.filter((s) => s.id === stageId)[0];
  //   setStageInfo(currentStage);
  //   (async () => {
  //     try {
  //       if (!currentStage)
  //         throw Error(`currentStage is null. stageId is: ${stageId}`);
  //       const {
  //         Page,
  //       }: { Page: ComponentType<{ pageNum: number; stageId: number }> } =
  //         await import(currentStage.path);
  //       setPageComponent(() => Page);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, [location.key]);
  // if (!PageComponent || stageInfo === undefined) {
  //   return <div>エラー！部員をお呼びください。</div>;
  // }
  // return <PageComponent pageNum={pageNum} stageId={stageId} />;
  const color = stageId === 1 ? "text-red-500" : "";
  const backgroundColor = stageId === 3 ? "bg-[#FFF2B2]" : "";

  return (
    <div className={`text-white ${backgroundColor}`}>
      <div className="top-0 fixed bg-[#091b0c] border-b-2 border-gray-500 w-full h-20 flex items-center justify-between px-8">
        <span>
          <span className="text-6xl text-yellow-400">{pageNum}. </span>
          <span className={`text-4xl ${color}`}>ようこそ</span>
        </span>

        <button
          className="bg-red-500 text-2xl p-3 border-2 border-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          ゲーム中断
        </button>
      </div>
      <button
        className="bg-[orangered] text-2xl p-3 border-2 border-black mt-30 ml-10 cursor-pointer"
        onClick={() => {
          if (stageId === 0) {
            localStorage.setItem("pageNum", "0");
            navigate("/game");
          } else {
            stages.filter((s) => s.id === stageId)[0].state = "isDetected";
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
      <div className="w-4/5 ml-auto mr-auto">
        <div className="font-bold text-center text-8xl underline decoration-[orangered]">
          ようこそ
        </div>
        <div className="mt-10 mb-10">
          このゲームでは、主に「CSS」という言語を用いて、異変を再現しています！
          CSSについて、ここで軽く学んでおきましょう。
        </div>
        <div className="bg-[orangered] h-0.5"></div>
        <div className="mt-10 mb-10">
          <div className="mb-5">
            ウェブ開発では、主に以下の3つの言語が使われています。
          </div>
          <ul className="space-y-6">
            <li className="p-4 border border-gray-600 rounded-lg">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">HTML</dt>
                <dd className="mt-1 text-lg">ウェブページの骨格を作る言語。</dd>
              </dl>
            </li>
            <li className="p-4 border border-gray-600 rounded-lg">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">CSS</dt>
                <dd className="mt-1 text-lg">
                  ウェブページの見た目を決める言語。
                </dd>
              </dl>
            </li>
            <li className="p-4 border border-gray-600 rounded-lg">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">
                  JavaScript
                </dt>
                <dd className="mt-1 text-lg">
                  ウェブページに動きをつけたり、複雑な処理をさせたりする言語。
                </dd>
              </dl>
            </li>
          </ul>
          <div className="mt-10">
            CSSは、ウェブページのデザインを整える上で欠かせません。以下で、CSSの具体的な例を見ていきましょう。
          </div>
        </div>
        <div className="text-4xl underline decoration-[orangered]">
          CSS利用例
        </div>
        <Example
          title="1. 文字のカスタマイズ"
          description="右の例では、colorという属性で文字色を、font-sizeという属性で文字の大きさを、font-weightという属性で文字の太さを指定しています。他にも、下線を引いたり、フォントを変えたりすることが可能です。"
          code={
            ".text {\n  color: blue;\n  font-size: 60px;\n  font-weight: 800;\n}"
          }
          element={
            <div className="text-[#0000ff] text-6xl font-sans font-extrabold">
              Hello!
            </div>
          }
        />
        <Example
          title="2. ボタンのカスタマイズ"
          description="右の例では、borderで枠線を、box-shadowで影を表現しています。また、.button:activeと書かれた方には、ボタンが押されたときのスタイルを記述できます。ここでは、background-colorでボタンを赤くし、box-shadowにnone(何も無いこと)を指定して影を消しています。"
          code={
            ".button {\n  border: 2px solid black;\n  box-shadow: 2px 2px 5px;\n}\n.button:active {\n  background-color: red;\n  box-shadow: none;\n}"
          }
          element={
            <button className="border-2 border-black shadow-[2px_2px_5px] active:bg-red-500 active:shadow-none font-sans text-black cursor-pointer">
              Click me!
            </button>
          }
        />
        <Example
          title="3. 画像のカスタマイズ"
          description="右の例では、widthとheightで画像の大きさを、transformで角度を指定し、filterで画像を白黒にしています。"
          code={
            ".img {\n  width: 200px;\n  height: 100px;\n  transform: rotate(6deg);\n  filter: grayscale(100%);\n}"
          }
          element={
            <img
              src="/image.png"
              className="w-40 h-20 rotate-6 grayscale"
            ></img>
          }
        />
      </div>
      <button
        className="bg-[orangered] text-2xl p-3  border-2 border-black mt-30 float-right mr-10 mb-60 cursor-pointer"
        onClick={() => {
          if (stageId !== 0) {
            stages.filter((s) => s.id === stageId)[0].state = "isNotDetected";
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
  );
}
