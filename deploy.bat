@echo off
echo 🌹 Déploiement de votre Timeline Romantique 🌹
echo ==============================================

echo 📝 Vérification de Git...
if not exist ".git" (
    echo 📝 Initialisation de Git...
    git init
    git add .
    git commit -m "💕 Initial commit - Timeline romantique pour Nourou Qalbi"
    echo ✅ Git initialisé avec succès
) else (
    echo 📝 Mise à jour du repository...
    git add .
    git commit -m "💕 Mise à jour de la timeline romantique"
    echo ✅ Changements commitées
)

echo 🚀 Déploiement sur Vercel...
vercel --prod

echo.
echo 🎉 Déploiement terminé !
echo 📱 Votre timeline romantique est maintenant en ligne !
echo.
echo 🔗 Prochaines étapes :
echo 1. Copiez l'URL générée par Vercel
echo 2. Allez sur qr-code-generator.com
echo 3. Créez votre QR code personnalisé
echo 4. Partagez-le avec Nourou Qalbi ❤️
echo.
echo 💕 Bonne chance avec votre déclaration d'amour !
pause