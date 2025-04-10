import FFT from 'fft.js';

const calculateFFT = (signal: number[], Fe: number) => {
  const length = signal.length;
  
  // Création de l'instance FFT
  const fft = new FFT(length);

  // Créer un tableau pour les résultats de la transformée de Fourier
  const spectrum = fft.createComplexArray();

  // Calculer la FFT du signal
  fft.realTransform(spectrum, signal);
  fft.completeSpectrum(spectrum);

  // Extraire les fréquences et les magnitudes
  const freqs = Array.from({ length: length /2 }, (_, i) => i * (Fe / length));
  const amplitude = Array.from({ length: length / 2 }, (_, i) => Math.sqrt(spectrum[2 * i] ** 2 + spectrum[2 * i + 1] ** 2));

   // Calculer un facteur de normalisation en fonction de l'amplitude d'entrée
   const maxSignalAmplitude = Math.max(...signal.map(Math.abs));  // Amplitude du signal d'entrée
   const normalizationFactor = maxSignalAmplitude / Math.max(...amplitude);  // Calcul du facteur de normalisation
 
   // Appliquer le facteur de normalisation sur l'amplitude
   const normalizedAmplitude = amplitude.map(a => a * normalizationFactor);

  return { freqs, amplitude:normalizedAmplitude };
};

export default calculateFFT;