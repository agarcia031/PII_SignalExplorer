import '../globals.css'

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
  };

const SliderFreq : React.FC<SliderProps> = ({ value, onChange}) => {
    return (
        <div className=" flex flex-col items-center">
        <input
            type="range"
            min="20"
            max="1200"
            step="1"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            //className="bg-gray-300 h-1 rounded-lg"
        />
        <span className=" text-lg font-bold">Fréquence : {value} Hz</span>
        </div>
    );
};
export default SliderFreq