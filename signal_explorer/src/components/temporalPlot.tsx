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
        { title: 'Signal temporel', 
          xaxis: { title: {text:'Temps (secondes)'},
          range: [0, 0.1],
          showgrid: true,
          zeroline: false,
          }, 
          yaxis: { title: {text:'Amplitude'}, 
            range: [-1, 1],
            showgrid: true,
            zeroline: false,
           }, // 🔥 Fixe l'axe Y à une plage cohérente
        }}
      style={{ width: '80%', height: '400px' }}
    />
  );
};

export default TemporalPlot;