import {
  faBookBible,
  faChildren,
  faTents,
} from "@fortawesome/free-solid-svg-icons";
import {
  Activites,
  MembreEquipe,
  NavigateItem,
  Stats,
  Temoignages,
} from "./Interface";

export const navigateItems: NavigateItem[] = [
  { path: "/", label: "Accueil" },
  { path: "/activites", label: "Activité" },
  { path: "/temoignages", label: "Témoignages" },
  { path: "/galerie", label: "Galerie" },
];

export const listeMembreEquipe: MembreEquipe[] = [
  {
    photo: "/images/equipe/3.jpg",
    nom: "Mne YED DJOMAN MARCELLE",
    role: "Présidente",
  },
  {
    photo: "/images/equipe/7.jpg",
    nom: "DJOMAN JOSEPHINE",
    role: "Vice-Présidente",
  },
  {
    photo: "/images/equipe/3.jpg",
    nom: "PST N’GUESSAN KONAN DOMINIQUE",
    role: "Responsable Formation",
  },
  {
    photo: "/images/equipe/8.jpg",
    nom: "SEKA SEKA NICODEME",
    role: "Sécrétaire",
  },
  {
    photo: "/images/equipe/2.jpg",
    nom: "YED MELIANE JOELLE QUEREN",
    role: "Sécrétaire Adjointe",
  },
  {
    photo: "/images/equipe/6.jpg",
    nom: "EFFO FERNAND",
    role: "Tresorier",
  },
  {
    photo: "/images/equipe/5.jpg",
    nom: "EHUI KETOURA",
    role: "Trésorière Adjoint",
  },
  {
    photo: "/images/equipe/1.jpg",
    nom: "AKMEL ESSIS ONESIME",
    role: "Responsable Organisation",
  },
  {
    photo: "/images/equipe/4.jpg",
    nom: "PLO GERME",
    role: "Responsable Oranisation adjointe",
  },
];

export const listeActivitesMensuelles: Activites[] = [
  {
    image: "/images/utiles/9.jpg",
    title: "Formations Spirituelles",
    description:
      "Rejoignez nos sessions de formation spirituelle tous les samedis en 15, pour approfondir votre compréhension des enseignements religieux et renforcer votre foi.",
  },
  {
    image: "/images/utiles/7.jpg",
    title: "Moments d'Adoration",
    description:
      "Participez à nos moments d'adoration chaque dernier samedi du mois, pour louer et adorer ensemble dans un environnement spirituel et inspirant.",
  },
];

export const listeActiviteAnnuelles: Activites[] = [
  {
    image: "/images/utiles/10.jpg",
    title: "Camp biblique - Juillet",
    description:
      "Rejoignez-nous pour un camp biblique en juillet, rempli d'activités enrichissantes et de moments de partage spirituel.",
  },
  {
    image: "/images/utiles/13.jpg",
    title: "Retraites Spirituelles",
    description:
      "Des retraites spirituelles enrichissantes organisées pendant les congés de Noël et de Pâques, offrant des moments de méditation et de connexion spirituelle profonde.",
  },
];

export const listeTemoignages: Temoignages[] = [
  {
    image: "/images/utiles/14.jpg",
    nom: "Kendangudi Muchtima Ketsia Rachel",
    temoignage:
      "GEC m'a permis d'en apprendre plus sur le Seigneur et à savoir compter sur lui. Grâce à GEC, j'ai appris que la foi était indispensable dans notre marche chrétienne. Et, jusqu'à présent je garde ses valeurs fondamentales de la vie en Jésus et je les applique à ma vie quotidienne",
  },
  {
    image: "/images/utiles/5.jpg",
    nom:"Yed Johanne",
    temoignage:
      "Depuis que je suis à GEC, j'ai appris plein de nouvelles choses par rapport à mon identité en Christ. Grâce à GEC, je suis devenue une nouvelle personne en Jésus. J'ai appris qu'il faut honorer ses parents car c'était le secret d'une vie longue et heureuse. Aussi, en participant aux activités de GEC, j'ai eu de nouveaux amis avec qui j'ai grandi et développé l'amour et la communion fraternelle",
  },
];

export const listeStats: Stats[] = [
  {
    icon: faChildren,
    stat: 100,
    label: "Enfants formés",
    image: "/images/galerie/59.jpg",
  },
  {
    icon: faTents,
    stat: 2,
    label: "Camps bibliques",
    image: "/images/galerie/169.jpg",
  },
  {
    icon: faBookBible,
    stat: 2,
    label: "Retraites par ans",
    image: "/images/galerie/73.jpg",
  },
];
