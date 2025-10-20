import { useNavigate } from "react-router";
import type { Route } from "./+types/home";

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
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#CCCCCC",
          fontSize: "120px",
          position: "relative",
          top: "150px",
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
            position: "relative",
            fontFamily: "serif",
            fontSize: "40px",
            color: "orangered",
            top: "280px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/game/0")}
        >
          ゲームスタート
        </button>
      </div>
    </div>
  );
}
