import { thumbnails } from './media'

/**
 * Catégories réellement représentées dans les vidéos de la chaîne.
 * On n'ajoute un filtre que s'il correspond à au moins une vidéo réelle.
 */
export type CategoryId = 'edits' | 'chain'

export interface Category {
  id: CategoryId
  label: string
  description: string
}

export const categories: Category[] = [
  {
    id: 'edits',
    label: 'Édits K-pop',
    description: 'Montages et edits autour des groupes et des titres du moment.',
  },
  {
    id: 'chain',
    label: 'Vie de la chaîne',
    description: "Coulisses, changements de thème et réponses à la communauté.",
  },
]

export interface Video {
  /** Identifiant YouTube — sert à construire l'aperçu et le lecteur intégré. */
  id: string
  /** Titre exact de la vidéo tel qu'il apparaît sur YouTube. */
  title: string
  /** Nombre de vues (approximatif, relevé sur la chaîne). */
  views?: number
  /** Date de publication au format ISO (AAAA-MM-JJ), si connue. */
  date?: string
  /** Libellé de date en français, si connu. */
  dateLabel?: string
  /** Artiste / titre K-pop présent dans la vidéo. */
  artist?: string
  /** Catégories auxquelles la vidéo appartient. */
  tags: CategoryId[]
  /** Vidéo mise en avant sur la page d'accueil. */
  featured?: boolean
  /** Mise en avant comme nouveauté (publication très récente). */
  isNew?: boolean
  /**
   * Durée au format "m:ss". Laisser vide tant qu'elle n'est pas connue :
   * l'affichage de la durée est optionnel.
   */
  duration?: string
}

export const videos: Video[] = [
  {
    id: 'ZzIgi6KXp_o',
    title: 'Mon edit des katseye ✨⭐🌟',
    views: 2200,
    date: '2026-07-22',
    dateLabel: '22 juillet 2026',
    artist: 'KATSEYE',
    tags: ['edits'],
    featured: true,
  },
  {
    id: 'U8CLNYXihTU',
    title: '𝒯ℴ𝓃 𝓂ℴ𝒾𝓈 𝓉ℴ𝓃 𝒾𝒹ℴ𝓁 #𝓀-𝓅ℴ𝓅',
    views: 427,
    date: '2026-10-10',
    dateLabel: '10 octobre 2026',
    artist: 'NewJeans',
    tags: ['edits'],
  },
  {
    id: '2Ls8AhzCCLg',
    title: '#edit #katseyeedit #kpop ℰ𝒹𝒾𝓉 𝒾𝓂𝓅ℴ𝓈𝓈𝒾𝒷𝓁ℯ à 𝓈𝓊𝒾𝓋𝓇ℯ 😅😂✮✮',
    views: 1158,
    date: '2026-10-08',
    dateLabel: '8 octobre 2026',
    artist: 'KATSEYE · Gnarly',
    tags: ['edits'],
  },
  {
    id: '3eptOk8wkuM',
    title:
      "𝒥ℯ 𝓋𝒶𝒾𝓈 𝓇é𝓅ℴ𝓃𝒹𝓇ℯ à 𝓋ℴ𝓈 𝒸ℴ𝓂𝓂ℯ𝓃𝓉𝒶𝒾𝓇ℯ𝓈 #𝓂'ℯ𝓉𝒶𝒾𝓉𝒹ℯ𝓈𝒸ℴ𝓂𝓈 #𝒸ℴ𝓁𝓁𝒶𝒷 🍡",
    views: 1112,
    date: '2026-10-08',
    dateLabel: '8 octobre 2026',
    artist: 'BABYMONSTER · DRIP',
    tags: ['chain'],
  },
  {
    id: 'iUgc_grkYgs',
    title: '#haloween je change ma chaîne on passe en mode Halloween 🎃',
    views: 74,
    artist: 'Habillage de la chaîne',
    tags: ['chain'],
    isNew: true,
  },
]

export function getThumbnail(id: string): string | undefined {
  return thumbnails[id]
}

/** Formate un nombre de vues à la française : 2200 -> « 2,2 k ». */
export function formatViews(views?: number): string | null {
  if (views === undefined) return null
  if (views >= 1000) {
    const k = views / 1000
    const rounded = k >= 10 ? Math.round(k).toString() : k.toFixed(1).replace('.', ',')
    return `${rounded} k vues`
  }
  return `${views} vue${views > 1 ? 's' : ''}`
}

export function getFeatured(): Video {
  return videos.find((v) => v.featured) ?? videos[0]
}
