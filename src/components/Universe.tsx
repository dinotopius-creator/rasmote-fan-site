import { artists, channel } from '../data/site'
import { media } from '../data/media'
import Reveal from './Reveal'
import { SparkIcon } from './Icons'

export default function Universe() {
  return (
    <section id="univers" className="universe section" aria-labelledby="univers-title">
      <div className="universe__bg" aria-hidden="true">
        <img src={media.babymonsterSeattle} alt="" width={1280} height={720} loading="lazy" />
      </div>

      <div className="container">
        <Reveal className="universe__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Univers K-pop
          </p>
          <h2 id="univers-title" className="section__title">
            L'écrin dans lequel elle <em>crée</em>
          </h2>
          <p className="section__lead">
            Le style de Rasmote, c'est le backstage : lumières de scène, couleurs saturées et le
            meilleur du son K-pop. Voici les artistes qui traversent réellement ses vidéos —
            repérés à partir de ses titres et des crédits musicaux.
          </p>
          <p className="universe__disclaimer">
            <SparkIcon className="icon" />
            Aucun groupe n'est présenté comme « favori » : Rasmote n'en a pas rendu un public.
            Place à ses influences réelles.
          </p>
        </Reveal>

        <div className="artist-grid">
          {artists.map((artist, index) => (
            <Reveal key={artist.name} delay={index * 90} className={`artist-card artist-card--${index}`}>
              <figure className="artist-card__figure">
                <img
                  src={artist.image}
                  alt={`Photo du groupe ${artist.name}`}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="artist-card__credit">
                  <a href={artist.creditUrl} target="_blank" rel="noopener noreferrer">
                    {artist.credit}
                  </a>
                </figcaption>
              </figure>
              <div className="artist-card__body">
                <h3 className="artist-card__name">{artist.name}</h3>
                <p className="artist-card__note">{artist.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="universe__strip" delay={60}>
          <div>
            <strong>Des edits qui bougent</strong>
            <p>Montages courts, synchronisés sur les hits du moment et taillés pour les Shorts.</p>
          </div>
          <div>
            <strong>Une chaîne vivante</strong>
            <p>Habillage qui change au fil des saisons, de l'actualité et de l'humeur du moment.</p>
          </div>
          <div>
            <strong>Une communauté qui parle</strong>
            <p>Rasmote répond aux commentaires et fait vivre sa chaîne avec celles et ceux qui la suivent.</p>
          </div>
        </Reveal>

        <Reveal className="universe__cta">
          <a className="btn btn--outline" href={channel.videosUrl} target="_blank" rel="noopener noreferrer">
            Explorer toutes les vidéos sur YouTube
          </a>
        </Reveal>
      </div>
    </section>
  )
}
