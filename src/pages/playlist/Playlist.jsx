import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"

import { Context } from "../../Context"

import playlistTracks from '../home/PlaylistMusic'

import MusicCard from "./Cards"

import playIcon from  '../../assets/icons/play-new.svg'
import collectionIcon from '../../assets/icons/music-square-add.svg'
import heartIcon from '../../assets/icons/red-heart.svg'

function Playlist(){
    const {playlistId} = useParams();
    const {setPlaylistBG, playlistTitle, playlistDescription} = useContext(Context)


    const [tracks, setTracks] = useState([])
    const [currentPlaylist, setCurrentPlaylist] = useState([])

   
    useEffect(()=>{
         //Get the playlist that matches the Id
        const current = playlistTracks.filter(item => item.id == playlistId)
        setTracks(current[0].item)
        setCurrentPlaylist(current[0])
    }, [])

    //Set the background for the playlist
    setPlaylistBG(currentPlaylist.images)

    let musicTracks = tracks.map(item => {
        return(
            <MusicCard 
                key={item.key}
                img = {item.images.coverart}
                title={item.title}
                musicCategory={'Single'}
                duration={'0:30'}
                artist={item.subtitle}

            />
        )
    })
    return(
            <section className="w-full text-white">
                <div className="flex lg:items-end flex-col lg:flex-row mb-6 lg:mb-12">
                    <img src={currentPlaylist.images} alt="banner image" className="mb-6 lg:mb-0 lg:mr-7 w-full lg:w-[18rem] rounded-[35px]" />
                    <article>
                        <h4 className="text-4xl font-bold mb-2 text-[#A4C7C6]">{currentPlaylist.name}</h4>
                        <p className="text-sm text-[#EFEEE0] mb-2.5 max-w-[33rem]">{currentPlaylist.description}</p>
                        <p className="text-sm text-[#EFEEE0]">10 songs ~ 1hr+</p>
                        <div className="flex mt-6 lg:mt-10">
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
    )
}

export default Playlist