import CreateSinus from "@/components/createSinus";
import { useMemo } from "react";

// Fonction pour créer un signal composé à partir de plusieurs sinusoïdes
export function CreateSignal(params: ParamSet[]): [number[], number[]] {
    if (params.length === 0) {
      return [[], []];
    }
  
    // Crée chaque sinusoïde
    const listeSignaux: [number[], number[]][] = params.map((param) => CreateSinus(param));
  
    // On prend l'axe des x du premier signal (ils sont tous identiques)
    const [xValues] = listeSignaux[0];
  
    // Somme des y point par point
    const yValuesSum = xValues.map((_, i) =>
      listeSignaux.reduce((acc, [, yValues]) => acc + yValues[i], 0)
    );
  
    return [xValues, yValuesSum];
  }