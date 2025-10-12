import { useNavigate } from "react-router";
import type { Route } from "../+types/root";

export default function Game({ params }: Route.LoaderArgs) {
  const id = Number(params.id);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("../../")}>ゲーム中断</button>
      <div>ゲーム画面{id}</div>
      <button disabled={id === 0} onClick={() => navigate(`/game/${id - 1}`)}>
        戻る
      </button>
      <button onClick={() => navigate(id === 8 ? "/end" : `/game/${id + 1}`)}>
        次へ
      </button>
    </div>
  );
}
