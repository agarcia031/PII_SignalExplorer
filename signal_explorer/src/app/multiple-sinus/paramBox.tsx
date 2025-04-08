import { useState } from 'react';
import '../globals.css';
import ParamControl from './paramControl';

interface BoiteProps {
    index: number;
    params : ParamSet;
    onParamChange: (key: 'frequence' | 'amplitude' | 'phase', value: number) => void;
    onRemove: () => void;
  }

const ParamBox: React.FC<BoiteProps> = ({index, params, onParamChange, onRemove}) => {
  const { frequence, amplitude, phase } = params;

  const [isValidated, setIsValidated] = useState(false);

    const handleChangeFreq = (newFreq: number) => {
        if (newFreq < 40) newFreq = 40;
        if (newFreq > 1200) newFreq = 1200;
        onParamChange('frequence', newFreq);
      };

      const handleChangeAmpl = (newAmpl:number) => {
        // On s'assure que la valeur reste dans la plage autorisée
        if (newAmpl < 0) newAmpl = 0;
        if (newAmpl > 1) newAmpl = 1;
        onParamChange('amplitude', newAmpl);
      };

      const handleChangePhase = (phaseDegrees:number) => {
        if (phaseDegrees < 0) phaseDegrees = 0;
        if (phaseDegrees > 159) phaseDegrees = 159;
        // Conversion de la phase en radian :
        let newPhase = phaseDegrees * Math.PI / 180;
        // // On s'assure que la valeur reste dans la plage autorisée
        // if (newPhase < 0) newPhase = 0;
        // if (newPhase > 2 * Math.PI) newPhase = 2 * Math.PI;
        onParamChange('phase', newPhase);
      };
      const phaseDegrees =  Math.round(phase * 180 / Math.PI);

return (
<div className="w-32 bg-gray-200 border-2 border-black rounded-lg flex flex-col items-center justify-between px-2 py-2 font-semibold shadow-lg space-y-1"
  onClick={() => setIsValidated(!isValidated)}>
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
        />
      <ParamControl 
        label="Amplitude"
        unite=""
        min={0}
        max={1}
        step={0.1}
        value={amplitude}
        onChange={handleChangeAmpl}
        />
      <ParamControl 
        label="Phase"
        unite="°"
        min={0}
        max={159}
        step={1}
        value={phaseDegrees}
        onChange={handleChangePhase}
        />
    </div>
  )}

  {!isValidated && (
    <button 
      onClick={() => {
        setIsValidated(true)
      }}
      className="mt-1 bg-blue-500 text-white px-2 py-1 rounded text-xs"
    >
      Valider
    </button>
  )}
</div>
)};

export default ParamBox;