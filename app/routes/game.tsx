"use client";
import { useState, useEffect, type ComponentType } from "react";
import { useLocation, useParams } from "react-router";
import { stages, type StageType } from "~/stages";

export default function Game() {
  const location = useLocation();
  const pageNum = Number(localStorage.getItem("pageNum")); // ページ番号0~8
  const [stageInfo, setStageInfo] = useState<StageType>();
  const [PageComponent, setPageComponent] = useState<ComponentType<{
    pageNum: number;
    stageId: number;
  }> | null>(null);
  const stageId = Math.floor(Math.random() * stages.length); // ページの種類のID
  useEffect(() => {
    const currentStage = stages.filter((s) => s.id === stageId)[0];
    setStageInfo(currentStage);
    (async () => {
      try {
        if (!currentStage)
          throw Error(`currentStage is null. stageId is: ${stageId}`);
        const {
          Page,
        }: { Page: ComponentType<{ pageNum: number; stageId: number }> } =
          await import(currentStage.path);
        setPageComponent(() => Page);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [location.key]);
  if (!PageComponent || stageInfo === undefined) {
    return <div>エラー！部員をお呼びください。</div>;
  }
  return <PageComponent pageNum={pageNum} stageId={stageId} />;
}
