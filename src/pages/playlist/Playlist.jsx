import { useState } from "react"

import SideNav from "../../components/sideNav/SideNav"
import MusicCard from "./Cards"
import trackDetails from "./Tracks"


import leadImage from '../../assets/images/Lead-image.png'

import playIcon from  '../../assets/icons/play-new.svg'
import collectionIcon from '../../assets/icons/music-square-add.svg'
import heartIcon from '../../assets/icons/red-heart.svg'

function Playlist(){
    const [tracks, setMusicTracks] = useState(trackDetails.items)
    const styles = {
        background: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${leadImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    let musicTracks = tracks.map((item, index) => {
        return(
            <MusicCard 
                key={index}
                img = {item.track.album.images[1].url}
                title={item.track.name}
                musicCategory={item.track.album.album_type}
                duration={item.track.duration_ms}
                artist={item.track.artists[0].name}
                // , favoriteIcon, musicCategory, duration
            
            />
        )
    })
    return(
        <main className="flex text-white">
            <SideNav />
            <section className="w-full">
                <div className="flex items-end mb-12">
                    <img src={leadImage} width="288" alt="banner image" className="mr-7" />
                    <article>
                        <h4 className="text-4xl font-bold mb-2 text-[#A4C7C6]">Tomorrows tunes</h4>
                        <p className="text-sm text-[#EFEEE0] mb-2.5 max-w-[33rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur repellat ullam et nesciunt officiis itaque asperiores consectetur eos tempore.</p>
                        <p className="text-sm text-[#EFEEE0]">10 songs ~ 1hr+</p>
                        <div className="flex mt-10">
                        <button className="buttons-play">
                            <img src={playIcon} className="mr-3" /> Play all
                        </button>
                        <button className="buttons-play">
                            <img src={collectionIcon} className="mr-3" /> Add to collection
                        </button>
                        <button className="buttons-play">
                            <img src={heartIcon} />
                        </button>
                    </div>
                    </article>
                </div>
                <div>
                    {musicTracks}
                </div>
            </section>
        </main>
    )
}

export default Playlist

// background: linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(Indieground's Weekly Inspiration Dose #96.jpg);