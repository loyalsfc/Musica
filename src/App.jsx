import { Outlet } from 'react-router-dom'

import { useState, useContext } from 'react'
import { Context } from './Context'
import Header from './components/Header/Header'
import SideNav from './components/sideNav/SideNav'
import Home from './pages/home/Home'
import Playlist from './pages/playlist/Playlist'
import Collection from './pages/collection/Collection'
import Player from './components/player/Player'

import leadImage from './assets/images/Lead-image.png'

function App() {
  const {playlistBG} = useContext(Context)
  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${playlistBG})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center'
  }

  console.log(playlistBG)

  return (
    <div className="bg-primary-dark bg-no-repeat bg-cover bg-center"  style={styles}>
      <Player />
      <div className='container mx-auto'>
        <Header />
        <main className="flex">
            {/* <Player /> */}
            <SideNav />
            <Outlet />
        </main>


        {/* <Home /> */}
        {/* <Playlist /> */}
        {/* <Collection /> */}
      </div>
    </div>
  )
}

export default App
