const Explications = [
  {
    title: "",
    content: (
      <div className="w-full px-6 py-4 bg-muted rounded-xl text-lg text-gray-600 text-center">
        <p className="font-semibold">
          Un signal, c’est une information qui évolue dans le temps.
        </p>
        <p className="mt-2">
          Cette information peut venir de partout : un son, une image, la température d’un four,
          la vitesse d’un véhicule, etc.
        </p>
        <p className="mt-2">
          Ici, on va générer nous-mêmes notre signal : une onde sinusoïdale.
          On choisit ses paramètres (fréquence, amplitude, phase), mais en traitement du signal
          « sérieux », on travaille le plus souvent sur des données empiriques, issues de mesures.
        </p>
      </div>
    ),
  },
  {
    title: "Périodicité et paramètres d’une onde sinusoïdale",
    content: (
      <div className="w-full px-6 py-4 bg-muted rounded-xl text-lg text-gray-600">
        <p>
          Une onde sinusoïdale est <strong>périodique</strong> : elle se répète à l’identique à intervalle régulier.
          Cette régularité est définie par trois paramètres :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-left">
          <li><strong>Fréquence</strong> (en Hz) : nombre de répétitions par seconde. Plus elle est élevée, plus l’onde « vibre » vite.</li>
          <li><strong>Amplitude</strong> : hauteur de l’onde. Plus elle est grande, plus le signal est « fort ». Elle n’a pas d’unité ici, c’est une échelle arbitraire.</li>
          <li><strong>Phase</strong> (en degrés) : décalage horizontal de l’onde, elle indique où elle commence sur l’axe du temps.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Deux manières de voir un signal",
    content: (
      <div className="w-full px-6 py-4 bg-muted rounded-xl text-lg text-gray-600">
        <p>
          Un signal peut être représenté dans le domaine <strong>temporel</strong> ou <strong>fréquentiel</strong> :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-left">
          <li>
            En <strong>temporel</strong>, on visualise l’évolution du signal au fil du temps. C’est la forme d’onde brute.
          </li>
          <li>
            En <strong>fréquentiel</strong>, on décompose le signal en ses composantes en fréquence. On voit de quoi il est « fait ».
          </li>
        </ul>
        <p className="mt-2">
          Les deux contiennent la même information, mais sous un angle différent. C’est un peu comme regarder une même chanson
          sous forme de partition ou de spectre audio.
        </p>
      </div>
    ),
  },
];

export default Explications;


  