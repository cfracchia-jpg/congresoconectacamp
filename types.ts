
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface EventDetail {
  label: string;
  value: string;
  icon: string;
  image?: string;
}

export interface Exponent {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio?: string;
  videoUrl?: string; // URL del video de invitación
}
