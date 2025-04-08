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
      className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        >
      Ajouter une boîte
    </button>
    );
  };
export default AddButton;