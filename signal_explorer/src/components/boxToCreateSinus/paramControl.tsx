interface SliderControlProps {
    label: string;
    unite : string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (val: number) => void; // 👈 type de la fonction en props
  }
  
  const ParamControl = ({ label, unite, min, max, step, value, onChange}: SliderControlProps) => {
    return (
      <div className="flex flex-col items-center space-y-1 text-xs">
      <label className="font-medium text-black text-center">
        {label} : {value} {unite}
      </label>

      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-12 px-1 py-0.5 border rounded text-center text-xs"
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20 h-2"
        />
      </div>
    </div>
    );
  };
  
  export default ParamControl;