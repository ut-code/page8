export default function Advertisement(){
    return (
        <div className="mb-20 mx-auto w-[900px] h-[260px] font-sans bg-gray-100 text-black rounded-md flex">
          <div className="my-auto w-[450px] h-[250px] relative group">
            <img
              src="/adPicture.webp"
              className="w-100 h-full rounded-md absolute top-0 left-0"
            />
          </div>
          <div className="my-auto w-[450px] h-[250px]">
            <h1 className="pt-2 pl-4 text-2xl">
              <img src="/utcode_logo.svg" className="w-[120px]"/>
              コードで未来を作る、学生の力</h1>
            <h2 className="pt-6 pr-4">
              学びながら実際のアプリやサービスを作れる、学生主体の開発コミュニティ。
              チュートリアルからハッカソンまで、幅広い活動を提供します。
            </h2>
            <a href="https://utcode.net/" target="_blank">
            <button className="mt-6 ml-[125px] bg-gradient-to-r from-orange-400 to-red-500 hover:scale-105 transform transition-all text-white font-bold text-xl py-3 px-6 rounded-lg shadow-lg border-2 border-black">
              詳しくはこちら
            </button>
            </a>
          </div>
        </div>
    )
}