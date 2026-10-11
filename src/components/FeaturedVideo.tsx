import type { Video } from '../data/videos'
import { formatViews, getThumbnail } from '../data/videos'
import { PlayIcon, YouTubeIcon } from './Icons'
import Reveal from './Reveal'

interface FeaturedVideoProps {
  video: Video
  onPlay: (video: Video) => void
}

export default function FeaturedVideo({ video, onPlay }: FeaturedVideoProps) {
  const thumbnail = getThumbnail(video.id)
  const views = formatViews(video.views)
  const meta = [views, video.dateLabel].filter(Boolean).join(' · ')
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <section className="featured section" aria-labelledby="featured-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            À la une
          </p>
          <h2 id="featured-title" className="section__title">
            Le montage qui a fait <em>décoller</em> la chaîne
          </h2>
        </Reveal>

        <div className="featured__layout">
          <Reveal className="featured__visual-wrap">
            <button
              type="button"
              className="featured__visual"
              onClick={() => onPlay(video)}
              aria-label={`Lire la vidéo : ${video.title}`}
            >
              {thumbnail ? (
                <img src={thumbnail} alt="" width={1080} height={1920} loading="lazy" decoding="async" />
              ) : null}
              <span className="featured__scrim" aria-hidden="true" />
              <span className="featured__play" aria-hidden="true">
                <PlayIcon className="icon" />
              </span>
            </button>
          </Reveal>

          <Reveal className="featured__content" delay={80}>
            {video.artist ? <span className="tag">{video.artist}</span> : null}
            <h3 className="featured__title">{video.title}</h3>
            {meta ? <p className="featured__meta">{meta}</p> : null}
            <p className="featured__desc">
              L'edit le plus regardé de Rasmote : un montage rythmé sur l'univers KATSEYE qui
              résume bien le ton de la chaîne — coloré, rapide et généreux.
            </p>
            <div className="featured__actions">
              <button type="button" className="btn btn--primary" onClick={() => onPlay(video)}>
                <PlayIcon className="icon" />
                Lire maintenant
              </button>
              <a
                className="btn btn--outline"
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="icon" />
                Regarder sur YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
