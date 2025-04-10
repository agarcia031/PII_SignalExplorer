import { CreateSignal} from "@/components/CreateSignalSum";

// Signal 1 – 2 sinusoïdes
const level1: ParamSet[] = [
    { frequence: 869, amplitude: 0.8, phase: 0 },           
    { frequence: 422, amplitude: 0.6, phase: Math.PI/2 },
];

// Signal 2 – 3 sinusoïdes
const level2: ParamSet[] = [
    { frequence: 98, amplitude: 1, phase: 0 },         
    { frequence: 608, amplitude: 0.5, phase: Math.PI/3 },
    { frequence: 990, amplitude: 0.25, phase: Math.PI/6 },
];

// Signal 3 – 3 sinusoïdes non-harmoniques (plus complexe)
const level3: ParamSet[] = [
    { frequence: 220, amplitude: 0.8, phase: 0 },         // La2
    { frequence: 500, amplitude: 0.4, phase: Math.PI/4 },
    { frequence: 750, amplitude: 0.3, phase: Math.PI/2 },
];

// Signal 4 – 5 sinusoïdes (riches harmoniques)
const level4: ParamSet[] = [
    { frequence: 196, amplitude: 1, phase: 0 },           // Sol3
    { frequence: 392, amplitude: 0.5, phase: Math.PI/3 },
    { frequence: 588, amplitude: 0.25, phase: Math.PI/6 },
    { frequence: 784, amplitude: 0.125, phase: Math.PI/2 },
    { frequence: 980, amplitude: 0.0625, phase: Math.PI/4 },
];

// Signal 5 – 8 sinusoïdes (ultra complexe, genre son synthétique ou instrument à timbre riche)
const level5: ParamSet[] = [
    { frequence: 261.63, amplitude: 1.0, phase: 0 },      // Do4
    { frequence: 523.25, amplitude: 0.7, phase: Math.PI/5 },
    { frequence: 784.88, amplitude: 0.5, phase: Math.PI/4 },
    { frequence: 1046.5, amplitude: 0.35, phase: Math.PI/2 },
    { frequence: 1318.5, amplitude: 0.25, phase: Math.PI/3 },
    { frequence: 1567.98, amplitude: 0.15, phase: Math.PI/6 },
    { frequence: 1760.0, amplitude: 0.1, phase: Math.PI/8 },
    { frequence: 1975.53, amplitude: 0.07, phase: Math.PI/10 },
];

const SIGNALS_TO_GUESS: [number[], number[]][] = [
    CreateSignal(level1),
    CreateSignal(level2),
    CreateSignal(level3),
    CreateSignal(level4),
    CreateSignal(level5),
    ];

export default SIGNALS_TO_GUESS