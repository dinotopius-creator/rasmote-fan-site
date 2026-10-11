import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedVideo from './components/FeaturedVideo'
import VideoLibrary from './components/VideoLibrary'
import Universe from './components/Universe'
import Community from './components/Community'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import { getFeatured } from './data/videos'
import type { Video } from './data/videos'

export default function App() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  const handlePlay = useCallback((video: Video) => setActiveVideo(video), [])
  const handleClose = useCallback(() => setActiveVideo(null), [])

  const featured = getFeatured()

  return (
    <>
      <a className="skip-link" href="#videos">
        Aller à la bibliothèque vidéo
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <FeaturedVideo video={featured} onPlay={handlePlay} />
        <VideoLibrary onPlay={handlePlay} />
        <Universe />
        <Community />
      </main>
      <Footer />
      <VideoModal video={activeVideo} onClose={handleClose} />
    </>
  )
}
