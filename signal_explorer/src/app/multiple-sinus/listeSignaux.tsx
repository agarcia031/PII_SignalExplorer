import { useState } from 'react';
import ParamBox from './paramBox';
import AddButton from './addBox';
import CreateSinus from '@/components/createSinus';

const ListeSignaux = () => {
  // État pour garder une liste de boîtes
  const [boxes, setBoxes] = useState<number[]>([]);

  // Stocke un tableau de signaux
  const [signaux, setSignaux] = useState<number[][]>([]); 

  // Fonction pour ajouter une nouvelle boite
  const addNewBox = () => {
    if (boxes.length < 10) {
        setBoxes([...boxes, boxes.length]); // on ajoute juste un ID/index
      }
  };

  const addNewSignal = ({frequence, amplitude,phase}:{frequence:number, amplitude:number, phase:number}) => {
    const [newSignal] = CreateSinus({frequence, amplitude,phase}); // ne récupère que le signal de CreateSinus
    setSignaux([...signaux, newSignal]);
  }

  // Supprimer une boîte
  const removeBox = (index: number) => {
    setBoxes(boxes.filter((_, i) => i !== index));
    // On supprime en même temps le signal correspondant
    setSignaux(signaux.filter((_, i) => i !== index))
  };


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
            onValidate={([frequence, amplitude,phase]) =>addNewSignal({frequence, amplitude,phase})}/>
      ))}
    </div>
  );
};

export default ListeSignaux;