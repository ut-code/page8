import { useNavigate } from "react-router";

/*export default function end() {
  const navigate = useNavigate();
  return (
    <div>
      <div>終了画面</div>
      <button onClick={() => navigate("../")}>ホームに戻る</button>
    </div>
  );
}*/

function StatsPanel({
  clearTime,
  foundCount,
  notFoundCount
}: {
  clearTime: number;
  foundCount: number;
  notFoundCount: number;
}){
  return(
    <div className="mb-16 text-center text-xl">
      <div className="mb-4">クリアタイム : {Math.floor(clearTime/60)}分{clearTime%60}秒</div>
      <div className="mb-4">発見した異変 : {foundCount}個</div>
      <div>未発見の異変 : {notFoundCount}個</div>
    </div>
  )
}

function AnomalyList({
  anomalies,
}: {
  anomalies: { id: number; keyword: string; path: string }[];
}){
  return(
    <div className="max-w-[1056px] m-auto mb-16">
      <h2 className="p-2 text-2xl">発見した異変の一覧</h2>
      <div className="grid grid-cols-4 gap-8 justify-center">
        {anomalies.map((anomaly)=>(
          <Card
            keyword={anomaly.keyword}
            path = {anomaly.path}
          />
        ))}
      </div>
    </div>
  )
}
  
function Card({
  keyword,
  path
}: {
  keyword: string;
  path: string;
}){

  const navigate = useNavigate();
  return (
    <a onClick={()=>navigate("../")}>{/*ここにpathを入れる*/}
      <div className="border rounded-xl w-[240px] h-[160px] bg-[#F0F0F0] text-black flex flex-col items-center justify-center gap-4 cursor-pointer">
        <div>{keyword}</div>
        <div>詳細を見る</div>
      </div>
    </a>
  )
}

export default function End(){
  const navigate = useNavigate();

  const anomalies = [
  { id: 1, keyword: "ボタン無反応", path: "hoge" },
  { id: 2, keyword: "レイアウト崩れ", path: "hoge" },
  { id: 3, keyword: "リンク飛び先誤り", path: "hoge" },
  { id: 4, keyword: "フォントが変わる", path: "hoge" },
  { id: 5, keyword: "背景色が不自然", path: "hoge" },
  { id: 6, keyword: "画像が表示されない", path: "hoge" },
  { id: 7, keyword: "カーソル形状異常", path: "hoge" },
  { id: 8, keyword: "テキスト重なり", path: "hoge" },
  { id: 9, keyword: "スクロール異常", path: "hoge" },
  { id: 10, keyword: "アニメーション暴走", path: "hoge" },
  { id: 11, keyword: "メニュー非表示", path: "hoge" },
  { id: 12, keyword: "ボタン位置ずれ", path: "hoge" },
  { id: 13, keyword: "画像サイズ不揃い", path: "hoge" },
];//一例


  return(
    <div className="w-full min-h-screen bg-[#091b0c] text-white font-serif">

      <header className="mb-8">
        <h1 className="p-2 underline decoration-[#FF4500] text-3xl">8番ページ</h1>
      </header>

      <div className="mb-16 text-center">
        <h2 className="mb-8 text-3xl">
          <span className="underline decoration-[#FF4500]">8/8</span><br/>
          クリアおめでとう
        </h2>
        <div>
          8番ページからの脱出おめでとう。<br/>
          君たちが目にした異変はすべてCSSによって引き起こされたものだ。<br/>
          <br/>
          もしも、まだ異変をすべて見つけ切れていないのならば<br/>
          今一度、異変の正体を確かめてみよう。<br/>
          <br/>
          異変をすべて見つけ、異変マスターに、そしてCSSマスターになるのだ。
        </div>
      </div>

      <StatsPanel
        clearTime = {760}
        foundCount = {8}
        notFoundCount = {12}
      />

      <AnomalyList
        anomalies = {anomalies}
      />

      <div className="text-center">
        <button className="mb-16 bg-[#FF4500] text-2xl cursor-pointer hover:opacity-80" onClick={() => navigate("../")}>もう一度遊ぶ</button>
      </div>

    </div>
  )
}