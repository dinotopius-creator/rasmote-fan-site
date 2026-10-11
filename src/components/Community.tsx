import { channel, communityLinks } from '../data/site'
import { media } from '../data/media'
import Reveal from './Reveal'
import { ExternalIcon, YouTubeIcon } from './Icons'

export default function Community() {
  const confirmed = communityLinks.filter((link) => link.confirmed)

  return (
    <section id="communaute" className="community section" aria-labelledby="communaute-title">
      <div className="container community__inner">
        <Reveal className="community__content">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Communauté
          </p>
          <h2 id="communaute-title" className="section__title">
            Rejoins le <em>backstage</em>
          </h2>
          <p className="section__lead">
            Toute la bande se retrouve autour de la chaîne. Abonne-toi pour ne rien rater, regarde
            les Shorts et laisse un commentaire : Rasmote lit et répond.
          </p>

          <div className="community__links">
            {confirmed.map((link) => (
              <a
                key={link.id}
                className="community-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="community-link__body">
                  <span className="community-link__label">{link.label}</span>
                  <span className="community-link__desc">{link.description}</span>
                </span>
                <span className="community-link__cta">
                  {link.cta}
                  <ExternalIcon className="icon" />
                </span>
              </a>
            ))}
          </div>

          <div className="community__actions">
            <a
              className="btn btn--primary"
              href={channel.subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="icon" />
              S'abonner à la chaîne
            </a>
          </div>

          <p className="community__note">
            D'autres espaces (Discord, Instagram, TikTok…) ne sont pas affichés ici car leurs liens
            ne sont pas confirmés publiquement. Ils s'ajouteront depuis le fichier de configuration
            dès qu'ils seront connus.
          </p>
        </Reveal>

        <Reveal className="community__card" delay={90}>
          <img
            className="community__avatar"
            src={media.channelAvatar}
            alt={`Photo de profil de la chaîne ${channel.youtubeName}`}
            width={120}
            height={120}
          />
          <p className="community__name">{channel.youtubeName}</p>
          <p className="community__handle">{channel.handle}</p>
          <dl className="community__stats">
            <div>
              <dt>Abonnés</dt>
              <dd>{channel.subscribers}</dd>
            </div>
            <div>
              <dt>Vidéos</dt>
              <dd>{channel.videoCount}</dd>
            </div>
          </dl>
          <a className="btn btn--ghost community__card-cta" href={channel.url} target="_blank" rel="noopener noreferrer">
            Ouvrir la chaîne
          </a>
        </Reveal>
      </div>
    </section>
  )
}
