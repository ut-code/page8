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

export default function End(){
  const navigate = useNavigate();
  return(
    <div className="w-full min-h-screen bg-[#091b0c] text-white font-serif">

      <header className="mb-8">
        <h1 className="p-2 underline decoration-[#FF4500] text-3xl">8番ページ</h1>
      </header>

      <div className="mb-16 text-center">
        <h2 className="mb-3 text-3xl">
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

      <div className="mb-16 text-center">
        <div className="mb-4">クリアタイム : 12分34秒</div>
        <div className="mb-4">発見した異変 : 8個</div>
        <div>未発見の異変 : 12個</div>
      </div>

      <div className="max-w-[1056px] m-auto mb-16">
        <h2 className="p-2 text-2xl">発見した異変の一覧</h2>
        <div className="grid grid-cols-4 gap-8 justify-center">
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
          <div className="border w-[240px] h-[160px]"></div>
        </div>
      </div>

      <div className="text-center">
        <button className="mb-16 bg-[#FF4500] text-2xl cursor-pointer hover:opacity-80" onClick={() => navigate("../")}>もう一度遊ぶ</button>
      </div>

    </div>
  )
}