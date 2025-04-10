// Pour gérer l'ajout de signaux, on aura des listes de ParamSet
type ParamSet = {
    frequence: number;
    amplitude: number;
    phase: number;
  };

// Pour le score du jeu, on fera passez un tableau de ScoreDetail à la page finale
type ScoreDetail = {
    hasRightNumber: boolean;
    rmseScore: number;
    total : number;
  }