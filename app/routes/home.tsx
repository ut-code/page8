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
    <div>
      <div>8番ページ(仮)</div>
      <button onClick={() => navigate("/game/0")}>ゲームスタート</button>
    </div>
  );
}
