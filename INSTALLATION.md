# 🚀 Guide d'installation - FOR MY ONLY ONE

## Étapes d'installation

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le projet
```bash
npm run dev
```

### 3. Ouvrir dans le navigateur
Le projet sera disponible sur `http://localhost:5173`

## 🖼️ Ajouter vos images personnelles

### Méthode 1 : Images locales
1. Créez le dossier `public/images/`
2. Ajoutez vos images (formats : jpg, png, webp)
3. Modifiez `src/App.tsx` :

```tsx
{
  title: "To My Eternal Love",
  image: "/images/notre-photo-1.jpg", // ← Ajoutez cette ligne
  content: (...)
}
```

### Méthode 2 : URLs externes
```tsx
{
  title: "From My Heart", 
  image: "https://votre-url-image.com/photo.jpg",
  content: (...)
}
```

## 🎨 Personnalisation avancée

### Modifier les couleurs
Dans `tailwind.config.js` :
```js
colors: {
  'romantic': {
    'bg': '#votre-couleur-fond',
    'text': '#votre-couleur-texte', 
    'accent': '#votre-couleur-accent',
    'card': '#votre-couleur-carte',
  }
}
```

### Ajuster l'espacement entre les entrées
Dans `src/App.tsx`, utilisez la propriété `spacing` :
```tsx
{
  title: "Moment Important",
  spacing: 'large', // 'small', 'normal', 'large'
  content: (...)
}
```

### Changer les animations
Dans `src/components/Timeline.tsx`, modifiez les `duration` :
```tsx
transition={{ duration: 1.2 }} // Plus lent = plus romantique
```

## 📱 Test responsive

- **Desktop** : Titres sur le côté, cartes larges
- **Mobile** : Titres au-dessus, cartes adaptées
- **Tablette** : Layout hybride automatique

## 🔧 Dépannage

### Erreur de build
```bash
npm run build
```

### Problème de polices
Vérifiez que Google Fonts charge bien dans `index.html`

### Images qui ne s'affichent pas
- Vérifiez le chemin : `/images/nom-fichier.jpg`
- Assurez-vous que les images sont dans `public/images/`

## 💝 Votre timeline actuelle

✅ **6 moments personnels intégrés**
✅ **Palette romantique Pinterest**  
✅ **Animations contemplatives**
✅ **Style vintage typewriter**
✅ **Placeholders pour vos images**

**Prêt à personnaliser avec vos vraies photos !** 📸