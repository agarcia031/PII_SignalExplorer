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
      stopSound();
      playSound();
    }, [signal]);
  
    return (
      <button
        onClick={handleClick}
        className="mt-4 p-2 bg-red-500 text-white rounded-lg"
      >
        {isPlaying ? 'Arrêter la lecture audio du signal' : 'Lancer la lecture audio du signal'}
      </button>
    );
  };
  
  export default SoundPlayer;