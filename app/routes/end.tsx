import { useNavigate } from "react-router";

export default function end() {
  const navigate = useNavigate();
  return (
    <div>
      <div>終了画面</div>
      <button onClick={() => navigate("../")}>ホームに戻る</button>
    </div>
  );
}
