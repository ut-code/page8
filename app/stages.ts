export type StageType = {
  id: number;
  path: string;
  keyword: string;
  detail: string;
  code: string;
  image: string;
  state: "isDetected" | "isNotDetected" | "isNotEncountered";
};
export let stages: StageType[] = [
  {
    id: 0,
    path: "./pages/a.tsx",
    keyword: "通常",
    detail: "通常のページ",
    code: "",
    image: "",
    state: "isDetected",
  },
  {
    id: 1,
    path: "./pages/b.tsx",
    keyword: "異変",
    detail: "異変のページ",
    code: "ihen.code();",
    image: "/ihen.png",
    state: "isNotEncountered",
  },
];
