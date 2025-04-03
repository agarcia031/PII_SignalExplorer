import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import calculateFFT from './calculateFFT'; 

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const FFTPlot = ({ signal }: { signal: number[] }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Calcul de la transformée de Fourier
    const { freqs, amplitude } = calculateFFT(signal);

    // Mettre à jour l'état avec les données à afficher
    setData({
      fft: {
        x: freqs,
        y: amplitude,
        type: 'scatter',
        mode: 'lines',
        name: 'Transformée de Fourier',
      }
    });
  }, [signal]);

  if (!data) return null;

  return (
    <Plot
      data={[data.fft]}
      layout={{
        title: 'Transformée de Fourier',
        xaxis: {
          title: { text: 'Fréquence (Hz)' },
          showgrid: true,
          zeroline: false,
          range: [0, 1500],
        },
        yaxis: {
          title: { text: 'Amplitude' },
          showgrid: true,
          zeroline: false,
          range: [0, 1],
        },
        showlegend: true,
        margin: { t: 50, b: 50, l: 50, r: 50 },
      }}
      style={{ width: '80%', height: '500px' }}
    />
  );
};

export default FFTPlot;