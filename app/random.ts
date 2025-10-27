import { type StageType } from "./stages";

export function biasedRandom(stages: StageType[]): number {
  const totalWeight = stages.reduce((sum, stage) => sum + stage.weight, 0);
  let r = Math.random() * totalWeight;

  for (let i = 0; i < stages.length; i++) {
    if (r < stages[i].weight) {
      return i; // ここでインデックスを返す
    }
    r -= stages[i].weight;
  }

    return stages.length - 1
}