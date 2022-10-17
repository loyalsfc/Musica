import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import playlistTracks from '../../../tracks'

import SideNav from "../../components/sideNav/SideNav"
import MusicCard from "./Cards"
import trackDetails from "./Tracks"


import leadImage from '../../assets/images/Lead-image.png'

import playIcon from  '../../assets/icons/play-new.svg'
import collectionIcon from '../../assets/icons/music-square-add.svg'
import heartIcon from '../../assets/icons/red-heart.svg'

function Playlist(){
    const {playlistId} = useParams();

    const [tracks, setTracks] = useState([])//trackDetails.items)
    const styles = {
        background: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${leadImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    //Get the playlist that matches the Id
    const currentPlaylist = playlistTracks.playlist.filter(item => item.id == playlistId)
    setTracks('currentPlaylist[0].items')

    console.log(currentPlaylist[0].items)
    console.log(tracks)

    useEffect(()=>{
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'f28500c067msh18ae182692dc780p1c5676jsn17cbf229ab0e',
        //         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        //     }
        // };
        
        // fetch(`https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistId}&offset=0&limit=10`, options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
    }, [])

    let musicTracks = currentPlaylist.map((item, index) => {
        console.log(item)
        return(
            <MusicCard 
                key={index}
                img = {item.track.album.images[1].url}
                title={item.track.name}
                musicCategory={item.track.album.album_type}
                duration={item.track.duration_ms}
                artist={item.track.artists[0].name}

            />
        )
    })
    return(
            <section className="w-full text-white">
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
    )
}

export default Playlist

// background: linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(Indieground's Weekly Inspiration Dose #96.jpg);