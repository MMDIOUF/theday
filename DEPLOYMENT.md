# 🚀 Déploiement - FOR MY ONLY ONE

## Options de déploiement gratuites

### 1. Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Suivre les instructions
```

### 2. Netlify
```bash
# Build le projet
npm run build

# Glisser-déposer le dossier 'dist' sur netlify.com
```

### 3. GitHub Pages
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json :
"homepage": "https://votre-username.github.io/romantic-timeline",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Déployer
npm run deploy
```

## 📱 Partage

Une fois déployé, vous aurez une URL comme :
- `https://votre-timeline.vercel.app`
- `https://votre-timeline.netlify.app`

Parfait pour partager votre timeline romantique ! 💕

## 🔒 Rendre privé (optionnel)

### Protection par mot de passe
Ajoutez dans `src/App.tsx` :

```tsx
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [password, setPassword] = useState('');

const handleLogin = () => {
  if (password === 'votre-mot-de-passe-secret') {
    setIsAuthenticated(true);
  }
};

if (!isAuthenticated) {
  return (
    <div className="min-h-screen bg-romantic-bg flex items-center justify-center">
      <div className="romantic-card max-w-md w-full mx-4">
        <h2 className="text-2xl font-script text-center mb-6">
          Accès privé
        </h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full p-3 rounded border mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-romantic-accent text-white p-3 rounded"
        >
          Entrer
        </button>
      </div>
    </div>
  );
}
```

## 📊 Analytics (optionnel)

Pour voir qui visite votre timeline :

### Google Analytics
1. Créez un compte sur analytics.google.com
2. Ajoutez le code de suivi dans `index.html`

### Vercel Analytics
```bash
npm install @vercel/analytics

# Dans src/main.tsx :
import { Analytics } from '@vercel/analytics/react';

// Ajoutez <Analytics /> dans votre JSX
```

## 🎯 SEO et métadonnées

Dans `index.html`, personnalisez :

```html
<title>FOR MY ONLY ONE - Notre Histoire</title>
<meta name="description" content="Une timeline romantique de notre amour">
<meta property="og:title" content="FOR MY ONLY ONE">
<meta property="og:description" content="Notre histoire d'amour">
<meta property="og:image" content="/preview-image.jpg">
```

## 💝 Conseils finaux

- **Testez** sur mobile avant de déployer
- **Optimisez** vos images (compressez-les)
- **Sauvegardez** votre code sur GitHub
- **Partagez** avec amour ! 

Votre timeline romantique est prête à toucher les cœurs ! ✨