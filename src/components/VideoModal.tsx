import { useEffect, useRef } from 'react'
import type { Video } from '../data/videos'
import { formatViews } from '../data/videos'
import { CloseIcon, ExternalIcon } from './Icons'

interface VideoModalProps {
  video: Video | null
  onClose: () => void
}

const FOCUSABLE =
  'a[href], button:not([disabled]), iframe, input, [tabindex]:not([tabindex="-1"])'

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!video) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const bodyOverflow = document.body.style.overflow
    const bodyPadding = document.body.style.paddingRight

    // Compense la disparition de la barre de défilement.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`

    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el.tagName === 'IFRAME',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || active === dialog)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = bodyOverflow
      document.body.style.paddingRight = bodyPadding
      previouslyFocused?.focus?.()
    }
  }, [video, onClose])

  if (!video) return null

  const views = formatViews(video.views)
  const metaLine = [views, video.dateLabel].filter(Boolean).join(' · ')
  // `origin` aide YouTube à valider l'intégration (évite l'erreur 153 avec une
  // politique de référent stricte). Calculé à l'exécution : marche en local et en ligne.
  const origin = window.location.origin
  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${video.id}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1` +
    `&origin=${encodeURIComponent(origin)}`
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <div
      className="modal"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        <div className="modal__header">
          <div className="modal__heading">
            <h2 id="video-modal-title" className="modal__title">
              {video.title}
            </h2>
            {metaLine ? <p className="modal__meta">{metaLine}</p> : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Fermer la vidéo"
          >
            <CloseIcon className="icon" />
          </button>
        </div>

        <div className="modal__player">
          <iframe
            className="modal__iframe"
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="modal__footer">
          <a className="btn btn--primary" href={watchUrl} target="_blank" rel="noopener noreferrer">
            <ExternalIcon className="icon" />
            Regarder sur YouTube
          </a>
          <p className="modal__hint">
            Lecture via youtube-nocookie.com. Si un bloqueur de publicité ou une politique de
            référent stricte empêche la lecture (erreur 153), le bouton ci-contre ouvre YouTube dans
            un nouvel onglet.
          </p>
        </div>
      </div>
    </div>
  )
}
