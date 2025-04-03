import Link from 'next/link';

const BackButton = () => {
  return (
    <div className="fixed top-4 left-4 z-10">
      <Link href="/">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
};

export default BackButton;