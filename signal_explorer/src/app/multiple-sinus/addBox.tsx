import { useState } from 'react';
import '../globals.css';

type AddButtonProps = {
    onClick: () => void;
    disabled?: boolean; // 👈 On ajoute la prop ici
  };

const AddButton = ({ onClick, disabled = false }: AddButtonProps) => {
    return (
      <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded text-white transition-colors
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'}`}
        >
      Ajouter un signal
    </button>
    );
  };
export default AddButton;