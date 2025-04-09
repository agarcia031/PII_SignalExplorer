"use client"
import { useState, useMemo} from 'react';
import ParamBox from './paramBox';
import AddButton from './addBox';
import CreateSinus from '@/components/createSinus';
import BackHomeButton from '@/components/backHomeButton';
import NextButton from '@/components/nextButton';
import SoundPlayer from '@/components/soundPlayer';
import ManySinusPlot from './manySinusTempPlot';
import TemporalPlot from '@/components/temporalPlot';
import FFTPlot from '@/components/fftPlot';
//import ListeSignaux from './listeSignaux';

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
    
    const listeSignaux: [number[], number[]][] = useMemo(() => {
        return listeParams.map((param) => CreateSinus(param));
      }, [listeParams]);

    const sumSignaux: [number[], number[]] = useMemo(() => {
        if (listeSignaux.length === 0) {
          return [[], []];
        }

        const [xValues] = listeSignaux[0]; // xValues du premier signal
        const yValuesSum = xValues.map((_, i) =>
        listeSignaux.reduce((acc, [, yValues]) => acc + yValues[i], 0)
        );
        return [xValues, yValuesSum];
      }, [listeSignaux]);

      console.log("sumSignaux length:", sumSignaux[1].length);

    
    // console.log(listeParams)

    return (
        <div>
            <div className="flex flex-row">
                <ManySinusPlot listeSignaux={listeSignaux}/>
                <TemporalPlot xValues={sumSignaux[0]} signal={sumSignaux[1]}/>
                {sumSignaux[1].length > 1 && (sumSignaux[1].length & (sumSignaux[1].length - 1)) === 0 && (
                    <FFTPlot signal={sumSignaux[1]} Fe={44100} />
                )}
            </div>
            
            <div className="fixed bottom-8 left-8 flex items-end space-x-4 z-50">
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
        
        {/*<SoundPlayer signal={signal} sampleRate={Fe} />*/}
        <BackHomeButton/>
        <NextButton route={"test"} />
        </div>
    );
}