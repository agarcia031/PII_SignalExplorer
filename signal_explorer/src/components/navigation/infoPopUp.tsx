import { useState, ReactNode } from "react";

interface InfoPopupProps {
  title?: string;
  pages: { title: string; content: ReactNode }[];
}

const InfoPopup = ({ title = "Quésaco ?", pages }: InfoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

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
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative border-2 border-gray-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg font-bold"
            >
              ❌
            </button>
            {/* TITRE PRINCIPAL EN GROS */}
            <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">{title}</h1>

            {/* TITRE DE LA PAGE EN COURS */}
            <h2 className="text-lg text-justify font-semibold mb-2">{pages[page].title}</h2>
            <div className="text-sm text-gray-700">{pages[page].content}</div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                ⬅️ Précédent
              </button>
              <button
                onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
                disabled={page === pages.length - 1}
                className="text-sm px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
              >
                Suivant ➡️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPopup;