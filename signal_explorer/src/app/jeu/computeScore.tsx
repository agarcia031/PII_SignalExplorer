import computeRMSE from "./computeRMSE";
import rmseToScore from "./rsmeToScore";
import { CreateSignal } from "@/components/CreateSignalSum";
import SIGNALS_TO_GUESS from './fiveLevelsSignals';

const computeScore = (
  levelsParams: ParamSet[][],
): ScoreDetail[] => {
  const numSinus = [2,3,3,5,8];

  return levelsParams.map((params, index) => {
    const userSignal = CreateSignal(params)[1];
    const refSignal = SIGNALS_TO_GUESS[index][1];

    const hasRightNumber = params.length === numSinus[index];
    const rmse = computeRMSE(refSignal, userSignal);

    // RMSE transformé en score, à ajuster selon la tolérance
    const rmseScore = rmseToScore(rmse); // max 0.5
    const countScore = hasRightNumber ? 0.5 : 0;

    return {
      hasRightNumber,
      rmseScore,
      total: parseFloat((countScore + rmseScore).toFixed(2)),
    }
  })
}

export default computeScore