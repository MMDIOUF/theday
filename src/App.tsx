import React from 'react';
import { RomanticTimeline } from './components/Timeline';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  spacing?: 'normal' | 'large' | 'small';
}

function App() {
  const timelineData: TimelineEntry[] = [
    {
      title: "To My Eternal Love",
      spacing: 'large', // Important moment - more space
      content: (
        <div className="space-y-6">
          <p className="leading-loose">
            To my Eternal love,<br />
            To the love of my life,<br />
            To the love of my soul,<br />
            To the love of my heart,<br />
            To the safe person of my heart and soul,<br />
            To the person who matters deeply and sincerely to me<br />
            A ma moitié dans la religion, sama niaan bou ndangou
          </p>
        </div>
      ),
    },
    {
      title: "From My Heart",
      spacing: 'normal',
      content: (
        <p className="leading-loose">
          I just wanna take un petit instant pour te dire :<br />
          Nenneh touttih I love you more than words can describe,<br />
          sincerely, deeply and you mean so much for me.
        </p>
      ),
    },
    {
      title: "My Sincere Apology",
      spacing: 'normal',
      content: (
        <div className="space-y-4">
          <p>
            I'm truly sorry pour ce qui s'est passé et de mon attitude vis à vis de toi dernièrement.
          </p>
          <p>
            Deff louleu metti wala louley blesser n'a jamais été mon intention et ne le sera jamais ndakh mane beugouma louleu mettih teh louleuh metti rk mettinama.
          </p>
          <p>
            Je prends l'entière responsabilité de mes erreurs et je ne cherche aucune excuse.
          </p>
        </div>
      ),
    },
    {
      title: "What I Feel Deep Inside",
      spacing: 'normal',
      content: (
        <div className="space-y-4">
          <p>
            I just want you to know that my feelings for you are real, deeply sincere and pure.
          </p>
          <p>
            Je ne cesse de penser à toi, I dream of you night and day et ton absence jour après jour m'a fait réaliser à quel point j'étais chanceux.
          </p>
          <p>
            Et m'a fait cogiter sur beaucoup de chose et sur ce que je dois faire en mieux avec plus de maturité et de tact et si tu m'en laisse encore l'occasion je veux par dessus tout me rattraper et me racheter.
          </p>
        </div>
      ),
    },
    {
      title: "My Hope",
      spacing: 'normal',
      content: (
        <div className="space-y-4">
          <p>
            I miss you, you are so precious and special to me, j'ai honte de moi and i'm not proud of myself.
          </p>
          <p>
            Je garde espoir que nos chemins vont se rejoindre à nouveau un jour et que je pourrais te revoir et te serrer fort dans mes bras et te dire à quel point je t'aime et tu me manques, s'il plaît à Dieu et si ton cœur le souhaite bien sûr.
          </p>
          <p>
            Seul Allah connaît la sincérité et l'amour que je te porte aussi profondément dans mon cœur.
          </p>
        </div>
      ),
    },
    {
      title: "Our Shared Memories",
      spacing: 'normal',
      content: (
        <div className="space-y-4">
          <p>
            J'ai sincèrement espoir que ce précieux et beau temps passé ensemble ne sera pas un souvenir propre à chacun mais plutôt partagé et remémoré ensemble.
          </p>
        </div>
      ),
    },
    {
      title: "Forever & Always",
      spacing: 'large', // Final important moment
      content: (
        <div className="space-y-4">
          <p>Te quiero mucho chocolat bou ndaw.</p>
          <p>
            Beugonaaleuh Demb,<br />
            Geunne leu Beugeutti Tey<br />
            Teh Soubeu laalay Geuneu beugaat.
          </p>
          <p 
            className="text-lg font-semibold font-script"
            style={{ color: '#2d1b1b' }} // Marron très foncé pour contraste
          >
            Happy love day today and everyday.
          </p>
          <p 
            className="text-xl font-bold font-script"
            style={{ color: '#1a0f0f' }} // Presque noir pour le message final
          >
            Je t'aime fort Nourou Qalbi.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <RomanticTimeline data={timelineData} />
    </div>
  );
}

export default App;