import { initialWeight, type StageType } from "./stages";

export function biasedRandom(stages: StageType[]): number {
  let totalWeight = stages.reduce((sum, stage) => sum + stage.weight, 0);
  if(totalWeight - initialWeight[0].weight === 0){
    console.log(stages);
    stages.forEach((stage, index)=>{
      stage.weight = initialWeight[index].weight;
      console.log(stage.weight);
    })
    totalWeight = stages.reduce((sum, stage) => sum + stage.weight, 0);
    console.log("changed");
    console.log(stages)
  }
  let r = Math.random() * totalWeight;

  for (let i = 0; i < stages.length; i++) {
    if (r < stages[i].weight) {
      return i; // ここでインデックスを返す
    }
    r -= stages[i].weight;
  }

    return stages.length - 1
}