"use client";
import { useSearchParams } from 'next/navigation';
import BackHomeButton from '@/components/navigation/backHomeButton';

export default function ScoreJeu (){
    const searchParams = useSearchParams();
    const scoresParam = searchParams.get("scores");
    const scores: ScoreDetail[] = scoresParam ? JSON.parse(scoresParam) : [];


    const getMessage = (index: number, hasRightNumber:boolean, rmseScore: number, total:number) => {
        const nbSinus = hasRightNumber ? "le bon nombre de sinusoïdes" : "un nombre incorrect de sinusoïdes";
        const similar = Math.round(rmseScore*200); // %

        return `Niveau ${index + 1} : Tu as identifié ${nbSinus}, et ton signal ressemble à ${similar}% à l’original ! Score : ${total} / 1 🎉`;
    };

    const totalScore = scores.reduce((total, score) => total + score.total, 0);


    return (
        <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Ton score final : {totalScore.toFixed(2)} / 5 🧠
      </h1>

      <div className="space-y-4">
        {scores.map((score, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500"
          >
            <p className="text-lg">{getMessage(index, score.hasRightNumber, score.rmseScore, score.total)}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/jeu"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow"
        >
          Rejouer 🔁
        </a>
      </div>
      <BackHomeButton/>
    </div>
    );
};