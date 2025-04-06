import { useEffect, useState, useRef } from 'react';

interface SoundPlayerProps {
  signal: number[];  // Le signal est un tableau de nombres
  sampleRate: number; // Fréquence d'échantillonnage
}

const SoundPlayer = ({ signal, sampleRate }: SoundPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false); // État pour savoir si le son est en cours
  const audioContextRef = useRef<AudioContext | null>(null); // Référence à l'AudioContext
  const sourceRef = useRef<AudioBufferSourceNode | null>(null); // Référence à la source audio en cours
  const gainRef = useRef<GainNode | null>(null); // Référence au GainNode

  // Fonction pour jouer le son
  const playSound = () => {
    if (audioContextRef.current) {
      // Si le son est déjà joué, on arrête la lecture précédente
      audioContextRef.current.close();
    }

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
    // Créer un buffer audio avec la taille du signal
    const buffer = audioContext.createBuffer(1, signal.length, sampleRate);
    const channelData = buffer.getChannelData(0);
  
    // Remplir le buffer avec les données du signal
    for (let i = 0; i < signal.length; i++) {
          channelData[i] = signal[i]; // Remplir le buffer avec les valeurs du signal
      }
  
    // Créer une source audio et la connecter au contexte audio
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);

      // Créer un GainNode pour contrôler le volume
    const gainNode = audioContext.createGain();
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Démarrer le son avec un volume progressivement augmenté
    gainNode.gain.setValueAtTime(0, audioContext.currentTime); // Commence à zéro
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.02); // Augmente en 100ms

    source.loop = true; // Le son va être en boucle indéfiniment

      // Démarrer la lecture du son
      source.start();

      // Conserver les références pour arrêter le son plus tard
      audioContextRef.current = audioContext;
      sourceRef.current = source;
      // Conserver les références pour arrêter le son plus tard
      sourceRef.current = source;
      gainRef.current = gainNode;
    };

    // Fonction pour arrêter le son
    const stopSound = () => {
      if (audioContextRef.current && sourceRef.current) {
        sourceRef.current.stop();
        audioContextRef.current.close();
        audioContextRef.current = null;
        sourceRef.current = null;
      }
    };

    const handleClick = () => {
      if (isPlaying) {
        stopSound();
        setIsPlaying(false); // Son arrêté
      } else {
        playSound();
        setIsPlaying(true); // Son joué
      }
    };

    useEffect(() => {
      // Si le signal change pendant la lecture, on arrête l'ancien son et on en joue un nouveau
      if(isPlaying){
        stopSound();
        playSound();
      }
    }, [signal]);
  
    return (
      <div className="fixed top-1 right-1 flex flex-col items-center w-32">
      <button
        onClick={handleClick}
        className= {`w-12 h-12 rounded-full flex items-center text-white
          justify-center ring-2 ${
          isPlaying ? 'bg-red-600' : 'bg-blue-600'
        } transition duration-300`}>
        {/* Icône dynamique */}
        {isPlaying ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-6 ">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
          </svg>        
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-6">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
            <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
          </svg>
        )}
      </button>
      </div>
    );
};
  
export default SoundPlayer;