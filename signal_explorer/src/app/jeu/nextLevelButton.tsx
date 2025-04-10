"use client"
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function NextLevelButton({
  level,
  setLevel,
  maxLevel = 5,
  scores,
  handleSubmitAndReset,
}: {
  level: number;
  setLevel: (level: number) => void;
  maxLevel?: number;
  scores: ScoreDetail[],
  handleSubmitAndReset : () => void;
}) {

    const handleClick = () => {
        if (level < maxLevel) {
          setLevel(level + 1); // Passe au niveau suivant
        }
        // Si on est au dernier niveau, on redirige vers la page des résultats
      };
    

  return (
    <div >
      {level < maxLevel ? (
        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded shadow transition"
        >
          Niveau suivant
        </button>
      ) : (
        <Link
            href={{
                pathname: "/score-jeu",
                query: {
                    scores: JSON.stringify(scores),
                  },
            }}
          onClick={handleSubmitAndReset}
          className="btn bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded shadow transition"
        >
          Voir les résultats
        </Link>
      )}
    </div>
  );
}