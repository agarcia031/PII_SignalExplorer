// Fonction pour transformer RMSE en score partiel (0 à 0.5)
export default function rmseToScore (rmse: number) {
    const maxRMSE = 2; // à ajuster selon ton échelle
    const clamped = Math.min(rmse, maxRMSE);
    return (1 - clamped / maxRMSE) * 0.5;};