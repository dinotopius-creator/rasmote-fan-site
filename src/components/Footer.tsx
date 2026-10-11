import { channel, imageCredits, navItems } from '../data/site'
import { YouTubeIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">
            {channel.brand}
            <span aria-hidden="true">.</span>
          </p>
          <p className="footer__tagline">{channel.tagline}</p>
          <a className="btn btn--ghost footer__yt" href={channel.url} target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="icon" />
            {channel.handle}
          </a>
        </div>

        <nav className="footer__nav" aria-label="Navigation de pied de page">
          <h2 className="footer__heading">Navigation</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__credits">
          <h2 className="footer__heading">Crédits images</h2>
          <ul>
            {imageCredits.map((credit) => (
              <li key={credit.url}>
                <a href={credit.url} target="_blank" rel="noopener noreferrer">
                  {credit.label}
                </a>{' '}
                — {credit.author} ({credit.license}), via Wikimedia Commons
              </li>
            ))}
          </ul>
          <p className="footer__credits-note">
            Logos, noms de groupes et marques appartiennent à leurs détenteurs respectifs.
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__disclaimer">
          Site fan non officiel, réalisé par des fans de la communauté. Non affilié à Rasmote, à
          YouTube ni aux artistes cités.
        </p>
        <a className="footer__top" href="#accueil">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  )
}
