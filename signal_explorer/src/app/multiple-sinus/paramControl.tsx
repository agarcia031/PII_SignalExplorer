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
        <div className="flex flex-col items-center space-y-2">
        <label className="text-sm font-semibold text-black">{label} : {value} {unite}</label>
      
        <div className="flex flex-col items-center space-y-2">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-16 p-1 border rounded text-xs text-center" // Réduit la largeur de l'input
            style={{ color: 'transparent' }} 
          />
      
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-20" // Réduit la largeur du slider
          />
        </div>
      </div>
    );
  };
  
  export default ParamControl;