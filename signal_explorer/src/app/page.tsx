"use client"
import { useState } from 'react';
import Link from 'next/link';
import SidebarMenu from '@/components/navigation/SideBarMenu';
import { ChevronDown } from "lucide-react";

export default function Home() {
    const MegaTitle = () => {
        return (
                    <h1 className="fixed top-10 left-0 w-full leading-loose overflow-visible z-50 mt-10 text-6xl sm:text-7xl md:text-8xl font-extrabold 
                    bg-gradient-to-r from-yellow-400 via-orange-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg mb-6">
                    Signal Explorer
                    </h1>
        );
      };

      const StartExploringButton = () => {
        return (
            <Link legacyBehavior href="/simple-sinus">
                <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-300 hover:shadow-yellow-500/50 transition-all duration-300 tracking-wide text-lg border border-yellow-500 animate-pulse mb-4">
                Commencer l'exploration
                </button>  
            </Link>
        );
      };

      const [introOpen, setIntroOpen] = useState(false);
      const [whySignalOpen, setWhySignalOpen] = useState(false);

      return (
        <div className="relative">
  {/* Masque blanc de scrolling */}
  <div className="sticky top-0 bg-white z-10 h-[300px] w-full"></div>

  <SidebarMenu />
  
  <div className='text-center'> 
  <MegaTitle />

  {/* Conteneur scrollable des blocs */}
  <div className="px-4 pb-12 overflow-y-auto h-full">
    <div className="flex flex-col items-center text-center space-y-12">
    
      {/* Bloc 1 : Intro cliquable */}
      <div
        onClick={() => setIntroOpen(!introOpen)}
        className="text-2xl text-muted-foreground max-w-4xl cursor-pointer transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center justify-center gap-2">
          <ChevronDown
            className={`transition-transform duration-300 ${introOpen ? "-rotate-90" : "rotate-0"}`}
            size={24}
          />
          <p className="font-bold text-primary hover:underline">
            Bienvenue sur Signal Explorer !
          </p>
        </div>

        {introOpen && (
          <div className="mt-4 text-xl text-muted-foreground transition-all duration-500 ease-in-out">
            <p>
              Ici, on ne vient pas juste regarder de jolies courbes — on part en expédition.  
              Que tu sois étudiant ou juste curieux, imagine un monde invisible, peuplé de fréquences mystérieuses, de signaux bavards et de bruits parasites en embuscade.  
              Ce site est ton vaisseau d’exploration. Ici, pas de jargon intimidant : juste des outils interactifs, des visualisations dynamiques et un soupçon de magie mathématique pour découvrir les bases de cette discipline de façon claire et intuitive.  
              On va plonger ensemble dans les signaux périodiques ou dans la fameuse transformée de Fourier (spoiler : elle a changé la vie de plus d’un physicien insomniaque).
            </p>
          </div>
        )}
      </div>

      {/* Bloc 2 : Pourquoi s'intéresser au traitement du signal */}
      <div
        onClick={() => setWhySignalOpen(!whySignalOpen)}
        className="text-2xl text-muted-foreground max-w-4xl cursor-pointer transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center justify-center gap-2">
          <ChevronDown
            className={`transition-transform duration-300 ${whySignalOpen ? "-rotate-90" : "rotate-0"}`}
            size={24}
          />
          <p className="font-bold text-primary hover:underline">
            Pourquoi s’intéresser au traitement du signal ?
          </p>
        </div>

        {whySignalOpen && (
          <div className="mt-4 text-xl text-muted-foreground space-y-4 transition-all duration-500 ease-in-out">
            <p>
              Parce que dans toutes les sciences expérimentales, il faut bien, un jour, acquérir des données, les nettoyer, les transformer et en tirer des informations utiles.
              Le traitement du signal, c’est justement l’ensemble des méthodes qui rendent cela possible.
            </p>
            <p>
              Il permet de comprendre, filtrer, compresser, transmettre, classifier, prédire… bref, de dompter les signaux dans toute leur complexité.
              Ce champ, devenu incontournable dans de nombreuses technologies, est qualifié par la 
              <em>Signal Processing Society</em> comme 
              <q className="italic">the science behind our digital life</q>.
            </p>
            <p>
              Aujourd’hui, nous allons simplement faire un pas dans cette discipline en explorant quelques notions fondamentales. Le reste ? C’est à vous de l’explorer.
            </p>
          </div>
        )}
      </div>

    </div>
  </div>

  <StartExploringButton />
</div>
</div>
      );
}