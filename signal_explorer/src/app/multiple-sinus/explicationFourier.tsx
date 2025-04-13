const Explications = [
  {
    title: "",
    content: (
      <>
        <div className="w-full flex justify-center">
        <div className="max-w-4xl px-6 py-4 bg-muted rounded-xl text-lg text-muted-foreground text-center">
          <p className="font-semibold mb-2">
            Les signaux que l’on récolte dans le monde réel sont souvent brouillons.
          </p>
          <p>
            Entre les bruits parasites, les fréquences trop basses ou trop proches les unes des autres, difficile d’y voir clair en les regardant seulement dans le temps. C’est là que la Transformée de Fourier entre en scène : elle permet de « traduire » un signal dans le domaine fréquentiel.
            On passe d’une vague informe à une série de pics bien nets, où chaque pic correspond à une fréquence présente dans le signal. C’est un peu comme passer du brouhaha d’un marché à une partition musicale bien propre.
          </p>
        </div>
      </div>
      </>
    ),
  },
  {
    title: "",
    content: (
      <>
        <div className="w-full flex justify-center">
        <div className="max-w-4xl px-6 py-4 bg-muted rounded-xl text-lg text-muted-foreground text-center">
          <p className="font-semibold mb-2">
            D’accord, mais comment ça marche ?
          </p>
          <p>
            Mathématiquement, la Transformée de Fourier s’écrit ainsi :
          </p>
          <p className="mt-2 italic">
            F(f) = ∫ x(t) · e<sup>-2πift</sup> dt
          </p>
          <p className="mt-2">
            Cette formule peut faire peur, mais elle dit simplement :
            pour chaque fréquence <em>f</em>, on calcule combien elle est présente dans le signal en multipliant le signal original par une onde sinusoïdale de cette fréquence.
            Et hop, on a le spectre fréquentiel !
          </p>
        </div>
      </div>
      </>
    ),
  },
  {
    title: "",
    content: (
      <>
        <div className="w-full flex justify-center">
        <div className="max-w-4xl px-6 py-4 bg-muted rounded-xl text-lg text-muted-foreground text-center">
          <p className="font-semibold mb-2">
            À quoi ça sert, concrètement ?
          </p>
          <p>
            Imagine qu’un signal soit parasité par du <strong>bruit</strong> – des hautes fréquences sans intérêt, comme un sifflement ou un grésillement.
            En passant ce signal dans le domaine fréquentiel, ces bruits apparaissent clairement.
          </p>
          <p className="mt-2">
            Il suffit alors de supprimer ou d’atténuer les hautes fréquences (celles qui ne font pas partie de l’information utile), puis de revenir dans le domaine temporel. Résultat ?
            Un signal débruité, plus propre, plus clair. Magique… mais totalement logique !
          </p>
        </div>
      </div>
      </>
    ),
  },
];
export default Explications


  