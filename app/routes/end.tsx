import { useNavigate } from "react-router";
import { useState } from "react";
import { stages } from "~/stages";
type StageType = {
  id: number;
  path: string;
  keyword: string;
  detail: string;
  code: string;
  image: string;
  state: "isDetected" | "isNotDetected" | "isNotEncountered";
};

function StatsPanel({
  clearTime,
  anomalies
}: {
  clearTime: number;
  anomalies: StageType[]
}){

  const foundCount = anomalies.filter((anomaly) => anomaly.state === "isDetected").length;
  const notFoundCount = anomalies.filter((anomaly) => anomaly.state === "isNotDetected").length;
  const notEncounteredCount = anomalies.filter((anomaly) => anomaly.state === "isNotEncountered").length;

  return(
  <div className="mb-16 text-center text-xl">
    <p className="mb-8 text-2xl"><span className="border-b-3 border-[#FF4500] pb-1">プレイ結果</span></p>
    <dl>
      <div className="mb-4 flex justify-center items-center space-x-2">
        <dt>クリアタイム</dt>
        <span>:</span>
        <dd>{Math.floor(clearTime / 60)}分{clearTime % 60}秒</dd>
      </div>
      <div className="mb-4 flex justify-center items-center space-x-2">
        <dt>発見した異変</dt>
        <span>:</span>
        <dd>{foundCount}個</dd>
      </div>
      <div className="mb-4 flex justify-center items-center space-x-2">
        <dt>未発見の異変</dt>
        <span>:</span>
        <dd>{notFoundCount}個</dd>
      </div>
      <div className="mb-4 flex justify-center items-center space-x-2">
        <dt>遭遇しなかった異変</dt>
        <span>:</span>
        <dd>{notEncounteredCount}個</dd>
      </div>
    </dl>
  </div>

  )
}

function AnomalyList({
  anomalies,
}: {
  anomalies: StageType[];
}){
  const [selectedAnomaly, setSelectedAnomaly] = useState<StageType | null>(null);
  console.log(selectedAnomaly);

  const detectedAnomalies = anomalies.filter((anomaly) => anomaly.state === "isDetected");
  const notDetectedAnomalies = anomalies.filter((anomaly) => anomaly.state === "isNotDetected");
  const notEncounteredAnomalies = anomalies.filter((anomaly) => anomaly.state === "isNotEncountered");
  return(
    <>
      {detectedAnomalies.length > 0 && (
        <div className="max-w-[1056px] m-auto mb-16">
          <h2 className="p-2 text-2xl"><span className="border-b-3 border-[#FF4500] pb-1">発見した異変の一覧</span></h2>
          <p className="p-2">異変の正体をどうぞ確かめていってください</p>
          <div className="grid grid-cols-4 gap-8 justify-center">
            {detectedAnomalies.map((anomaly)=>(
              <DetectedCard
                key = { anomaly.id}
                keyword={anomaly.keyword}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setSelectedAnomaly(anomaly);
                console.log("Selected Anomaly:", anomaly);}}
              />
            ))}
          </div>
        </div>
      )}

        {notDetectedAnomalies.length > 0 && (
          <div className="max-w-[1056px] m-auto mb-16">
            <h2 className="p-2 text-2xl">
              <span className="border-b-3 border-[#FF4500] pb-1">
                未発見の異変の一覧
              </span>
            </h2>
            <p className="p-2">
              未発見の異変があるようです。…知りたい方は、そっとカーソルを
            </p>
            <div className="grid grid-cols-4 gap-8 justify-center">
              {notDetectedAnomalies.map((anomaly)=>(
                <NotDetectedCard
                  key = { anomaly.id}
                  keyword={anomaly.keyword}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation();
                  setSelectedAnomaly(anomaly);
                  console.log("Selected Anomaly:", anomaly);}}
                />
              ))}
            </div>
          </div>
        )}

        {notEncounteredAnomalies.length > 0 && (
          <div className="max-w-[1056px] m-auto mb-16">
            <h2 className="p-2 text-2xl"><span className="border-b-3 border-[#FF4500] pb-1">遭遇していない異変の一覧</span></h2>
            <p className="p-2">この異変は、今回のプレイでは現れなかったようです。もし気になるなら、そっと覗いてみてください。</p>
            <div className="grid grid-cols-4 gap-8 justify-center">
              {notEncounteredAnomalies.map((anomaly)=>(
                <NotEncounteredCard
                  key = { anomaly.id }
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation();
                  setSelectedAnomaly(anomaly);
                  console.log("Selected Anomaly:", anomaly);}}
                />
              ))}
            </div>
          </div>
        )}

      <Popup
        isOpen={selectedAnomaly !== null}
        onClose={() => setSelectedAnomaly(null)}
        anomaly={selectedAnomaly}
      />
    </>
  )
}
  
function DetectedCard({
  keyword,
  onClick,
}: {
  keyword: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>)=>void;
}){

  return (
      <div
        onClick = {onClick}
        className="rounded-xl w-[240px] h-[160px] bg-[#F8F8F8] text-black flex flex-col items-start justify-center px-4 py-3 gap-2 cursor-pointer
        hover:bg-[#5C0A0A] hover:text-white duration-500 ease-in-out shadow-sm">
        <div className="text-sm text-gray-500">発見した異変</div>
        <div className="text-lg font-bold">{keyword}</div>
        <div className="mt-auto text-sm underline self-end cursor-pointer" >詳細を見る</div>
      </div>
)
}

function NotDetectedCard({
  keyword,
  onClick,
}: {
  keyword: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>)=>void;
}){

  return (
      <div
        onClick = {onClick}
        className="rounded-xl w-[240px] h-[160px] bg-[#000000] text-black flex flex-col items-start justify-center px-4 py-3 gap-2 cursor-pointer
        hover:bg-[#5C0A0A] hover:text-white duration-800 ease-in-out shadow-sm">
        <div className="text-sm text-gray-500">未発見の異変</div>
        <div className="text-lg font-bold">{keyword}</div>
        <div className="mt-auto text-sm underline self-end cursor-pointer" >詳細を見る</div>
      </div>
)
}

function NotEncounteredCard({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLDivElement>)=>void;
}){

  return (
      <div
        onClick = {onClick}
        className="rounded-xl w-[240px] h-[160px] bg-[#F8F8F8] text-black flex flex-col items-start justify-center px-4 py-3 gap-2 cursor-pointer
        hover:bg-[#5C0A0A] hover:text-white duration-500 ease-in-out shadow-sm">
        <div className="text-sm text-gray-500">遭遇していない異変</div>
        <div className="text-lg font-bold">確認する</div>
        <div className="mt-auto text-sm underline self-end cursor-pointer" >詳細を見る</div>
      </div>
)
}

function Popup({
  isOpen,
  onClose,
  anomaly
}: {
  isOpen: boolean;
  onClose: () => void;
  anomaly: StageType | null;
}) {
  if (!isOpen || !anomaly) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg p-6 h-[500px] w-[1000px] relative text-black flex flex-col" onClick={(e) => e.stopPropagation()} > 
        <h2 className="text-xl font-bold mb-4">{anomaly.keyword}</h2>
        <div className="flex-1 overflow-y-auto mt-4 mb-4 min-h-0">
          <div className="mb-16">
            <p className="mb-8 text-xl text-center"><span className="border-b-[1.5px]">異変の詳細</span></p>
            <p style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
              {anomaly.detail}
            </p>
          </div>
          <div className="mb-16">
            <p className="mb-8 text-xl text-center"><span className="border-b-[1.5px]">実際のコード</span></p>
            <pre className="bg-gray-100 p-4 rounded-3xl">
              <code style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {anomaly.code}
              </code>
            </pre>
          </div>
          <div className="mb-16">
            <p className="mb-8 text-xl text-center"><span className="border-b-[1.5px]">実際の画面</span></p>
            <img className="mx-auto" src={anomaly.image}/>
          </div>
        </div> 
        <button onClick={onClose} className="px-4 py-2 bg-[#FF4500] text-white rounded hover:bg-[#CC3700] absolute bottom-0.5 right-0.5" > 
          閉じる
        </button>
      </div>
    </div>
  );
}




export default function End(){
  const navigate = useNavigate();


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
        anomalies = {stages}
      />

      <AnomalyList
        anomalies = {stages}
      />

      <div className="text-center">
        <button className="mb-16 bg-[#FF4500] text-2xl cursor-pointer hover:opacity-80" onClick={() => navigate("../")}>もう一度遊ぶ</button>
      </div>

    </div>
  )
}