import { useState } from 'react';
import '../globals.css';
import ParamControl from './paramControl';

interface BoiteProps {
    onRemove: () => void;
    onValidate: (value: number[]) => void;
    index: number;
  }

const ParamBox: React.FC<BoiteProps> = ({ onRemove, onValidate, index }) => {

    const [frequence, setFrequence] = useState(440);
    const [amplitude, setAmplitude] = useState(0.5);
    const [phase, setPhase] = useState(0);
    const [isValidated, setIsValidated] = useState(false);

    const handleChangeFreq = (newFreq: number) => {
        if (newFreq < 40) newFreq = 40;
        if (newFreq > 1200) newFreq = 1200;
        setFrequence(newFreq);
      };

      const handleChangeAmpl = (newAmpl:number) => {
        // On s'assure que la valeur reste dans la plage autorisée
        if (newAmpl < 0) newAmpl = 0;
        if (newAmpl > 1) newAmpl = 1;
        setAmplitude(newAmpl);
      };

      const handleChangePhase = (newPhase:number) => {
        // On s'assure que la valeur reste dans la plage autorisée
        if (newPhase < 0) newPhase = 0;
        if (newPhase > 2 * Math.PI) newPhase = 2 * Math.PI;
        setPhase(newPhase);
      };
      const phaseDegrees =  Math.round(phase * 180 / Math.PI);

return (
<div className="w-32 bg-gray-200 border-2 border-black rounded-lg flex flex-col items-center justify-between px-2 py-2 font-semibold shadow-lg space-y-1">
  <div className="self-end">
    <button
      onClick={onRemove}
      className="bg-red-500 text-white rounded-full px-2 py-1 text-xs shadow-md"
    >
      ❌
    </button>
  </div>

  <div className="text-sm font-bold text-blue-700 mb-1">#{index + 1}</div>

  {isValidated ? (
    <div className="flex flex-col text-xs space-y-1 text-center">
      <span>Fréq: {frequence} Hz</span>
      <span>Amplitude: {amplitude}</span>
      <span>Phase: {phaseDegrees}°</span>
    </div>
  ) : (
    <div className="flex flex-col space-y-2 text-xs">
      <ParamControl 
        label="Fréquence"
        unite="Hz"
        min={40}
        max={1200}
        step={1}
        value={frequence}
        onChange={handleChangeFreq}
        valueConverted={frequence}
        />
      <ParamControl 
        label="Amplitude"
        unite=""
        min={0}
        max={1}
        step={0.1}
        value={amplitude}
        onChange={handleChangeAmpl}
        valueConverted={amplitude}
        />
      <ParamControl 
        label="Phase"
        unite="°"
        min={0}
        max={2 * Math.PI}
        step={2 * Math.PI / 360}
        value={phase}
        onChange={handleChangePhase}
        valueConverted={phaseDegrees}
        />
    </div>
  )}

  {!isValidated && (
    <button 
      onClick={() => {
        setIsValidated(true);
        onValidate([frequence, amplitude, phase]);
      }}
      className="mt-1 bg-blue-500 text-white px-2 py-1 rounded text-xs"
    >
      Valider
    </button>
  )}
</div>
)};

export default ParamBox;