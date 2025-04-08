// Fréquence d'échantillonnage
const Fe = 44100; // en Hz (donc nombre d'échantillon par seconde)

// Durée de "l'enregistrement"
const duree = 0.2; // en seconde

// Intervalle entre chaque échantillon (en ms)
const step = 1 / Fe;

// Nombre d'echantillon total
  // Fe *duree = 8 800 mais il faudra l'arrondir à une puissance de 2 pour la FFT
const numEch = Math.pow(2, Math.floor(Math.log2(Fe *duree)));
console.log(numEch) // =  8192

// Axe du temps en millisecondes
const xValues = Array.from({ length: numEch }, (_, i) => (i * step)); // axe des absices pour le plot temporel
// ici on avance bien sur 200ms à un pas qui est de numEch/step


export default function CreateSinus ({frequence, amplitude, phase}
    :{frequence:number, amplitude:number, phase:number}): number[][] {
  
  // Création d'un signal temporel (sinusoïdal)
  const signal = Array.from({ length: numEch }, (_, i) => 
    amplitude * Math.sin(2 * Math.PI * frequence * (i * step)+ phase)
  );
    return [signal,xValues];
};