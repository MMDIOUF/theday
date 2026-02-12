// Exemple de données pour étendre votre timeline
// Copiez ce fichier vers timelineData.ts et personnalisez

import React from 'react';

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: string;
  spacing?: 'normal' | 'large' | 'small';
}

export const extendedTimelineData: TimelineEntry[] = [
  // Vos 6 entrées actuelles...
  {
    title: "To My Eternal Love",
    spacing: 'large',
    image: "/images/notre-premiere-photo.jpg", // Ajoutez vos images ici
    content: (
      <div className="space-y-6">
        <p className="leading-loose">
          To my Eternal and only love,<br />
          To the love of my life,<br />
          To the love of my soul,<br />
          To the love of my heart,<br />
          To the safe person of my heart and soul,<br />
          To the person who matters deeply and sincerely to me,<br />
          A ma moitié dans la religion.
        </p>
      </div>
    ),
  },
  
  // Exemples d'entrées supplémentaires que vous pourriez ajouter :
  {
    title: "Our First Meeting",
    spacing: 'normal',
    image: "/images/premiere-rencontre.jpg",
    content: (
      <div className="space-y-4">
        <p>Le jour où nos regards se sont croisés pour la première fois...</p>
        <p>Ce moment magique où j'ai su que tu étais spéciale.</p>
      </div>
    ),
  },
  
  {
    title: "Special Memories",
    spacing: 'normal', 
    image: "/images/souvenirs-speciaux.jpg",
    content: (
      <div className="space-y-4">
        <p>Tous ces moments précieux que nous avons partagés...</p>
        <p>Chaque rire, chaque conversation, chaque silence complice.</p>
      </div>
    ),
  },
  
  {
    title: "Dreams Together",
    spacing: 'large',
    image: "/images/nos-reves.jpg", 
    content: (
      <div className="space-y-4">
        <p>Tous les projets qu'on avait ensemble...</p>
        <p>Les rêves qu'on partageait pour notre futur.</p>
        <p className="font-script text-lg">Inch'Allah, nos chemins se rejoindront.</p>
      </div>
    ),
  },

  // Vos entrées actuelles continuent...
  {
    title: "Forever",
    spacing: 'large',
    image: "/images/pour-toujours.jpg",
    content: (
      <div className="space-y-4">
        <p>Te quiero mucho chocolat bou ndaw.</p>
        <p>
          Beugonaaleuh Demb,<br />
          Geunne leu Beugeutti Tey,<br />
          Teh Soubeu laalay Geuneu beugaat.
        </p>
        <p className="text-lg font-semibold text-romantic-text font-script">
          Happy love day today and everyday.
        </p>
        <p className="text-xl font-bold text-romantic-accent font-script">
          I love you Nourou Qalbi.
        </p>
      </div>
    ),
  },
];

// Conseils pour vos images :
// - Taille recommandée : 800x600px minimum
// - Formats supportés : jpg, png, webp
// - Placez-les dans public/images/
// - Utilisez des noms descriptifs : "notre-premiere-photo.jpg"