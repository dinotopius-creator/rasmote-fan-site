import { useMemo, useState } from 'react'
import type { CategoryId, Video } from '../data/videos'
import { categories, videos } from '../data/videos'
import VideoCard from './VideoCard'
import Reveal from './Reveal'
import { SearchIcon } from './Icons'

type FilterId = 'all' | CategoryId

interface VideoLibraryProps {
  onPlay: (video: Video) => void
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

export default function VideoLibrary({ onPlay }: VideoLibraryProps) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterId>('all')

  // On n'affiche que les filtres correspondant à de vraies vidéos.
  const filters = useMemo(() => {
    const list: { id: FilterId; label: string; count: number }[] = [
      { id: 'all', label: 'Tout', count: videos.length },
    ]
    for (const category of categories) {
      const count = videos.filter((video) => video.tags.includes(category.id)).length
      if (count > 0) list.push({ id: category.id, label: category.label, count })
    }
    return list
  }, [])

  const results = useMemo(() => {
    const needle = normalize(query.trim())
    return videos.filter((video) => {
      const matchesFilter = filter === 'all' || video.tags.includes(filter)
      if (!matchesFilter) return false
      if (!needle) return true
      const haystack = normalize(`${video.title} ${video.artist ?? ''}`)
      return haystack.includes(needle)
    })
  }, [query, filter])

  const hasActiveSearch = query.trim().length > 0 || filter !== 'all'

  return (
    <section id="videos" className="library section" aria-labelledby="videos-title">
      <div className="container">
        <Reveal className="library__head">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Bibliothèque vidéo
            </p>
            <h2 id="videos-title" className="section__title">
              Toutes ses <em>vidéos</em>, au même endroit
            </h2>
            <p className="section__lead">
              Cherche un edit, un groupe, un titre. Chaque carte ouvre un lecteur intégré —
              aucun son ne se lance avant ton clic.
            </p>
          </div>
        </Reveal>

        <Reveal className="library__toolbar" delay={60}>
          <div className="search">
            <SearchIcon className="search__icon icon" />
            <label className="search__label" htmlFor="video-search">
              Rechercher une vidéo
            </label>
            <input
              id="video-search"
              type="search"
              className="search__input"
              placeholder="Rechercher un titre, une artiste…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
            />
            {hasActiveSearch ? (
              <button
                type="button"
                className="search__clear"
                onClick={() => {
                  setQuery('')
                  setFilter('all')
                }}
              >
                Réinitialiser
              </button>
            ) : null}
          </div>

          <div className="filters" role="group" aria-label="Filtrer les vidéos par catégorie">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`chip${filter === item.id ? ' is-active' : ''}`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span className="chip__count">{item.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <p className="library__count" aria-live="polite">
          {results.length} vidéo{results.length > 1 ? 's' : ''} affichée{results.length > 1 ? 's' : ''}
        </p>

        {results.length > 0 ? (
          <ul className="video-grid">
            {results.map((video, index) => (
              <li key={video.id}>
                <Reveal delay={Math.min(index, 6) * 55}>
                  <VideoCard video={video} onPlay={onPlay} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <p>Aucune vidéo ne correspond à cette recherche.</p>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => {
                setQuery('')
                setFilter('all')
              }}
            >
              Voir toutes les vidéos
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
