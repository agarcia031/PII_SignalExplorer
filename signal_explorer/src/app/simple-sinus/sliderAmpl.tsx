import '../globals.css'

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
  };

const SliderAmpl : React.FC<SliderProps> = ({ value, onChange}) => {
    return (
        <div className="flex flex-col items-center justify-center transform translate-x-6 px-1 z-50 static top-0">
            <span className="mb-18 text-lg font-bold">{value}</span>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="rotate-[-90deg] w-40"
            />
            <span className="mt-16 text-lg font-bold">Amplitude</span>
        </div>
    );
};
export default SliderAmpl