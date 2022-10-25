import { Outlet } from 'react-router-dom'

import { useState, useContext } from 'react'
import { Context } from './Context'
import Header from './components/Header/Header'
import SideNav from './components/sideNav/SideNav'
import Player from './components/player/Player'

function App() {
  const {playlistBG} = useContext(Context)
  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${playlistBG})`,
  }

  return (
    <div className="px-6 lg:px-0 bg-primary-dark bg-no-repeat bg-cover bg-center"  style={styles}>
      <Player />
      <div className='container mx-auto'>
        <Header />
        <main className="flex">
            <SideNav />
            <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
