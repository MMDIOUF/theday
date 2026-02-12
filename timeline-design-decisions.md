# Timeline Component - Décisions de Design

## Questions et Réponses

### 1. Version de base et structure générale
**Réponse :** Option C - Hybride
- Conserver les cartes avec ombres de la version 2 pour TOUTE la zone de contenu (texte + images)
- Structure : Zone de texte ET zone d'images dans la même carte
- Layout : Texte en haut, puis grille d'images en bas dans chaque carte

### 2. Palette de couleurs principale
**Réponse :** Palette romantique Pinterest
- Style : Beige, marron-clair, rose, aesthetic romantique Pinterest
- Inspiration : Tons poudrés et chaleureux

### 3. Couleurs spécifiques et nuances
**Réponse :** 
- Fond principal : B - Beige rosé (`#f5f0eb`)
- Marron-clair textes : C - Marron chocolat clair (`#795548`)
- Rose accents : B - Rose dusty (`#c4a4a4`)
- Cartes : B - Blanc cassé légèrement beige

### 4. Titre principal et en-tête
**Réponse :**
- Titre : "FOR MY ONLY ONE"
- Sous-titre : "sama Tiopatti xolle"

### 5. Animations et effets visuels
**Réponse :**
- Ligne centrale : B - Avancée avec pulsation douce des points
- Cartes : B + C + D - Apparition échelonnée + effet floating + heartbeat au hover
- Vitesse : D - Très lente (1.2s) - Très contemplative

### 6. Contenu et structure des entrées
**Réponse :**
- Type de contenu : A - Texte personnel + images
- Longueur texte : C + D - Long (plusieurs paragraphes) + Variable selon importance
- Images : B - 1 image principale par entrée
- Nombre d'entrées : C - 7-10 entrées (timeline détaillée)

### 7. Responsive et mise en page
**Réponse :**
- Largeur : C - Moyen (`max-w-4xl`) - Plus intime et centré
- Titres mobile : A - Titres toujours visibles (au-dessus de chaque carte)
- Espacement : D - Variable selon l'importance de l'entrée
- Position image : B - Texte en haut, image en bas

### 8. Typographie et polices
**Réponse :**
- Police principale : D - Monospace (style vintage typewriter)
- Taille titre : D - Variable selon l'écran
- Style entrées : D - Style manuscrit/script pour plus de romantisme
- Alignement texte : D - Variable selon le contenu
- Interlignage : D - Variable selon la longueur du texte

### 9. Images et contenu visuel
**Réponse :**
- Type d'images : E - Placeholders pour l'instant (ajout ultérieur)
- Style traitement : C - Bordures arrondies douces (`rounded-lg`)
- Ombres : A - Ombres douces simples (`shadow-lg`)
- Taille : B - Moyennes (`h-48 md:h-64`) - Équilibrées

### 10. Configuration technique finale
**Réponse :**
- Structure : C - Vite + React (plus léger, rapide)
- Dépendances : A + C - Installation automatique + vérification existantes
- Fichiers : C - Structure complète avec exemples et documentation
- Données : Template avec placeholders - L'utilisateur fournira ses propres images et textes

## RÉSUMÉ FINAL
Timeline romantique "FOR MY ONLY ONE" avec :
- Palette beige rosé/marron/rose dusty
- Animations contemplatives très lentes
- 7-10 entrées avec textes longs + 1 image chacune
- Style vintage typewriter + script manuscrit
- Cartes avec effets floating + heartbeat
- Structure Vite + React complète
