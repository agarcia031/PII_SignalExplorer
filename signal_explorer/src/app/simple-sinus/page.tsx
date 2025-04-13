"use client";

// Composants de navigation
import BackHomeButton from '@/components/navigation/backHomeButton';
import NextButton from '@/components/navigation/nextButton';
import InfoPopup from '@/components/navigation/infoPopUp';

// Composants d'affichage et de visualisation
import TemporalPlot from '../../components/plot/temporalPlot';
import FFTPlot from '@/components/plot/fftPlot';
import SoundPlayer from '@/components/soundPlayer';

// Composants pour la création de signaux
import CreateSinus from '@/components/maths/createSinus';
import SliderFreq from './sliderFreq';
import SliderAmpl from './sliderAmpl';
import SliderPhase from './sliderPhase';

// Autres imports spécifiques
import Explications from './explicationSignal';
import '../globals.css';

// Hooks et logique
import { useState } from 'react';

export default function SimpleSinus() {

  // PARAMETRES
  const [frequence, setFrequence] = useState(440); // Fréquences en Hz (la note La de base)
  const [amplitude, setAmplitude] = useState(0.5);
  const [phase, setPhase] = useState(0); // en radians

  const [xValues, signal] = CreateSinus({frequence, amplitude, phase});
  
  return (
    <div >
      <h1 className="text-2xl font-bold text-center mt-4">
        Qu'est-ce qu'un signal ?
      </h1>

      <div className="w-full flex justify-center mt-6">
        <div className="max-w-4xl px-6 py-4 bg-muted rounded-xl text-lg text-muted-foreground text-center">
          <p className="font-semibold">
            Pour le comprendre, observons une onde sinusoïdale.
          </p>
          <p className="mt-2">
            Tu peux en modifier les paramètres 🎛️ à ta guise et observer ce que ça change sur sa forme temporelle et fréquentielle et sur le son associé.
          </p>
        </div>
      </div>
      <div className="relative flex justify-center gap-2 w-full max-w-full mx-auto py-8">

              {/* Plot temporel */}
        <div className="flex-[1] item-center">
          <TemporalPlot xValues={xValues} signal={signal} title={'Signal temporel'} yRange={[-1.05, 1.05]}/>
          <SliderFreq value={frequence} onChange={setFrequence}/>
          <SliderPhase value={phase} onChange={setPhase}/>
        </div>

        <SliderAmpl  value={amplitude} onChange={setAmplitude}/>

            {/* Plot fréquentiel */}
        <div className="flex-[1]">   
            <FFTPlot signal={signal} Fe={44100} yRange={[0, 1.05]}/>
        </div>                
      </div>

      <SoundPlayer signal={signal} sampleRate={44100} />

          {/* Navigation */}
      <div className="flex items-center space-x-4">
        <BackHomeButton/>
            <InfoPopup 
              title={"Qu'est-ce qu'un signal ?"} 
              pages= {Explications}
            />
      </div>
        <NextButton route="/multiple-sinus" />
    </div>
  );
}