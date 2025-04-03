import FFT from 'fft.js';

const calculateFFT = (signal: number[]) => {
  const length = signal.length;

  // Création de l'instance FFT
  const fft = new FFT(length);

  // Créer un tableau pour les résultats de la transformée de Fourier
  const spectrum = fft.createComplexArray();

  // Calculer la FFT du signal
  fft.realTransform(spectrum, signal);
  fft.completeSpectrum(spectrum);

  // Extraire les fréquences et les magnitudes
  const freqs = Array.from({ length: length /2 }, (_, i) => i * (1 / (length * 0.01)));
  const amplitude = Array.from({ length: length / 2 }, (_, i) => Math.sqrt(spectrum[2 * i] ** 2 + spectrum[2 * i + 1] ** 2));

  return { freqs, amplitude };
};

export default calculateFFT;