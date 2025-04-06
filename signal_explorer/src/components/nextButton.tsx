import Link from 'next/link';

const NextButton = ({route} : {route:string}) => {
  return (
    <div className="fixed bottom-2 right-2 z-10">
      <Link legacyBehavior href={route}>
        <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-900">
            Continuer ➡️
        </button>
      </Link>
    </div>
  );
};

export default NextButton;