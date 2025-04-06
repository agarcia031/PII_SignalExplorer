"use client";
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const TemporalPlot = ({ signal, xValues }: { signal: number[], xValues: number[] }) => {

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: signal,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'blue' },
        },
      ]}
      layout={
        { title: {
          text: 'Signal temporel',
          x: 0.5, // Centré horizontalement
          xanchor: 'center',
          yanchor: 'top',
        }, 
          margin:{'l':35, 't':60},
          xaxis: { title: {text:'Temps (secondes)'},
          range: [0, 0.1],
          showgrid: true,
          zeroline: false,
          }, 
          yaxis: { //title: {text:'Amplitude'}, 
            range: [-1.05, 1.05],
            showgrid: true,
            zeroline: false,
           }, // 🔥 Fixe l'axe Y à une plage cohérente
        }}
      
    />
  );
};

export default TemporalPlot;