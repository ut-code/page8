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
    id: 3,
    keyword: "背景色変化",
    detail: "背景色が急に変わる",
    code: 
    "background-color : #FFF2B2",
    image:"/ihen.png",
    state:"isNotEncountered",
  }
];
