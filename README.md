# Rasmote — Site fan non officiel

Écrin web dédié à la créatrice YouTube **Rasmote** (`@Calissia.Rasmote`) et à sa
communauté K-pop : accueil spectaculaire, bibliothèque vidéo cherchable, univers
K-pop et espaces communautaires.

> ⚠️ **Site fan non officiel.** Réalisé par des fans, sans affiliation avec Rasmote,
> YouTube ou les artistes cités. Tous les textes, vidéos et liens sont factuels ou
> configurables — aucune donnée n'est inventée.

---

## 1. Démarrage

Prérequis : **Node.js 18+** (testé avec Node 24).

```bash
npm install      # installe les dépendances
npm run dev      # lance le serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
npm run lint     # analyse statique (oxlint)
```

Le serveur de développement est accessible par défaut sur **http://localhost:5173**.

---

## 2. Structure du projet

```
src/
├─ assets/                 Images téléchargées (créditées dans le pied de page)
│  └─ thumbs/              Miniatures des vidéos YouTube
├─ data/                   ← TOUT LE CONTENU EST ICI (séparé de l'affichage)
│  ├─ media.ts             Imports centralisés des images
│  ├─ site.ts              Chaîne, navigation, artistes, liens communautaires, crédits
│  └─ videos.ts            Liste des vidéos + catégories (filtres)
├─ components/             Composants réutilisables (Navbar, Hero, VideoModal…)
├─ App.tsx                 Assemblage de la page
└─ index.css               Direction artistique (thème « backstage K-pop »)
```

---

## 3. Modifier les textes

Tous les textes « de référence » (nom de la chaîne, poignée, abonné·es, catégories)
sont dans **`src/data/site.ts`**. Les phrases d'introduction sont directement dans
les composants (`src/components/Hero.tsx`, `Community.tsx`, `Universe.tsx`) : modifie
simplement le texte entre les balises.

Exemple — changer le texte d'accueil : `src/components/Hero.tsx`, paragraphe
`hero__intro`.

## 4. Modifier / remplacer les images

1. Dépose ton fichier dans `src/assets/`.
2. Déclare-le dans **`src/data/media.ts`** (un `import` par image, puis ajoute-le à
   l'objet `media` ou `thumbnails`).
3. Utilise-le où tu veux (ex. `media.maPhoto`).
4. Pense à mettre à jour **les crédits** dans `imageCredits` (`src/data/site.ts`) si
   tu ajoutes une nouvelle photo sous licence libre.

Les images actuelles viennent de **Wikimedia Commons** (licences CC BY 3.0 / CC BY 4.0)
et sont téléchargées localement : aucun lien externe ne peut « casser ».

## 5. Ajouter une vidéo

Ouvre **`src/data/videos.ts`** et ajoute une entrée :

```ts
{
  id: 'IDENTIFIANT_YOUTUBE',   // les 11 caractères après v= ou /shorts/
  title: 'Titre exact de la vidéo',
  views: 1234,                 // facultatif
  date: '2026-10-12',          // facultatif (ISO)
  dateLabel: '12 octobre 2026',// facultatif (affiché tel quel)
  artist: 'GROUPE · Titre',    // facultatif
  tags: ['edits'],             // 'edits' ou 'chain' (voir `categories`)
  duration: '0:42',            // facultatif — masqué tant qu'il n'est pas renseigné
}
```

Puis place la miniature verticale dans `src/assets/thumbs/` et référence-la dans
`thumbnails` (`src/data/media.ts`). La date et la durée ne s'affichent **que** si
elles sont renseignées.

Pour créer une nouvelle catégorie de filtre, ajoute-la dans `categories` — le filtre
n'apparaîtra automatiquement que s'il correspond à au moins une vidéo.

## 6. Changer les liens communautaires

Dans **`src/data/site.ts`**, section `communityLinks`. Seuls les liens marqués
`confirmed: true` sont affichés. Pour ajouter un Discord / Instagram / TikTok :

```ts
{
  id: 'discord',
  label: 'Le serveur Discord',
  description: 'Discussion, sessions et annonces.',
  href: 'https://discord.gg/XXXXXXXX',
  confirmed: true,          // ← passe à true uniquement avec un lien vérifié
  cta: 'Rejoindre',
}
```

Tant qu'aucun autre lien n'est confirmé, le site l'indique honnêtement au lieu
d'inventer un compte.

---

## 7. Crédits images

Photographies issues de Wikimedia Commons, réutilisables avec attribution :

| Sujet | Auteur | Licence |
| --- | --- | --- |
| KATSEYE (Music Bank, 2024) | K-POPIT 케이팝잇 | CC BY 3.0 |
| KATSEYE (2024) | K-POPIT 케이팝잇 | CC BY 3.0 |
| NewJeans (Music Bank, 2022) | K-POPIT 케이팝잇 | CC BY 3.0 |
| BABYMONSTER — DRIP (2024) | SBS Radio | CC BY 3.0 |
| BABYMONSTER à Seattle (2025) | David Lee | CC BY 4.0 |

Photo de profil et bannière : chaîne YouTube de Rasmote (usage fan). Les titres,
miniatures et identifiants des vidéos appartiennent à leur autrice.

---

## 8. Déploiement gratuit (GitHub Pages)

Le projet est prêt pour GitHub Pages (le `base` est réglé sur `/rasmote-fan-site/`
en production dans `vite.config.ts`).

```bash
npm run build                 # génère dist/
git add -A && git commit -m "…"
git push                      # pousse le code
npx gh-pages -d dist -b gh-pages   # publie dist/ sur la branche gh-pages
```

Puis active Pages sur la branche `gh-pages` (racine). Si tu renommes le dépôt,
pense à mettre à jour le `base` dans `vite.config.ts`.

---

## 9. Ce qui n'a pas pu être récupéré

Ces informations n'étaient pas accessibles publiquement et restent **configurables**
(rien n'est inventé à leur place) :

- **Bio complète** de la chaîne (seul « Bonjour ❤️ » est visible) → champ `bio`
  dans `src/data/site.ts`.
- **Dates exactes** de certaines vidéos et **durées** → champs optionnels `date`
  / `duration` dans `videos.ts` (masqués tant qu'ils sont vides).
- **Autres réseaux** (Discord, Instagram, TikTok…) : aucun lien public confirmé →
  à ajouter dans `communityLinks`.
- Le **groupe favori** de Rasmote n'est pas public : le site présente uniquement
  les artistes réellement présents dans ses vidéos (KATSEYE, NewJeans, BABYMONSTER).

## 10. Accessibilité & qualité

Contrastes élevés, navigation clavier complète, `alt` sur les images, focus visibles,
respect de `prefers-reduced-motion`, images en `loading="lazy"` hors écran,
aucun débordement horizontal (testé à 390 / 768 / 1440 px), lecteur chargé
uniquement au clic (aucune lecture automatique à l'arrivée).
