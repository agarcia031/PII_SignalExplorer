"use client";
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const ManySinusPlot = ({listeSignaux, title}: {listeSignaux:[number[], number[]][], title:string}) => {
  return (
    <div>
    <Plot
    data={listeSignaux.map(([xValues, signal], index) => ({
              x: xValues,
              y: signal, 
              type: 'scatter',
              mode: 'lines',
              marker: { color: `rgb(${(index * 50) % 255}, ${(index * 100) % 255}, 150)` }, // Choisir une couleur différente pour chaque courbe
            }
        ))}
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
                range: [-1.05, 1.05],
                showgrid: true,
                zeroline: false,
               }, // 🔥 Fixe l'axe Y à une plage cohérente
            }}
    />
    </div>
  );
};

export default ManySinusPlot;