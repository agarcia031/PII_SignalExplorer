import Link from 'next/link';

const SidebarMenu = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg">
    <div className="flex flex-row gap-4"> {/* Utilise flex-row pour les éléments en ligne */}
      <Link legacyBehavior href="/simple-sinus">
        <a className="flex-1 text-lg text-justify hover:bg-gray-700 p-2 rounded-md">
            Mais qu'est-ce que la transformée de Fourier ? 😮</a>
      </Link>

      <Link legacyBehavior href="/multiple-sinus">
        <a className="flex-1 text-lg text-justify hover:bg-gray-700 p-2 rounded-md">
            Mais de quoi est fait un signal ? 😨</a>
      </Link>

      <Link legacyBehavior href="/page3">
        <a className="flex-1 text-lg text-justify hover:bg-gray-700 p-2 rounded-md">
            jsp encore mais ce sera cool 👾</a>
      </Link>
    </div>
  </div>
      );
    };
    
    export default SidebarMenu;