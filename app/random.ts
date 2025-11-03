import { initialWeight, type StageType } from "./stages";

let p0 = initialWeight[0].weight / initialWeight.reduce((sum, item) => sum + item.weight, 0);

export function biasedRandom(stages: StageType[] , anomalyCount:number): number {
  if(stages.length != initialWeight.length) console.log("stages and initialWeight have a different length. Check it!");
  if (anomalyCount >= 7){
    localStorage.setItem("anomalyCount","0");
    return 0;
  }
  let totalWeight = stages.reduce((sum, stage) => sum + stage.weight, 0);
  if(stages.slice(1).reduce((sum, stage) => sum + stage.weight, 0) === 0){
    stages.forEach((stage, index)=>{
      stage.weight = initialWeight[index].weight;
    })
    totalWeight = stages.reduce((sum, stage) => sum + stage.weight, 0);
  }
  let r = Math.random() * totalWeight;

  for (let i = 0; i < stages.length; i++) {
    if (r < stages[i].weight) {
      if(i === 0){
        localStorage.setItem("anomalyCount","0");
      }else{
        localStorage.setItem("anomalyCount",String(anomalyCount+1));
      }
      return i; // ここでインデックスを返す
    }
    r -= stages[i].weight;
  }

    return stages.length - 1
}

export function updateWeight0(stages: StageType[]) {
  const S = stages.slice(1).reduce((sum, item) => sum + item.weight, 0);
  if(S === 0) return;

  stages[0].weight = (p0 / (1 - p0)) * S;
}