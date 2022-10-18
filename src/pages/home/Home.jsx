import Data from './Data'

import heartFull from '../../assets/icons/heart-white.svg'

import vector from '../../assets/images/vector.svg'
import heroImage from '../../assets/images/hero-img.png'

import { Context } from '../../Context'
import ChartCard from './Card'
import Likes from './Likes'
import ListContainer from './ListContainer'
import MusicList from './MusicList'

import { useEffect, useState, useContext } from 'react'


function Home(){
    const [musicData, setMusicData] = useState(Data.tracks.items)
    const [playList, setPlaylist] = useState(Data.playlists.items)
    const {setPlaylistBG, setPlaylistTitle, setPlaylistDescription} = useContext(Context)

    setPlaylistBG(false)
    //Array index numbers for top charts
    const randomThree = [4, 5, 9]

    //Set playlist banner header, title and description
    const setPlaylistParams = e =>{
        setPlaylistBG(e.currentTarget.getAttribute("data-banner"))
        setPlaylistTitle(e.currentTarget.getAttribute("data-title"))
        setPlaylistDescription(e.currentTarget.getAttribute("data-description"))
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f28500c067msh18ae182692dc780p1c5676jsn17cbf229ab0e',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    useEffect(() => {  
        // fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1EQpj7X7UK8OOF&offset=0&limit=10', options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    }, [])

    //Map through the musicData and display them
    const newRelease = musicData.map(({data}, index) => {
        if(index < 10){
            return (
                <MusicList 
                    key={data.id}
                    img={data.albumOfTrack.coverArt.sources[2].url}
                    title = {data.albumOfTrack.name} 
                    artist = {data.artists.items[0].profile.name} 
                />
            )
        }
    })

    const popular = musicData.map(({data}, index) => {
        if(index >= 10){
            return (
                <MusicList 
                    key={data.id}
                    img={data.albumOfTrack.coverArt.sources[2].url}
                    title = {data.albumOfTrack.name} 
                    artist = {data.artists.items[0].profile.name} 
                />
            )
        }
    })

    //Pick three random music as top charts
    const topCharts = playList.map(({data}, index) => {
        if(randomThree.includes(index)){
            // Split the data uri to get the playlist id
            const uri = data.uri.split(":") 
            return (<ChartCard
                key = {uri[2]}
                playlistId={uri[2]}
                img = {data.images.items[0].sources[0].url}
                title = {data.name} 
                artist = {data.owner.name}
                description = {data.description}
                handleClick = {setPlaylistParams}
                // length = {convertMilliseconds(data.duration.totalMilliseconds)}
            />)
        }
    })

    // console.log(playList)

    return(
        
            <div className='w-full overflow-hidden'>
                <section className='flex flex-col lg:flex-row mb-10'>
                    <div className='bg-[#609EAF] h-[70vh] lg:h-[373px] lg:w-2/3 relative rounded-[40px] flex  text-white lg:mr-6 overflow-hidden shadow-[0_15px_22px_-20px_rgba(122,144,150,1)]'>
                        <img src={vector} className="absolute -right-36 -top-20 lg:right-0 lg:top-0 rotate-90 lg:rotate-0"/>
                        <div className='h-full flex flex-col lg:justify-between py-[38px] px-8 lg:px-[45px] z-10'>
                            <span className='mb-auto lg:mb-0'>Curated playlist</span>

                            <article className='mb-11'>
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
                                <img src={heartFull} className="h-6 w-6 lg:h-4 lg:w-4 ml-3 mr-2" />
                                <span className='text-2xl lg:text-sm'>33k likes</span>
                            </div>
                        </div>
                        <img src={heroImage} alt="hero-image"  className='z-10 ml-auto hidden lg:block'/>
                    </div>
                    <div className='w-full lg:w-1/3 mt-[47px] lg:mt-0'>
                        <h2 className='text-white text-2xl font-bold mb-3.5'>Top Charts</h2>
                        <div className='flex flex-nowrap flex-row lg:flex-col overflow-x-scroll'>
                            {topCharts}
                        </div>
                    </div> 
                </section>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">New releases.</h3>
                    <ListContainer>
                        {newRelease}
                    </ListContainer>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Popular in your area</h3>
                    <ListContainer>
                        {popular}
                    </ListContainer>
                </div>
                
            </div>
        // </main>
    )
}

export default Home