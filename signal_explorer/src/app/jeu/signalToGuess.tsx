import { useState } from "react";
import TemporalPlot from "@/components/temporalPlot";
import FFTPlot from "@/components/fftPlot";
import SoundPlayer from "@/components/soundPlayer";
import SIGNALS_TO_GUESS from "./fiveLevelsSignals";

export default function DisplaySignalToGuess ({
    level
}: {
    level: number;
}){
    const [xValues, signal] = SIGNALS_TO_GUESS[level - 1];

    // Pour l'affichage
    const [isTemporal, setIsTemporal] = useState(false); // Pour savoir si on montre le plot temporel ou frequentiel
    
    return (
        <div className="flex flex-col items-center w-full">
        {/* Section contenant le SoundPlayer et le bouton */}
        <div className="mb-6 flex flex-col items-center space-y-4">
          <SoundPlayer signal={signal} sampleRate={44100} floating />
          
          {/* Le bouton pour changer l'affichage entre temporel et fréquentiel */}
          <button
            onClick={() => setIsTemporal((prev) => !prev)}
            className={`px-4 py-2 rounded font-semibold transition-colors duration-300 hover:cursor-pointer ${
              isTemporal ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
            } text-white shadow`}
            title="Choisir l'affichage du signal"
          >
            {isTemporal ? 'Afficher le signal fréquentiel' : 'Afficher le signal temporel'}
          </button>
        </div>

        {/* Le plot en fonction de l'état */}
        <div className="w-full">
        {isTemporal ? (
            <TemporalPlot
            xValues={xValues}
            signal={signal}
            title={`(Niveau ${level})`}
            yRange={[-1.5, 1.5]}
            />
        ) : (
            <FFTPlot signal={signal} 
                Fe={44100} 
                yRange={[0, 1.7]}/>
        )}
        </div>
    </div>
    );
};