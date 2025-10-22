export type StageType = {
  id: number;
  keyword: string;
  detail: string;
  code: string;
  image: string;
  state: "isDetected" | "isNotDetected" | "isNotEncountered";
};
export let stages: StageType[] = [
  {
    id: 0,
    keyword: "通常",
    detail: "通常のページ",
    code: "",
    image: "",
    state: "isDetected",
  },
  {
    id: 1,
    keyword: "異変",
    detail: "異変のページ",
    code: "ihen.code();",
    image: "/ihen.png",
    state: "isNotEncountered",
  },
  {
    id: 2,
    keyword: "画像の傾きが変",
    detail: `CSS利用例の3.画像のカスタマイズの画像が、通常時よりも半回転多く傾いています。`,
    code: `{transform: rotate(186deg);`,
    image: "",
    state: "isNotEncountered"
  },
  {
    id: 5,
    keyword: "ボタンをクリックすると大きくなる",
    detail: `通常はクリックすると赤くなる仕様になっているボタンが、クリックすると大きくなってしまいます。`,
    code: `(e)=>{
    const btn = e.currentTarget;
    btn.classList.add("scale-200","bg-red-500","duration-300");
    setTimeout(()=>{
      btn.classList.remove("scale-200", "bg-red-500","duration-300");
      },600)
    }`,
    image: "",
    state: "isNotEncountered"
  },
  {
    id: 8,
    keyword: "数か所の配置が崩壊",
    detail: `flexboxという仕組みがよく配置で使われますが、設定の仕方を間違えると思った通りの配置にはなってくれません。`,
    code: `{
      display: flex;
      justify-content: flex-start;
    }`,
    image: "",
    state: "isNotEncountered"
  }
];
