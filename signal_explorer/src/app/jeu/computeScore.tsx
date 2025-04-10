import computeScoreRMSE from "./computeScoreRMSE";
import { CreateSignal } from "@/components/maths/CreateSignalSum";
import SIGNALS_TO_GUESS from './SignalsToGuess';

const computeScore = (
  levelsParams: ParamSet[][],
): ScoreDetail[] => {
  const numSinus = [2,3,3,5,8];

  return levelsParams.map((params, index) => {
    const userSignal = CreateSignal(params)[1];
    const refSignal = SIGNALS_TO_GUESS[index][1];

    const hasRightNumber = params.length === numSinus[index];
    const rmseScore = computeScoreRMSE(refSignal, userSignal);
    const countScore = hasRightNumber ? 0.5 : 0;

    return {
      hasRightNumber,
      rmseScore,
      total: parseFloat((countScore + rmseScore).toFixed(2)),
    }
  })
}

export default computeScore