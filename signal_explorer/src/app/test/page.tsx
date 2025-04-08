"use client"
import { useState } from 'react';
import BackHomeButton from '@/components/backHomeButton';
import {motion} from 'framer-motion';

export default function Test() {
    const [listeValues, setListeValues] = useState<number[][]>([]);
    const [boxes, setBoxes] = useState<number[]>([]);

    const addBox = () => {
        setBoxes([boxes.length, ...boxes]); // nouvelle boîte à gauche
        setListeValues([...listeValues, [0,0]]);
      };

      const removeBox = (index: number) => {
        setBoxes(boxes.filter((_, i) => i !== index));
        setListeValues(listeValues.filter((_, i) => i !== index));
      };

      const updateValue = (index: number, valueIndex: number, newValue: number) => {
        const newValues = [...listeValues];
        newValues[index][valueIndex] = newValue;
        setListeValues(newValues);
      };

      

    interface BoiteProps {
        Delete: () => void;
        values: number[];
        onChange: (valueIndex: number, val: number) => void;
        index: number;
      }
    const Boite: React.FC<BoiteProps> = ({ Delete, values, onChange, index }) => {
        return (
            <div>
        <span>Boîte #{index + 1}</span>
        <input
          type="number"
          value={values[0]} // Première valeur de la boîte
          onChange={(e) => onChange(0, Number(e.target.value))} // Modifier la première valeur
          className="w-20 p-1 border rounded text-center"
        />
        <input
          type="number"
          value={values[1]} // Deuxième valeur de la boîte
          onChange={(e) => onChange(1, Number(e.target.value))} // Modifier la deuxième valeur
          className="w-20 p-1 border rounded text-center"
        />
        <div className="flex space-x-2 mt-2">
          <button onClick={Delete} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
        </div>
      </div>
            
        )
    }

    const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
        <button
          onClick={onClick}
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        >
          Ajouter une boîte
        </button>
      );

    return (
        <div>
            <span>Liste valeurs : {JSON.stringify(listeValues)}</span>
            <div className="p-4">
                <AddButton onClick={addBox} />
                <div className="flex flex-row-reverse flex-wrap">
                {boxes.map((_, index) => (
                    <Boite
                    key={index}
                    index={index}
                    values={listeValues[index]} // Passer les deux valeurs
                    onChange={(valueIndex, val) => updateValue(index, valueIndex, val)}
                    Delete={() => removeBox(index)}
                    />
                ))}
                </div>
            </div>

        <BackHomeButton/>
        </div>
    );
}