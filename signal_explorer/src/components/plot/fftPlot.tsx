import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import calculateFFT from '../maths/calculateFFT'; 

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const FFTPlot = ({ signal, Fe, yRange }: { signal: number[], Fe:number, yRange:number[] }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Calcul de la transformée de Fourier
    const { freqs, amplitude } = calculateFFT(signal, Fe);

    // Mettre à jour l'état avec les données à afficher
    setData({
      fft: {
        x: freqs,
        y: amplitude,
        type: 'scatter',
        mode: 'lines',
        showlegend: false,
      }
    });
  }, [signal]);

  if (!data) return null;

  return (
    <Plot
      data={[data.fft]}
      layout={{
        title: {
          text: 'Signal fréquentiel',
          x: 0.5, // Centré horizontalement
          xanchor: 'center',
          yanchor: 'top',
        },
        margin:{'r':0, 't':60},
        autosize: false,
        xaxis: {
          title: { text: 'Fréquence (Hz)' },
          showgrid: true,
          zeroline: false,
          range: [0, 1350],
        },
        yaxis: {
          title: { text: 'Amplitude (normalisée)' },
          showgrid: true,
          zeroline: false,
          range: yRange,
        },
        showlegend: true,
        //margin: { t: 50, b: 50, l: 50, r: 50 },
      }}
    />
  );
};

export default FFTPlot;