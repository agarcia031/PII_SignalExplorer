"use client"
import { useState } from 'react';
import BackHomeButton from '@/components/backHomeButton';
import NextButton from '@/components/nextButton';
import CreateSinus from '@/components/createSinus';
import SoundPlayer from '@/components/soundPlayer';
import TemporalPlot from '../../components/temporalPlot';
import FFTPlot from '@/components/fftPlot';
import SliderFreq from './sliderFreq';
import SliderAmpl from './sliderAmpl';
import SliderPhase from './sliderPhase';
import '../globals.css';

export default function SimpleSinus() {

  // PARAMETRES
  const [frequence, setFrequence] = useState(440); // Fréquences en Hz (la note La de base)
  const [amplitude, setAmplitude] = useState(0.5);
  const [phase, setPhase] = useState(0); // en radians

  // Fréquence d'échantillonnage
    const Fe = 44100;

  const [signal,xValues] = CreateSinus({frequence, amplitude, phase});
  

  return (
    <div >
      <h1 className="text-2xl font-bold text-center mt-4">Onde sinusoïdale &#128526;</h1>
    
      <div className="relative flex justify-center gap-2 w-full max-w-full mx-auto py-8">
              {/* Plot temporel */}
        <div className="flex-[1] item-center min-w-0">
          <TemporalPlot signal={signal} xValues={xValues} />
          <SliderFreq value={frequence} onChange={setFrequence}/>
          <SliderPhase value={phase} onChange={setPhase}/>
        </div>
        <SliderAmpl  value={amplitude} onChange={setAmplitude}/>
        <div className="flex-[1] min-w-0 transform -translate-x-18">   
            <FFTPlot signal={signal} Fe={Fe} />
        </div>                
      </div>

      <SoundPlayer signal={signal} sampleRate={Fe} />
      <BackHomeButton/>
      <NextButton route="/multiple-sinus" />
    </div>
  );
}