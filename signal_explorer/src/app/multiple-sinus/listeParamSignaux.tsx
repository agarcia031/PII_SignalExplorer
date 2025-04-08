import { useState } from 'react';
import ParamBox from './paramBox';

const ListeParamSignaux = () : ParamSet[] => {

      const [listeParams, setListeParams] = useState<ParamSet[]>([]);

      const addParamSet = () => {
        setListeParams([...listeParams, { frequence: 440, amplitude: 0.5, phase: 0 } ]);
      };

      const updateParamSet = (index: number, key: keyof ParamSet, value: number) => {
        const updated = [...listeParams];
        updated[index] = {
          ...updated[index],
          [key]: value,
        };
        setListeParams(updated);
      };

      const removeParamSet = (index: number) => {
        setListeParams(listeParams.filter((_, i) => i !== index));
      };

      console.log(listeParams)

      return listeParams;
};
export default ListeParamSignaux