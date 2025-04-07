import '../globals.css'

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
  };

const SliderPhase : React.FC<SliderProps> = ({ value, onChange}) => {
    const phaseDegrees =  Math.round(value * 180 / Math.PI);

    return (
        <div className=" flex flex-col items-center">
        <input
            type="range"
            min={0}
            max={2 * Math.PI}
            step={2 * Math.PI / 360}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        />
        <span className=" text-lg font-bold">Phase:{phaseDegrees}°</span>
        </div>
    );
};
export default SliderPhase