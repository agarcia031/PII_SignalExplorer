"use client";
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const TemporalPlot = ({xValues, signal, title, yRange }: { xValues: number[], signal: number[], title: string, yRange:number[] }) => {

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
          text: `${title}`,
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
            range: yRange,
            showgrid: true,
            zeroline: false,
           }, // 🔥 Fixe l'axe Y à une plage cohérente
        }}
      
    />
  );
};

export default TemporalPlot;