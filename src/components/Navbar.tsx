import { useEffect, useState } from 'react'
import { channel, navItems } from '../data/site'
import { media } from '../data/media'
import { CloseIcon, MenuIcon, YouTubeIcon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(navItems[0].id)
  const [scrolled, setScrolled] = useState(false)

  // Scroll-spy : met en surbrillance la section visible.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Léger changement d'état après défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille le défilement et gère la touche Échap quand le menu est ouvert.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="navbar__inner container">
        <a className="brand" href="#accueil" onClick={() => setOpen(false)}>
          <span className="brand__avatar" aria-hidden="true">
            <img src={media.channelAvatar} alt="" width={40} height={40} />
          </span>
          <span className="brand__text">
            <span className="brand__name">{channel.brand}</span>
            <span className="brand__handle">{channel.handle}</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Navigation principale">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`navbar__link${activeId === item.id ? ' is-active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--ghost navbar__cta" href={channel.url} target="_blank" rel="noopener noreferrer">
          <YouTubeIcon className="icon" />
          <span>YouTube</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="icon" /> : <MenuIcon className="icon" />}
        </button>
      </div>

      <div id="menu-mobile" className="mobile-menu" hidden={!open}>
        <nav aria-label="Navigation mobile">
          <ul className="mobile-menu__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`mobile-menu__link${activeId === item.id ? ' is-active' : ''}`}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--primary mobile-menu__cta"
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <YouTubeIcon className="icon" />
            Voir la chaîne YouTube
          </a>
        </nav>
      </div>
    </header>
  )
}
