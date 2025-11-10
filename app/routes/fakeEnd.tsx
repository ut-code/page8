"use client";
import { useNavigate } from "react-router";
import { updateWeight0 } from "~/random";
import { stages, type StageType } from "~/stages";

export default function FakeEnd() {
  const navigate = useNavigate();
  const pageNum = Number(localStorage.getItem("pageNum")); // ページ番号0~8

  return (
    <div className="text-white opacity-0 animate-fadeIn">
      <div
        className="top-0 fixed bg-[#091b0c] border-b-2 border-gray-500 w-full h-20 flex items-center justify-between px-8"
        style={{ zIndex: 2 }}
      >
        <span>
          <span className="text-6xl text-yellow-400">{pageNum}. </span>
          <span className={"text-4xl"}>おつかれさま</span>
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
          const currentAnomaly = stages.find((s) => s.id === 25) as StageType;
          if (currentAnomaly.state !== "isDetected") {
            currentAnomaly.state = "isDetectedNew";
          }
          currentAnomaly.weight = 0;
          updateWeight0(stages);
          if (pageNum === 8) {
            navigate("/end");
          } else {
            localStorage.setItem("pageNum", `${pageNum + 1}`);
            navigate("/game");
          }
        }}
      >
        ← 戻る
      </button>
      <div className="text-center">
        <div className={`text-4xl mt-40 speechBubble`}>
          おめでとう！ <br />
          このボタンをクリックしたらクリア！
        </div>
        <img
          src="/image.png"
          className={`w-40 m-auto`}
          style={{
            zIndex: "1",
            pointerEvents: "none",
          }}
        ></img>
        <button
          className="bg-[orangered] text-5xl p-3 border-2 border-black cursor-pointer mt-10"
          onClick={() => {
            stages.filter((s) => s.id === 25)[0].state = "isNotDetected";
            localStorage.setItem("pageNum", "0");
            navigate("/game");
          }}
        >
          次へ →
        </button>
      </div>
    </div>
  );
}
