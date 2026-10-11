import type { Video } from '../data/videos'
import { formatViews, getThumbnail } from '../data/videos'
import { PlayIcon } from './Icons'

interface VideoCardProps {
  video: Video
  onPlay: (video: Video) => void
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const thumbnail = getThumbnail(video.id)
  const views = formatViews(video.views)
  const meta = [views, video.duration, video.dateLabel].filter(Boolean).join(' · ')

  return (
    <article className="video-card">
      <button
        type="button"
        className="video-card__button"
        onClick={() => onPlay(video)}
        aria-label={`Lire la vidéo : ${video.title}`}
      >
        <span className="video-card__media">
          {thumbnail ? (
            <img src={thumbnail} alt="" width={1080} height={1920} loading="lazy" decoding="async" />
          ) : (
            <span className="video-card__placeholder" aria-hidden="true" />
          )}
          <span className="video-card__scrim" aria-hidden="true" />
          <span className="video-card__play" aria-hidden="true">
            <PlayIcon className="icon" />
          </span>
          {video.isNew ? <span className="video-card__new">Nouveau</span> : null}
          {video.artist ? <span className="video-card__artist">{video.artist}</span> : null}
        </span>
        <span className="video-card__body">
          <span className="video-card__title">{video.title}</span>
          {meta ? <span className="video-card__meta">{meta}</span> : null}
        </span>
      </button>
    </article>
  )
}
