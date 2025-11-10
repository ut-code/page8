import { useNavigate } from "react-router";

export default function AdvertisementAnomaly(){
  const navigate = useNavigate();
  return (
            <div className="mb-20 mx-auto w-[900px] h-[260px] bg-black text-red-700 rounded-md flex">
          <div className="my-auto w-[450px] h-[250px] relative group">
            <img
              src="/ad1.png"
              className="w-100 h-full rounded-md absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/ad2.png"
              className="w-100 h-full rounded-md absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="my-auto w-[450px] h-[250px]">
            <h1 className="pt-2 pl-4 text-2xl">
              <img src="/utcode_logo.svg" className="w-[120px] filter invert sepia saturate-200 hue-rotate-0 brightness-100"/>
              ｺｰﾄﾞで譛ｪ萓をつくる、學生の力</h1>
            <h2 className="pt-6 pr-4">
              学びながら実際のｱﾌﾟﾘやサーᴠィスを作れ繧ｿる、學生主体の開發コミュニティ。
              チュートリアルからハ繧ｹ繧ッカソンまᴅ、幅広い活動を提供ｱ繝します。
            </h2>
            <button 
              className="mt-4 ml-[125px] bg-[orangered] text-2xl text-black p-3 border-2 border-black cursor-pointer mb-10"
              onClick={() => {
                localStorage.setItem("pageNum", "0");
                navigate("/game");
              }}
            >
              オワリハコチラ
            </button>
          </div>
        </div>
  )
}