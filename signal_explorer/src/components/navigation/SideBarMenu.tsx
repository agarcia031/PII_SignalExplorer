import Link from 'next/link';

const SidebarMenu = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
    <div className="flex flex-row gap-4"> {/* Utilise flex-row pour les éléments en ligne */}
      <Link legacyBehavior href="/simple-sinus">
        <a className="flex-1 text-lg text-center hover:bg-gray-700 p-2 rounded-md">
          Qu’est-ce qu’un signal ?</a>
      </Link>

      <Link legacyBehavior href="/multiple-sinus">
        <a className="flex-1 text-lg text-center hover:bg-gray-700 p-2 rounded-md">
            Pourquoi utiliser la transformée de Fourier ? </a>
      </Link>

      <Link legacyBehavior href="/jeu">
        <a className="flex-1 text-lg text-center hover:bg-gray-700 p-2 rounded-md">
            A toi de jouer ! 👾</a>
      </Link>
    </div>
  </div>
      );
    };
    
    export default SidebarMenu;