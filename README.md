# FOR MY ONLY ONE - Romantic Timeline

Une timeline romantique personnalisée créée avec React, TypeScript, Tailwind CSS et Framer Motion.

## 🌹 Caractéristiques

- **Design romantique Pinterest** : Palette beige rosé, marron et rose dusty
- **Animations contemplatives** : Transitions très lentes (1.2s) pour un effet romantique
- **Typographie vintage** : Police monospace (typewriter) + script manuscrit
- **Effets interactifs** : Floating, heartbeat au hover, pulsation des points timeline
- **Responsive** : Optimisé pour mobile et desktop
- **Contenu personnalisé** : Vos textes d'amour intégrés

## 🎨 Palette de couleurs

```css
--romantic-bg: #f5f0eb     /* Beige rosé */
--romantic-text: #795548   /* Marron chocolat clair */
--romantic-accent: #c4a4a4 /* Rose dusty */
--romantic-card: #faf8f5   /* Blanc cassé beige */
```

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## 📁 Structure

```
src/
├── components/
│   └── Timeline.tsx        # Composant timeline principal
├── App.tsx                 # Application avec vos données
├── index.css              # Styles Tailwind + animations
└── main.tsx               # Point d'entrée

```

## 🖼️ Ajouter vos images

Pour remplacer les placeholders par vos vraies images :

1. Ajoutez vos images dans `public/images/`
2. Modifiez le tableau `timelineData` dans `src/App.tsx`
3. Ajoutez la propriété `image` à chaque entrée :

```tsx
{
  title: "To My Eternal Love",
  image: "/images/votre-image-1.jpg",
  content: (...)
}
```

## ✨ Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.js` section `colors.romantic`

### Ajuster les animations
Modifiez les durées dans `src/components/Timeline.tsx`

### Changer l'espacement
Utilisez la propriété `spacing` : `'small'`, `'normal'`, `'large'`

## 💝 Contenu actuel

La timeline contient 6 moments personnels :
1. **To My Eternal Love** - Déclaration d'amour
2. **From My Heart** - Message sincère  
3. **My Apology** - Excuses et responsabilité
4. **What I Feel** - Sentiments et réflexions
5. **My Hope** - Espoir de retrouvailles
6. **Forever** - Message final "I love you Nourou Qalbi"

## 🛠️ Technologies

- **React 18** + TypeScript
- **Vite** (build tool rapide)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icônes)

---

*Créé avec amour pour votre histoire unique* 💕