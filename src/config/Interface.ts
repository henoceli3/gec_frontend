
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