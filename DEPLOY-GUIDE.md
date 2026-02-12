# 🚀 Guide de Déploiement Vercel + QR Code

## Étape 1 : Déploiement sur Vercel

### Option A : Via GitHub (Recommandé)
1. **Créer un repo GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Timeline romantique"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/romantic-timeline.git
   git push -u origin main
   ```

2. **Connecter à Vercel :**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez "New Project"
   - Importez votre repo GitHub
   - Vercel détectera automatiquement Vite
   - Cliquez "Deploy"

### Option B : Via Vercel CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Suivre les instructions :
# - Set up and deploy? Y
# - Which scope? (votre compte)
# - Link to existing project? N
# - Project name? romantic-timeline
# - Directory? ./
# - Override settings? N
```

## Étape 2 : Votre URL sera générée

Après déploiement, vous obtiendrez une URL comme :
- `https://romantic-timeline-abc123.vercel.app`
- Ou un domaine personnalisé si configuré

## Étape 3 : Générer le QR Code

### Option A : Générateur intégré (Nouveau !)
Cette application inclut maintenant un générateur de QR code intégré !
1. Ouvrez votre site déployé
2. Cherchez le bouton "Générer QR" (ou l'icône QR) en bas à droite
3. Entrez l'URL de votre site
4. Un QR code stylisé sera généré automatiquement
5. Téléchargez-le directement

### Option B : En ligne (Alternative)
1. Allez sur [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Collez votre URL Vercel
3. Personnalisez :
   - **Couleur** : Rose/Rouge pour matcher votre thème
   - **Logo** : Ajoutez un cœur ou une fleur
   - **Style** : Coins arrondis pour un look romantique
4. Téléchargez en haute qualité (PNG/SVG)

### Option C : QR Code personnalisé romantique
1. Utilisez [QR Code Monkey](https://www.qrcode-monkey.com/)
2. **URL** : Votre lien Vercel
3. **Design** :
   - Couleur de premier plan : `#2d1b1b` (votre marron foncé)
   - Couleur d'arrière-plan : `#fdf9f9` (votre blanc rosé)
   - Style : Coins arrondis
   - Logo : Cœur ou fleur au centre
4. **Taille** : 1000x1000px minimum pour impression

### Option D : QR Code avec message
Créez un QR code avec texte personnalisé :
```
🌹 Pour Nourou Qalbi 🌹
Scanne pour lire ma lettre d'amour
https://votre-timeline.vercel.app
```

## Étape 4 : Utilisation du QR Code

### Idées romantiques :
- **Carte physique** : Imprimez le QR code sur une belle carte
- **Cadre photo** : QR code dans un joli cadre
- **Bijou** : QR code gravé sur un pendentif
- **Message surprise** : Cachez le QR code quelque part de spécial

### Message d'accompagnement suggéré :
```
"Scanne ce code pour découvrir 
quelque chose de spécial que 
j'ai créé juste pour toi ❤️"
```

## Étape 5 : Domaine personnalisé (Optionnel)

Pour un lien plus personnel :
1. Dans Vercel Dashboard → Settings → Domains
2. Ajoutez votre domaine (ex: `mon-amour.com`)
3. Suivez les instructions DNS
4. Régénérez le QR code avec le nouveau domaine

## 🎯 Résultat Final

Votre "Nourou Qalbi" pourra :
1. **Scanner le QR code** avec son téléphone
2. **Être redirigée automatiquement** vers votre timeline
3. **Lire votre lettre d'amour** avec toutes les animations romantiques
4. **Être émue** par votre création personnalisée

---

**Votre timeline romantique sera accessible 24h/24, 7j/7 dans le monde entier ! 💕**