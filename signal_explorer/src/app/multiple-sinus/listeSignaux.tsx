import { useState } from 'react';
import ParamBox from './paramBox';
import AddButton from './addBox';
import CreateSinus from '@/components/createSinus';

const ListeSignaux = () => {
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

  //  // Tableau de tous les signaux
//const [signaux, setSignaux] = useState<number[][]>([]); 

//   const addNewSignal = ({frequence, amplitude,phase}:{frequence:number, amplitude:number, phase:number}) => {
//     const [newSignal] = CreateSinus({frequence, amplitude,phase}); // ne récupère que le signal de CreateSinus
//     setSignaux([...signaux, newSignal]);
//   }


  return (
    <div className="fixed bottom-8 left-8 flex items-end space-x-4 z-50">
        <AddButton 
            onClick={addNewBox} 
            disabled={boxes.length >= 10} 
        />
      {boxes.map((_, index) => (
        <ParamBox key={index} 
            index={index}
            onRemove={() => removeBox(index)} 
      )}
    </div>
  );
};

export default ListeSignaux;