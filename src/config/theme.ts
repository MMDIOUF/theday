// Configuration des couleurs de votre timeline romantique
// Modifiez ces valeurs pour personnaliser l'apparence

export const romanticTheme = {
  // Couleurs principales (selon vos choix)
  colors: {
    background: '#f5f0eb',    // Beige rosé
    text: '#795548',          // Marron chocolat clair  
    accent: '#c4a4a4',        // Rose dusty
    card: '#faf8f5',          // Blanc cassé beige
    
    // Couleurs dérivées
    textLight: '#795548cc',   // Texte avec transparence
    accentLight: '#c4a4a440', // Accent avec transparence
    border: '#c4a4a460',      // Bordures
  },
  
  // Animations (selon vos choix : très lentes et contemplatives)
  animations: {
    duration: {
      slow: 1200,      // 1.2s - Très contemplative
      normal: 800,     // 0.8s
      fast: 400,       // 0.4s
    },
    
    easing: 'easeInOut',
    
    // Délais échelonnés pour les cartes
    staggerDelay: 100, // 0.1s entre chaque carte
  },
  
  // Typographie (selon vos choix)
  fonts: {
    primary: 'Courier New, monospace',     // Style vintage typewriter
    script: 'Dancing Script, cursive',     // Style manuscrit romantique
    
    sizes: {
      title: {
        mobile: '2rem',    // 32px
        tablet: '3rem',    // 48px  
        desktop: '4rem',   // 64px
      },
      subtitle: {
        mobile: '1.125rem', // 18px
        desktop: '1.25rem', // 20px
      },
      body: {
        mobile: '1rem',     // 16px
        desktop: '1.125rem', // 18px
      }
    }
  },
  
  // Espacement (selon vos choix : variable selon importance)
  spacing: {
    small: {
      mobile: '2rem',    // 32px
      desktop: '4rem',   // 64px
    },
    normal: {
      mobile: '4rem',    // 64px
      desktop: '6rem',   // 96px
    },
    large: {
      mobile: '8rem',    // 128px
      desktop: '12rem',  // 192px
    }
  },
  
  // Effets visuels
  effects: {
    cardHover: {
      translateY: -5,
      duration: 300,
    },
    
    heartbeat: {
      scale: [1, 1.05, 1],
      duration: 2000,
    },
    
    float: {
      translateY: [-10, 0, -10],
      duration: 3000,
    },
    
    timeline: {
      pulseScale: [1, 1.2, 1],
      pulseDuration: 2000,
    }
  }
};

// Fonction utilitaire pour appliquer le thème
export const getThemeValue = (path: string) => {
  return path.split('.').reduce((obj, key) => obj?.[key], romanticTheme);
};

// Export des couleurs pour Tailwind
export const tailwindColors = {
  'romantic-bg': romanticTheme.colors.background,
  'romantic-text': romanticTheme.colors.text,
  'romantic-accent': romanticTheme.colors.accent,
  'romantic-card': romanticTheme.colors.card,
};