import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface NavigateItem {
  path: string;
  label: string;
}

export interface MembreEquipe {
  photo: string;
  nom: string;
  role: string;
}

export interface HeaderProps {
  isscrolle: boolean;
}

export interface Activites {
  image: string;
  title: string;
  description: string;
}

export interface Temoignages {
  image: string;
  nom?: string;
  temoignage: string;
}

export interface ImageGalerie {
  image: string;
}

export interface Stats {
  icon: IconDefinition;
  stat: number;
  label: string;
  image: string;
}
