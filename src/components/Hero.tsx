import { channel } from '../data/site'
import { media } from '../data/media'
import { ArrowDownIcon, SparkIcon, YouTubeIcon } from './Icons'

export default function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />
      <div className="hero__glow hero__glow--pink" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">
            <SparkIcon className="icon" />
            Site fan non officiel
          </p>

          <p className="hero__kicker">{channel.youtubeName} · L'univers K-pop de Calissia</p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">{channel.brand}</span>
            <span className="hero__title-sub">Backstage de concert</span>
          </h1>

          <p className="hero__greeting">
            <span className="hero__greeting-emoji" aria-hidden="true">ᰔ</span>
            {channel.greeting}
          </p>

          <p className="hero__intro">
            Bienvenue dans le backstage. Rasmote monte des edits K-pop pleins d'énergie —
            KATSEYE, NewJeans, BABYMONSTER — et ouvre les coulisses de sa chaîne avec sa
            communauté. Ici, on met en lumière ses vidéos, son univers et les personnes qui
            la suivent.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#videos">
              Découvrir les vidéos
              <ArrowDownIcon className="icon" />
            </a>
            <a
              className="btn btn--outline"
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="icon" />
              Voir la chaîne YouTube
            </a>
          </div>

          <ul className="hero__stats">
            <li>
              <strong>{channel.subscribers}</strong>
              <span>abonnés</span>
            </li>
            <li>
              <strong>{channel.videoCount}</strong>
              <span>vidéos</span>
            </li>
            <li className="hero__stats-wide">
              <strong>KATSEYE · NewJeans · BABYMONSTER</strong>
              <span>dans ses edits</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <figure className="hero__photo hero__photo--main">
            <img
              src={media.katseyeMusicbank}
              alt=""
              width={1590}
              height={964}
              loading="eager"
              fetchPriority="high"
            />
          </figure>
          <figure className="hero__photo hero__photo--a">
            <img src={media.babymonsterSeattle} alt="" width={1280} height={720} loading="lazy" />
          </figure>
          <figure className="hero__photo hero__photo--b">
            <img src={media.newjeansFashionWeek} alt="" width={1669} height={727} loading="lazy" />
          </figure>
          <span className="hero__sticker">K-POP</span>
        </div>
      </div>

      <a className="hero__scroll" href="#videos">
        <span>Faire défiler</span>
        <ArrowDownIcon className="icon" />
      </a>
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          <span>Édits K-pop</span><span aria-hidden="true">★</span>
          <span>Shorts</span><span aria-hidden="true">★</span>
          <span>Coulisses</span><span aria-hidden="true">★</span>
          <span>Communauté</span><span aria-hidden="true">★</span>
          <span>Édits K-pop</span><span aria-hidden="true">★</span>
          <span>Shorts</span><span aria-hidden="true">★</span>
          <span>Coulisses</span><span aria-hidden="true">★</span>
          <span>Communauté</span><span aria-hidden="true">★</span>
        </div>
      </div>
    </section>
  )
}
