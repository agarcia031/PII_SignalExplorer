import { useState, ReactNode } from "react";

interface InfoPopupProps {
  message: ReactNode;
  title?: string;
}

const InfoPopup = ({ message, title = "Quésaco ?" }: InfoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className="fixed top-1 left-16 z-10">
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-600 hover:text-blue-800 font-bold text-xl hover:cursor-pointer"
        title="Afficher les infos"
      >
        ℹ️
      </button>
    </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative border-2 border-gray-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg font-bold"
            >
              ❌
            </button>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="text-sm text-gray-700">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPopup;