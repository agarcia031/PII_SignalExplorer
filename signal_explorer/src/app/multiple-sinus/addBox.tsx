import { useState } from 'react';
import '../globals.css';

type AddButtonProps = {
    onClick: () => void;
    disabled?: boolean; // 👈 On ajoute la prop ici
  };

const AddButton = ({ onClick, disabled = false }: AddButtonProps) => {
    return (
      <button onClick={onClick} 
        disabled={disabled}
        className="flex items-center justify-center border-4 border-black-400 w-12 h-12 bg-gray-300 text-black rounded-full shadow-lg cursor-pointer">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" fill="currentColor" 
            className="size-6">
        <path fillRule="evenodd" 
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" 
            clipRule="evenodd" />
        </svg>
      </button>
    );
  };
export default AddButton;