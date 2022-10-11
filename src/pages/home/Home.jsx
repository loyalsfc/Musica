import { useEffect, useState } from 'react'

import homeIcon from '../../assets/icons/home.svg'
import playlistIcon from '../../assets/icons/playlist.svg'
import radioIcon from '../../assets/icons/radio.svg'
import videoIcon from '../../assets/icons/videos.svg'
import profileIcon from '../../assets/icons/profile.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import heartFull from '../../assets/icons/heart-white.svg'

import vector from '../../assets/images/vector.svg'
import heroImage from '../../assets/images/hero-img.png'
import banner from '../../assets/images/rectangle-26.png'

import ChartCard from './Card'
import Likes from './Likes'
import ListContainer from './ListContainer'
import MusicList from './MusicList'

function Home(){
    const [musicData, getMusicData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a9a891e077msh8567b489f05bc8ep142735jsn805f0b5339b0',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };


    useEffect(() => {  
        // fetching data from Spotify
        fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=tracks&offset=0&limit=10&numberOfTopResults=5', options)
        // fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
            .then(response => response.json())
            .then(response => getMusicData(response.tracks.items))
            .catch(err => console.error(err));
    }, [])

    //Map through the musicData and display them
    const musics = musicData.map(({data}) => {
        return (
            <MusicList 
                key={data.id}
                img={data.albumOfTrack.coverArt.sources[2].url}
                title = {data.albumOfTrack.name} 
                artist = {data.artists.items[0].profile.name} 
            />
        )
    })


    console.log(musicData)

    return(
        <main className="flex">
            <aside className='mr-6'>
                <div className='bg-dark-alt rounded-[2rem] px-4 py-7 mb-5'>
                    <img src={homeIcon} className="pb-8"/>
                    <img src={playlistIcon} className="pb-8" />
                    <img src={radioIcon} className="pb-8"/>
                    <img src={videoIcon} />
                </div>
                <div className='bg-dark-alt rounded-[2rem] px-4 py-7'>
                    <img src={profileIcon} className="pb-8"/>
                    <img src={logoutIcon} />
                </div>
            </aside>
            <div className='w-full'>
                <section className='flex mb-10'>
                    <div className='bg-[#609EAF] h-[373px] w-2/3 relative rounded-[40px] flex  text-white mr-6 overflow-hidden'>
                        <img src={vector} className="absolute right-0 -"/>
                        <div className='h-full flex flex-col justify-between py-[38px] px-[45px] z-10'>
                            <span>Curated playlist</span>

                            <article className=''>
                                <h2 className='text-4xl font-bold leading-[120%]'>R & B Hits</h2>
                                <p className='w-full max-w-[17.25rem] text-sm leading-[120%]'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
                            </article>

                            <div className='flex items-center'>
                                <div className='-mb-1'>
                                    <Likes 
                                        img='https://images.pexels.com/photos/6274836/pexels-photo-6274836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    />
                                    <Likes
                                        img='https://images.pexels.com/photos/4565030/pexels-photo-4565030.jpeg?auto=compress&cs=tinysrgb&w=600'
                                        mr="-ml-2"
                                    />
                                    <Likes
                                        img='https://images.pexels.com/photos/5188600/pexels-photo-5188600.jpeg?auto=compress&cs=tinysrgb&w=600'
                                        mr="-ml-2"
                                    />
                                    <Likes
                                        img='https://images.pexels.com/photos/13146016/pexels-photo-13146016.png?auto=compress&cs=tinysrgb&w=600'
                                        mr="-ml-2"
                                    />
                                    <Likes
                                        img='https://images.pexels.com/photos/12943106/pexels-photo-12943106.jpeg?auto=compress&cs=tinysrgb&w=600'
                                        mr="-ml-2"
                                    />
                                </div>
                                <img src={heartFull} className="h-4 w-4 ml-3 mr-2" />
                                <span className='text-sm'>33k likes</span>
                            </div>
                        </div>
                        <img src={heroImage} alt="hero-image"  className='z-10 ml-auto'/>
                    </div>
                    <div className='w-1/3'>
                        <h2 className='text-white text-2xl font-bold mb-3.5'>Top Charts</h2>
                        <ChartCard
                            img = {heroImage}
                            title = "Golden age of 80s"
                            artist = "Sean Swadder"
                            length = "2:34:25"
                        />
                        <ChartCard
                            img = {heroImage}
                            title = "Golden age of 80s"
                            artist = "Sean Swadder"
                            length = "2:34:25"
                        />
                        <ChartCard
                            img = {heroImage}
                            title = "Golden age of 80s"
                            artist = "Sean Swadder"
                            length = "2:34:25"
                        />
                    </div> 
                </section>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">New releases.</h3>
                    <ListContainer>
                        {musics}
                    </ListContainer>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">New releases.</h3>
                    <ListContainer>
                        <MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
                        <MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
<MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
<MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
<MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
<MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
<MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />
<MusicList 
                            img={banner}
                            title = "Testimony" 
                            artist = "Olumide"
                        />

                    </ListContainer>
                </div>
                
            </div>
        </main>
    )
}

export default Home