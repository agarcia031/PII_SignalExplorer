import {useState} from 'react'
import '../app/globals.css';

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
    horizontal : boolean;
  };

const Slider: React.FC<SliderProps> = ({ value, onChange, horizontal}) => {
    if(horizontal)
        return (
        <div className=" flex flex-col items-center">
        <input
            type="range"
            min="20"
            max="1200"
            step="1"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="appearance-none bg-gray-300 h-1 rounded-lg"
        />
        <span className="mt-2 text-lg font-bold">{value}</span>
        </div>)

    else return (
        <div className="flex flex-col items-center justify-center transform translate-x-6 px-1 z-50">
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
            
        </div>);
}

export default Slider;