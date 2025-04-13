import { CreateSignal} from "@/components/maths/CreateSignalSum";

// Signal 1 – 2 sinusoïdes : une base claire avec un petit twist
const level1: ParamSet[] = [
    { frequence: 432, amplitude: 0.75, phase: 0 },            // Fréquence "naturelle"
    { frequence: 689, amplitude: 0.55, phase: Math.PI / 3 },  // complémentaire
  ];
  
  // Signal 2 – 3 sinusoïdes : comme un accord bizarre mais doux
  const level2: ParamSet[] = [
    { frequence: 110, amplitude: 1, phase: 0 },               // La2
    { frequence: 347, amplitude: 0.6, phase: Math.PI / 4 },
    { frequence: 645, amplitude: 0.3, phase: Math.PI / 2 },
  ];
  
  // Signal 3 – 3 sinusoïdes, un peu planant / électro
  const level3: ParamSet[] = [
    { frequence: 293.66, amplitude: 0.7, phase: 0 },          // Ré4
    { frequence: 415.30, amplitude: 0.5, phase: Math.PI / 5 }, // Sol#4
    { frequence: 783.99, amplitude: 0.35, phase: Math.PI / 3 }, // Sol5
  ];
  
  // Signal 4 – 5 sinusoïdes : comme un instrument à anches
  const level4: ParamSet[] = [
    { frequence: 196, amplitude: 0.9, phase: 0 },             // Sol3
    { frequence: 370, amplitude: 0.6, phase: Math.PI / 6 },
    { frequence: 520, amplitude: 0.35, phase: Math.PI / 2 },
    { frequence: 768, amplitude: 0.2, phase: Math.PI / 3 },
    { frequence: 1020, amplitude: 0.1, phase: Math.PI / 4 },
  ];
  
  // Signal 5 – 8 sinusoïdes : son de synthé profond & riche
  const level5: ParamSet[] = [
    { frequence: 261.63, amplitude: 1.0, phase: 0 },            // Do4
    { frequence: 311.13, amplitude: 0.8, phase: Math.PI / 8 },  // Ré#4
    { frequence: 370.0, amplitude: 0.6, phase: Math.PI / 6 },   // Fa#4
    { frequence: 440.0, amplitude: 0.4, phase: Math.PI / 4 },   // La4
    { frequence: 554.37, amplitude: 0.3, phase: Math.PI / 3 },  // Do#5
    { frequence: 659.25, amplitude: 0.2, phase: Math.PI / 2 },  // Mi5
    { frequence: 830.61, amplitude: 0.12, phase: Math.PI / 5 }, // Sol#5
    { frequence: 987.77, amplitude: 0.08, phase: Math.PI / 7 }, // Si5
  ];

const SIGNALS_TO_GUESS: [number[], number[]][] = [
    CreateSignal(level1),
    CreateSignal(level2),
    CreateSignal(level3),
    CreateSignal(level4),
    CreateSignal(level5),
    ];

export default SIGNALS_TO_GUESS