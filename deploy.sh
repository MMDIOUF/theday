#!/bin/bash

echo "🌹 Déploiement de votre Timeline Romantique 🌹"
echo "=============================================="

# Vérifier si Git est initialisé
if [ ! -d ".git" ]; then
    echo "📝 Initialisation de Git..."
    git init
    git add .
    git commit -m "💕 Initial commit - Timeline romantique pour Nourou Qalbi"
    echo "✅ Git initialisé avec succès"
else
    echo "📝 Mise à jour du repository..."
    git add .
    git commit -m "💕 Mise à jour de la timeline romantique"
    echo "✅ Changements commitées"
fi

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "📦 Installation de Vercel CLI..."
    npm install -g vercel
fi

echo "🚀 Déploiement sur Vercel..."
vercel --prod

echo ""
echo "🎉 Déploiement terminé !"
echo "📱 Votre timeline romantique est maintenant en ligne !"
echo ""
echo "🔗 Prochaines étapes :"
echo "1. Copiez l'URL générée par Vercel"
echo "2. Allez sur qr-code-generator.com"
echo "3. Créez votre QR code personnalisé"
echo "4. Partagez-le avec Nourou Qalbi ❤️"
echo ""
echo "💕 Bonne chance avec votre déclaration d'amour !"