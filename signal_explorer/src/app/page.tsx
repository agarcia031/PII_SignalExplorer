"use client"
import './globals.css';
import SidebarMenu from '@/components/SideBarMenu';
import Link from 'next/link';

export default function Home() {
    const MegaTitle = () => {
        return (
                    <h1 className="leading-loose overflow-visible relative z-50 mt-10 text-6xl sm:text-7xl md:text-8xl font-extrabold 
                    bg-gradient-to-r from-yellow-400 via-orange-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg mb-6">
                    Signal Explorer
                    </h1>
        );
      };

      const StartExploring = () => {
        return (
            <Link legacyBehavior href="/simple-sinus">
                <button className="mt-20 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-300 hover:shadow-yellow-500/50 transition-all duration-300 tracking-wide text-lg border border-yellow-500 animate-pulse">
                Commencer l'exploration
                </button>  
            </Link>
        );
      };

    return (
    <div className="relative">
      <SidebarMenu />
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-4">
        <MegaTitle />
        <StartExploring/>
      </div>
      
    </div>
    );
}