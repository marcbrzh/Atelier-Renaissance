# Atelier Renaissance — Site vitrine pour carrosserie et peinture haut de gamme

Bienvenue dans le dépôt du site vitrine statique d’**Atelier Renaissance**, un garage spécialisé dans la peinture, la restauration et la retouche de carrosseries de véhicules de luxe et de collection. Le site est entièrement HTML/CSS/JS, prêt à ouvrir dans un navigateur ou à déployer sur tout hébergement statique.

## Ce que vous trouverez
- **Site complet clé en main** : pages "Accueil", "Services", "Réalisations" et "Atelier" déjà mises en forme pour présenter l’offre, l’expertise et les atouts du garage.
- **Charte premium** : typographies élégantes, palette sombre et dorée, blocs structurés (héros, grilles de services, avant/après, FAQ, CTA WhatsApp).
- **Navigation responsive** : menu hamburger, ancrages internes, CTA en évidence sur mobile et desktop.
- **Performances et compatibilité** : aucun build requis, fonctionne sur GitHub Pages, Netlify, Vercel ou un bucket S3.

## Structure du projet
```
/                  # Racine du site statique
├─ index.html      # Page d'accueil avec héro, services phares, réalisations et FAQ
├─ nos-services.html   # Détails des prestations (réparations, reprises intégrales, detailing, restauration)
├─ realisations.html   # Galerie avant/après pour mettre en avant les projets
├─ atelier.html        # Présentation des équipements et de la méthode de travail
├─ style.css           # Styles globaux et composants (héros, services, FAQ, footer, responsive)
├─ js/
│  └─ script.js        # Menu mobile, verrouillage du scroll, interactions de base
└─ images/             # Visuels (héros, services, réalisations, favicon)
```

## Personnalisation rapide
1. **Coordonnées & CTA**  
   - Remplacez le placeholder `[NUMERO]` dans les liens WhatsApp des pages HTML par le numéro du garage (format international sans espaces).  
   - Mettez à jour l’adresse, l’email et le lien Google Maps dans la section contact.
2. **Textes & métadonnées**  
   - Ajustez les titres, sous-titres et balises `<meta name="description">` pour refléter votre positionnement local (ville, marques suivies, garanties).  
   - Adaptez les FAQ : délais moyens, garanties peinture, gestion assurance, marques de peinture utilisées.
3. **Visuels**  
   - Remplacez les fichiers de `images/` par vos photos. Préférez WebP/AVIF ou JPEG haute qualité.  
   - Conservez des ratios proches pour éviter de casser les mises en page (blocs avant/après, grilles de services).
4. **Identité visuelle**  
   - Modifiez la palette et les typographies dans `style.css`. Les classes sont organisées par section pour faciliter les ajustements.  
   - Mettez à jour le favicon dans `images/` si nécessaire.

## Mise en ligne
- **Prévisualisation locale** : ouvrez `index.html` dans votre navigateur ou utilisez une extension de type Live Server pour recharger automatiquement. Aucun serveur ni dépendance n’est requis.  
- **GitHub Pages** : poussez la branche principale et activez Pages sur le dossier racine.  
- **Netlify / Vercel / S3** : déposez simplement le dossier ; aucun build à configurer.

## Bonnes pratiques SEO & qualité
- Renseignez systématiquement les attributs `alt` des images lors de vos remplacements et utilisez des noms de fichiers explicites.  
- Compressez les visuels (objectif : < 200 Ko pour les images clés) pour préserver les temps de chargement.  
- Vérifiez la hiérarchie des titres (H1/H2/H3) et les metas sur chaque page pour le référencement local.  
- Testez l’affichage mobile (≤ 768 px) et desktop après modification des visuels ou des CTA.  
- Ajoutez éventuellement Google Analytics ou une solution d’analytics sans tracker lourd si vous avez besoin de mesure d’audience.

## Support et évolutions
Pour aller plus loin (prise de rendez-vous en ligne, blog d’actualités, suivi de projet client), dupliquez le dépôt et ajoutez vos propres sections ou intégrations.
