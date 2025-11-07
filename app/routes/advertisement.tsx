export default function Advertisement(){
    return (
        <div className="mb-20 mx-auto w-[900px] h-[255px] bg-gray-100 text-black rounded-md flex">
          <div className="my-auto w-[450px] h-[250px] relative group">
            <img
              src="/adPicture.webp"
              className="w-100 h-full rounded-md absolute top-0 left-0"
            />
          </div>
          <div className="my-auto w-[450px] h-[250px]">
            <h1 className="pt-2 pl-4 text-2xl">コードで未来を作る、学生の力</h1>
            <h2 className="pt-6 pr-4">
              学びながら実際のアプリやサービスを作れる、学生主体の開発コミュニティ。
              チュートリアルからハッカソンまで、幅広い活動を提供します。
            </h2>
            <a href="https://utcode.net/" target="_blank">
              <button className="mt-8 ml-40 bg-[orangered] text-2xl text-black p-3 border-2 border-black cursor-pointer mb-10">
                詳しくはこちら
              </button>
            </a>
          </div>
        </div>
    )
}