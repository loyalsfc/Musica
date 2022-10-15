import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/home/Home'
import Playlist from './pages/playlist/Playlist'
import Collection from './pages/collection/Collection'
import Player from './components/player/Player'

import leadImage from './assets/images/Lead-image.png'

function App() {
  const styles = {
    background: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${leadImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="bg-primary-dark" style={styles}>
      <Player />
      <div className='container mx-auto'>
        <Header />
        {/* <Home /> */}
        {/* <Playlist /> */}
        <Collection />
      </div>
    </div>
  )
}

export default App
