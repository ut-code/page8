import { useNavigate } from "react-router";
import type { Route } from "./+types/home";
import { stages } from "~/stages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Page 8" },
    {
      name: "description",
      content: 'A website game inspired by the game "The Exit 8."',
    },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#091b0c",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        paddingTop: "100px",
        opacity: "0",
        animation: "fadeIn 0.5s ease-out forwards",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#CCCCCC",
          fontSize: "120px",
          fontFamily: "serif",
          textDecoration: "underline",
          textDecorationColor: "gray",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "219px 200px 60px",
            gridTemplateRows: "80px 80px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "137px",
              gridColumn: "1/2",
              gridRow: "1/3",
            }}
          >
            8番
          </div>
          <div
            style={{
              fontSize: "65px",
              gridColumn: "2/3",
              gridRow: "1/2",
            }}
          >
            ページ
          </div>
          <div
            style={{
              fontSize: "80px",
              gridColumn: "2/3",
              gridRow: "2/3",
              justifySelf: "center",
            }}
          >
            Page
          </div>
          <div
            style={{
              fontSize: "170px",
              gridColumn: "3/4",
              gridRow: "1/3",
            }}
          >
            8
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontFamily: "serif",
            fontSize: "24px",
            color: "white",
            backgroundColor: "orangered",
            padding: "0.75rem",
            border: "2px black solid",
            cursor: "pointer",
          }}
          onClick={() => {
            const startTime = new Date().getTime().toString();
            localStorage.setItem("startTime", startTime);
            localStorage.setItem("pageNum", "0");
            stages.forEach((stage) => {
              if (stage.id != 0 && stage.state === "isDetectedNew") {
                //前回新しく見つけた異変を引き継ぎ、Newを外す.
                stage.state = "isDetected";
              }
            });
            navigate("/games"); //fitstVisitScreen.tsxに飛びます。
          }}
        >
          ゲームスタート
        </button>
      </div>
      <div className="flex justify-center">
        <div
          className="w-[500px] mb-8 p-4 bg-white text-black border-[6px] border-gray-500 box-border"
          style={{
            borderImage: "linear-gradient(145deg, #999999, #777777, #555555) 1",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          <h2 className="mb-4 text-3xl text-center text-white">
            <span className="p-1 bg-black">ご案内 Guide</span>
          </h2>
          <ul className="space-y-4">
            <li>
              <p className="font-bold text-[16px]">
                異変を絶対に見逃さないこと
              </p>
              <p className="font-thin text-[12px]">
                Never overlook any anomalies.
              </p>
            </li>
            <li>
              <p className="font-bold text-[16px]">
                異変を見つけたらすぐに前のページに戻ること
              </p>
              <p className="font-thin text-[12px]">
                If you find any anomalies, go back immediately to the previous
                page.
              </p>
            </li>
            <li>
              <p className="font-bold text-[16px]">
                異変が見つからなかったら次のページに進むこと
              </p>
              <p className="font-thin text-[12px]">
                If you don't find any anomalies, move on to the next page.
              </p>
            </li>
            <li>
              <p className="font-bold text-[16px]">8番ページから脱出すること</p>
              <p className="font-thin text-[12px]">Escape from Page8</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
