"use client"
import TemporalPlot from '../components/temporalPlot';
import FFTPlot from '@/components/fftPlot';
import Slider from '@/components/slider';
//import SinusControls from '@/components/sinusControls';
import { useState } from 'react';
import Link from 'next/link';  
import './globals.css';
import SoundPlayer from '@/components/soundPlayer';

export default function Home() {

  // PARAMETRES
  const [frequence, setFrequence] = useState(440); // Fréquences en Hz (la note La de base)
  const [amplitude, setAmplitude] = useState(0.5);

  // Fréquence d'échantillonnage
  const Fe = 44100; // en Hz (donc nombre d'échantillon par seconde)

  // Durée de "l'enregistrement"
  const duree = 0.2; // en seconde

  // Intervalle entre chaque échantillon (en ms)
  const step = 1 / Fe;

  // Nombre d'echantillon total
    // Fe *duree = 8 800 mais il faudra l'arrondir à une puissance de 2 pour la FFT
  const numEch = Math.pow(2, Math.floor(Math.log2(Fe *duree)));
  console.log(numEch) // =  8192
  
  // Axe du temps en millisecondes
  const xValues = Array.from({ length: numEch }, (_, i) => (i * step)); // axe des absices pour le plot temporel
  // ici on avance bien sur 200ms à un pas qui est de numEch/step
  
  // Création d'un signal temporel (sinusoïdal)
  const signal = Array.from({ length: numEch }, (_, i) => 
    amplitude * Math.sin(2 * Math.PI * frequence * (i * step))
  );

  return (
    <div >
      <h1>Onde sinusoïdale &#128526;</h1>

      <div className="flex flex-row justify-center gap-2 w-full max-w-screen-xl mx-auto py-8">
        {/* Plot temporel */}
        <div className="flex-[1] min-w-0">
          <TemporalPlot signal={signal} xValues={xValues} />
        </div>
        {/* Slider vertical entre les deux plot*/}
        <Slider  value={amplitude} onChange={setAmplitude} horizontal={false}/>
        {/* FFT Plot */}
        <div className="flex-[1] min-w-0 transform -translate-x-18">
          <FFTPlot signal={signal} Fe={Fe} />
        </div>
      </div>

      <Slider value={frequence} onChange={setFrequence} horizontal={true}/>
      {/* Bouton pour jouer le son */}
      <SoundPlayer signal={signal} sampleRate={Fe} />

      <Link legacyBehavior href="/addWaves">
        <a>Continuer</a>
      </Link>
      <Link legacyBehavior href = "/controlWave">
        <a>Voir des boites</a>
      </Link>
    </div>
  );
}