export default function computeRMSE(signalA: number[], signalB: number[]): number {
    const n = Math.min(signalA.length, signalB.length);
    const error = signalA.slice(0, n).reduce((sum, val, i) => {
      const diff = val - signalB[i];
      return sum + diff * diff;
    }, 0);
    return Math.sqrt(error / n);
  }

  