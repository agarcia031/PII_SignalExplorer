"use client";

// Composants de navigation
import BackHomeButton from '@/components/navigation/backHomeButton';
import NextLevelButton from './nextLevelButton';

// Composants d'affichage
import TemporalPlot from '../../components/plot/temporalPlot';
import SoundPlayer from '@/components/soundPlayer';
import DisplaySignalToGuess from './displaySignalToGuess';

// Composants pour créer des signaux
import ParamBox from '@/components/boxToCreateSinus/paramBox';
import AddButton from '../../components/boxToCreateSinus/addBox';
import { CreateSignal } from '../../components/maths/CreateSignalSum';

// Hooks et logique
import { useState, useMemo, useEffect } from 'react';

// Autres imports spécifiques
import '../globals.css';
import computeScore from './computeScore';

export default function Jeu() {
    // Tableau contenant les paramètres des signaux pour chaque niveau
    const [levelsParams, setLevelsParams] = useState<ParamSet[][]>([[], [], [], [], []]);
      
        // Tableau des paramètres de chaque signal
        const [listeParams, setListeParams] = useState<ParamSet[]>([]);

        const [level, setLevel] = useState(1);

        // Sauvegarder et charger les paramètres pour chaque niveau dans le localStorage
        useEffect(() => {
            const savedParams = localStorage.getItem(`niveau-${level}-params`);
            if (savedParams) {
            setLevelsParams((prevParams) => {
                const newParams = [...prevParams];
                newParams[level - 1] = JSON.parse(savedParams);
                return newParams;
            });
            }
        }, [level]);

        useEffect(() => {
            // Sauvegarder les paramètres dans le localStorage chaque fois que levelsParams change
            if (levelsParams[level - 1].length > 0) {
            localStorage.setItem(`niveau-${level}-params`, JSON.stringify(levelsParams[level - 1]));
            }
        }, [levelsParams, level]);

        // Liste de boîtes
        const [boxes, setBoxes] = useState<number[]>([]);
      
        // Fonction pour ajouter une nouvelle boîte de paramètres
        const addNewBox = () => {
            if (levelsParams[level - 1].length < 10) {
            setLevelsParams((prevParams) => {
                const newParams = [...prevParams];
                newParams[level - 1] = [
                ...newParams[level - 1],
                { frequence: 440, amplitude: 0.5, phase: 0 },
                ];
                return newParams;
            });
            }
        };
      
        // Supprimer une boîte
        const removeBox = (indexToRemove: number) => {
            setLevelsParams((prevParams) => {
                const newParams = prevParams.map((levelParams, idx) => {
                  if (idx === level - 1) {
                    // Utiliser filter pour supprimer l'élément spécifique de ce niveau
                    return levelParams.filter((_, index) => index !== indexToRemove);
                  }
                  return levelParams;
                });
                return newParams;
            });
        };
      
        // Modifier les paramètres d'un signal
        const updateParamSet = (index: number, key: keyof ParamSet, value: number) => {
            setLevelsParams((prevParams) => {
            const newParams = [...prevParams];
            newParams[level - 1][index] = {
                ...newParams[level - 1][index],
                [key]: value,
            };
            return newParams;
            });
        };

        // Créer le signal choisi en fonction des paramètres du niveau actuel
        const signalChoosen: [number[], number[]] = useMemo(
            () => CreateSignal(levelsParams[level - 1]),
            [levelsParams, level]
        );

        // SCORES
       const scores = computeScore(levelsParams);
    
    // Réinitialiser les paramètres dans le localStorage et dans le state
    const resetLevelsParams = () => {
    for (let i = 1; i <= 5; i++) {
      localStorage.removeItem(`niveau-${i}-params`);
    }
  };

  // Fonction appelée pour rediriger et réinitialiser
  const handleSubmitAndReset = () => {
    resetLevelsParams();  // Effacer les paramètres stockés dans le localStorage
    setLevelsParams([]);  // Réinitialiser les niveaux dans le state

    // Rediriger vers la page des scores
    window.location.href = `/score-jeu?scores=${JSON.stringify(scores)}`;
  };

  
  return (
    <div>
        <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">A toi de jouer 😎!</h1>
            <h2 className="text-lime-700 xl">Sauras-tu recréer ce signal ?</h2>
        </div>
        
        <div className="flex">
        {/* Colonne de gauche */}
        <div className="w-1/2 p-4 flex flex-col items-center relative">
            <DisplaySignalToGuess level={level} />
        </div>

        {/* Colonne de droite */}
        <div className="w-1/2 p-4 flex justify-center">
            <TemporalPlot
            xValues={signalChoosen[0]}
            signal={signalChoosen[1]}
            title=""
            yRange={[-1.5, 1.5]}
            />
        </div>
        </div>

        
            {/* Boutons pour choisir directement un niveau (1 à 5) */}
        <div className="fixed left-10 flex flex-row space-x-2 ">
            <NextLevelButton 
                level={level} 
                setLevel={setLevel} 
                scores={scores}
                handleSubmitAndReset={handleSubmitAndReset}/>
            {[1, 2, 3, 4, 5].map((n) => (
            <button
                key={n}
                onClick={() => setLevel(n)}
                className={`px-3 py-2 rounded font-semibold transition-colors duration-300 ${
                level === n ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                } text-white shadow`}
            >
                {n}
            </button>
            ))}
        </div>

        {/*Ajouter des signaux à l'ancienne*/}
        <div className="fixed bottom-4 right-10 flex items-end space-x-2 z-5 ml-4">
        <AddButton onClick={addNewBox} disabled={levelsParams[level - 1].length >= 8} />
        {levelsParams[level - 1].map((_, index) => (
          <ParamBox
            key={index}
            index={index}
            params={levelsParams[level - 1][index]}
            onParamChange={(key, value) => updateParamSet(index, key, value)}
            onRemove={() => removeBox(index)}
          />
        ))}
        </div>

      <SoundPlayer signal={signalChoosen[1]} sampleRate={44100} />
      <div className="flex items-center space-x-4">
        <BackHomeButton/>
      </div>
    </div>
  );
}