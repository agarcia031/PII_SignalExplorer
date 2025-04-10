export default function computeScoreRMSE(signalA: number[], signalB: number[]): 
number {
    const n = Math.min(signalA.length, signalB.length);
    const error = signalA.slice(0, n).reduce((sum, val, i) => {
      const diff = val - signalB[i];
      return sum + diff * diff;
    }, 0);
    const rmse = Math.sqrt(error / n);
    const maxRMSE = 2; // à ajuster selon l'échelle
    const clamped = Math.min(rmse, maxRMSE);
    return (1 - clamped / maxRMSE) * 0.5;};


