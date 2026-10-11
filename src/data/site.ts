import { media } from './media'

export const channel = {
  /** Nom court utilisé pour l'identité visuelle du site. */
  brand: 'Rasmote',
  /** Nom d'affichage exact de la chaîne YouTube. */
  youtubeName: 'ᰔℛ𝒶𝓈𝓂ℴ𝓉ℯᰔ',
  handle: '@Calissia.Rasmote',
  url: 'https://www.youtube.com/@Calissia.Rasmote',
  shortsUrl: 'https://www.youtube.com/@Calissia.Rasmote/shorts',
  videosUrl: 'https://www.youtube.com/@Calissia.Rasmote/videos',
  /** Ajoute ?sub_confirmation=1 pour proposer l'abonnement en un clic. */
  subscribeUrl: 'https://www.youtube.com/@Calissia.Rasmote?sub_confirmation=1',
  /** Salutation présente dans la bio publique de la chaîne. */
  greeting: 'Bonjour ❤️',
  tagline: 'Édits K-pop, backstage et bonne humeur',
  /** Statistiques publiques relevées sur la chaîne (mise à jour manuelle). */
  subscribers: 40,
  videoCount: 5,
  /** Bio complète non récupérée : à compléter ici si besoin. */
  bio: '',
}

export interface NavItem {
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'videos', label: 'Vidéos' },
  { id: 'univers', label: 'Univers K-pop' },
  { id: 'communaute', label: 'Communauté' },
]

export interface Artist {
  name: string
  image: string
  note: string
  credit: string
  creditUrl: string
}

/**
 * Artistes réellement présents dans les contenus de la chaîne
 * (identifiés à partir des titres et des crédits musicaux des vidéos).
 * Aucun n'est présenté comme « favori » : ce sont ceux qui traversent ses édits.
 */
export const artists: Artist[] = [
  {
    name: 'KATSEYE',
    image: media.katseyeIn2024,
    note: "Le groupe qui revient le plus dans ses edits, du clip de « Gnarly » à ses montages les plus vus.",
    credit: 'K-POPIT 케이팝잇 · CC BY 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:KATSEYE_in_2024.jpg',
  },
  {
    name: 'NewJeans',
    image: media.newjeans2022,
    note: "Présentes dans ses vidéos façon « ton mois ton idol », avec des sons qui tournent en boucle.",
    credit: 'K-POPIT 케이팝잇 · CC BY 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:20220804_%EB%89%B4%EC%A7%84%EC%8A%A4(NewJeans),_%EC%B2%AB_%EB%AE%A4%EB%B1%85_%EC%B6%9C%EA%B7%BC%EA%B8%B8.jpg',
  },
  {
    name: 'BABYMONSTER',
    image: media.babymonsterDrip,
    note: "« DRIP » accompagne ses réponses aux commentaires — l'énergie parfaite pour un edit.",
    credit: 'SBS Radio · CC BY 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:BabyMonster_Promoting_drip_on_2024112.png',
  },
]

export interface CommunityLink {
  id: string
  label: string
  description: string
  href: string
  /** true uniquement si le lien est confirmé publiquement. */
  confirmed: boolean
  cta: string
}

/**
 * Espaces communautaires confirmés. Seule la chaîne YouTube est vérifiée à ce jour.
 * Pour ajouter un Discord / Instagram / TikTok, complète cette liste avec le lien
 * exact et `confirmed: true` : le bloc correspondant apparaîtra automatiquement.
 */
export const communityLinks: CommunityLink[] = [
  {
    id: 'youtube',
    label: 'La chaîne YouTube',
    description: 'Nouveaux edits, Shorts et coulisses : tout part de là.',
    href: channel.url,
    confirmed: true,
    cta: "Voir la chaîne",
  },
  {
    id: 'shorts',
    label: 'Les Shorts',
    description: "Le format préféré de Rasmote : rapide, coloré, addictif.",
    href: channel.shortsUrl,
    confirmed: true,
    cta: 'Ouvrir les Shorts',
  },
  {
    id: 'comments',
    label: 'Les commentaires',
    description: "Rasmote répond à sa communauté : laisse une trace sous ses vidéos.",
    href: channel.url,
    confirmed: true,
    cta: 'Participer',
  },
]

export interface ImageCredit {
  label: string
  author: string
  license: string
  url: string
}

export const imageCredits: ImageCredit[] = [
  {
    label: 'KATSEYE au Music Bank (2024)',
    author: 'K-POPIT 케이팝잇',
    license: 'CC BY 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:%EC%BA%A3%EC%B8%A0%EC%95%84%EC%9D%B4(KATSEYE)_%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_%EC%B6%9C%EA%B7%BC%EA%B8%B8,_%EB%B6%84%EC%9C%84%EA%B8%B0%EB%A1%9C_%EC%98%AC%ED%82%AC.jpg',
  },
  {
    label: 'KATSEYE (2024)',
    author: 'K-POPIT 케이팝잇',
    license: 'CC BY 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:KATSEYE_in_2024.jpg',
  },
  {
    label: 'NewJeans au Music Bank (2022)',
    author: 'K-POPIT 케이팝잇',
    license: 'CC BY 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:20220804_%EB%89%B4%EC%A7%84%EC%8A%A4(NewJeans),_%EC%B2%AB_%EB%AE%A4%EB%B1%85_%EC%B6%9C%EA%B7%BC%EA%B8%B8.jpg',
  },
  {
    label: 'BABYMONSTER — DRIP (2024)',
    author: 'SBS Radio',
    license: 'CC BY 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:BabyMonster_Promoting_drip_on_2024112.png',
  },
  {
    label: 'BABYMONSTER en concert à Seattle (2025)',
    author: 'David Lee',
    license: 'CC BY 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Babymonster_Seattle.jpg',
  },
]
