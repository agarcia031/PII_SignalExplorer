const playSound = (frequence: number, amplitude: number) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Créer un oscillateur pour le signal sinusoïdal
    const oscillator = audioContext.createOscillator();
    
    // Créer un gain pour contrôler le volume (amplitude)
    const gainNode = audioContext.createGain();
    
    // Paramètres
    oscillator.frequency.setValueAtTime(frequence, audioContext.currentTime); // Fréquence du sinus
    gainNode.gain.setValueAtTime(amplitude, audioContext.currentTime); // Amplitude du son
    
    // Connecter l'oscillateur au gain, puis au contexte audio
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Démarrer l'oscillateur et arrêter après un certain temps (par exemple 2 secondes)
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2); // Durée du son (ici 2 secondes)
  };

  interface SoundPlayerProps {
    frequence: number;
    amplitude: number;
  }
  
  const SoundPlayer: React.FC<SoundPlayerProps> = ({ frequence, amplitude }) => {
    const handlePlaySound = () => {
      playSound(frequence, amplitude);
    };
  
    return (
      <button
        onClick={handlePlaySound}
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        Jouer le son
      </button>
    );
  };
  
  export default SoundPlayer;