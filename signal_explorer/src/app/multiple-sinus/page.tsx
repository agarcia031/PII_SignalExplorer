"use client";

// Composants de navigation
import BackHomeButton from '@/components/navigation/backHomeButton';
import NextButton from '@/components/navigation/nextButton';
import InfoPopup from '@/components/navigation/infoPopUp';

// Composants d'affichage
import TemporalPlot from '@/components/plot/temporalPlot';
import FFTPlot from '@/components/plot/fftPlot';
import ManySinusPlot from './manySinusTempPlot';
import SoundPlayer from '@/components/soundPlayer';

// Composant d'explication
import Explications from './explicationFourier';

// Composants pour créer des signaux
import ParamBox from '@/components/boxToCreateSinus/paramBox';
import AddButton from '../../components/boxToCreateSinus/addBox';
import CreateSinus from '@/components/maths/createSinus';
import { CreateSignal } from '@/components/maths/CreateSignalSum';

// Hooks et logique
import { useState, useMemo } from 'react';

export default function Test() {
    // Liste de boîtes
      const [boxes, setBoxes] = useState<number[]>([]);
    
      // Tableau des paramètres de chaque signal
      const [listeParams, setListeParams] = useState<ParamSet[]>([]);
    
      // Fonction pour ajouter une nouvelle boite de paramètres
      const addNewBox = () => {
        if (boxes.length < 10) {
            const newId = boxes.length === 0 ? 0 : Math.max(...boxes) + 1;
            setBoxes([newId, ...boxes]); // ajoute à gauche
            setListeParams([...listeParams, { frequence: 440, amplitude: 0.5, phase: 0 } ])
            }
      };
    
      // Supprimer une boîte
      const removeBox = (indexToRemove: number) => {
        const newBoxes = boxes.filter((_, i) => i !== indexToRemove);
        setBoxes(newBoxes);
        setListeParams(listeParams.filter((_, i) => i !== indexToRemove));
      };
    
      // Modifier les paramètres d'un signal
      const updateParamSet = (index: number, key: keyof ParamSet, value: number) => {
        const updated = [...listeParams];
        updated[index] = {
          ...updated[index],
          [key]: value,
        };
        setListeParams(updated);
      };
    
    // Crée chaque sinusoïde
    const listeSignaux: [number[], number[]][] = listeParams.map((param) => CreateSinus(param));
    const sumSignaux: [number[], number[]] = useMemo(() => CreateSignal(listeParams), [listeParams]);


    // Pour l'affichage :
    const [isSummed, setIsSummed] = useState(false); // Pour savoir si on montre la somme ou tous les signaux

    return (
        <div>
        <h1 className="text-2xl font-bold text-center mt-4">
            Qu'est-ce que la transformée de Fourier ?
        </h1>

        <div className="w-full flex justify-center mt-2">
            <div className="max-w-4xl px-2 py-2 bg-muted rounded-xl text-lg text-muted-foreground text-center">
            <p className="font-semibold">
                C'est la formule qui permet de passer de la représentation temporelle à la représentation fréquentielle du signal.
            </p>
            <p className="mt-2">
                Amuse-toi à additionner des ondes sinusoïdales entre elles et observe le résultat sur la représentation fréquentielle du signal obtenu.
            </p>
            </div>
        </div>

            {/* Affichage des plots */}
            <div className="flex">

            {/* Colonne de gauche */}
            <div className="w-1/2 p-4 flex flex-col items-center relative">

            {/* Le bouton centré au-dessus du plot */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <button
                onClick={() => setIsSummed((prev) => !prev)}
                className={`px-4 py-2 mb-6 rounded font-semibold transition-colors duration-300 ${
                isSummed ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
                } text-white shadow`}
            >
                {isSummed ? 'Afficher tous les signaux' : 'Afficher somme des signaux'}
            </button>
            </div>

            {/* Le plot en fonction de l'état */}
                <div className="w-full">
                {isSummed ? (
                    <TemporalPlot
                    xValues={sumSignaux[0]}
                    signal={sumSignaux[1]}
                    title=""
                    yRange={[-1.5, 1.5]}
                    />
                ) : (
                    <ManySinusPlot listeSignaux={listeSignaux} title="" />
                )}
                </div>
            </div>

            {/*  Colonne de droite : FFT */}
            <div className="w-1/2 p-4">
                {sumSignaux[1].length > 1 && (sumSignaux[1].length & (sumSignaux[1].length - 1)) === 0 && (
                <FFTPlot 
                    signal={sumSignaux[1]} 
                    Fe={44100}
                    yRange={[0, 1.7]} />
                )}
        </div>
    </div>

        {/* Gestion des signaux */}    
            <div className="fixed bottom-4 left-2 flex items-end space-x-2 z-5 ml-4">
        <AddButton 
            onClick={addNewBox} 
            disabled={boxes.length >= 10} 
        />
        {boxes.map((_, index) => (
        <ParamBox
            key={index}
            index={index}
            params={listeParams[index]}
            onParamChange={(key, value) => updateParamSet(index, key, value)}
            onRemove={() => removeBox(index)}
        />
        ))}
        </div>
        
        <SoundPlayer signal={sumSignaux[1]}  sampleRate={44100} />
        <BackHomeButton/>
        <InfoPopup title={"Qu'est-ce que la transformée de Fourier ?"} 
              pages={Explications} />
        <NextButton route={"jeu"} />
        </div>
    );
}