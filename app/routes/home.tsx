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
        width: "100vw",
        height: "100vh",
        display:"flex",
        flexDirection:"column",
        gap:"80px",
        paddingTop:"100px",
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
            backgroundColor:"orangered",
            padding:"0.75rem",
            border:"2px black solid",
            cursor: "pointer",
          }}
          onClick={() => {
            const startTime = new Date().getTime().toString();
            console.log(startTime);
            localStorage.setItem("startTime", startTime);
            localStorage.setItem("pageNum", "0");
            stages.forEach((stage) => {
              if (stage.id != 0 && (stage.state === "isDetectedNew")) {//前回新しく見つけた異変を引き継ぎ、Newを外す.
                stage.state = "isDetected";
              }
            });
            navigate("/games");//fitstVisitScreen.tsxに飛びます。
          }}
        >
          ゲームスタート
        </button>
      </div>
      <div style={{
        color:"white",
        display:"flex",
        justifyContent:"center",
      }}>
        <ul>
          <li>
            ・異変を絶対に見逃さないこと
          </li>
          <li>
            ・異変を見つけたらすぐに前のページに戻ること
          </li>
          <li>
            ・異変が見つからなかったら次のページに進むこと
          </li>
          <li>
            ・8番ページから脱出すること
          </li>
        </ul>
      </div>
    </div>
  );
}
