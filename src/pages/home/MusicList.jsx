import { useContext } from "react"
import { Context } from "../../Context"


function MusicList ({img, title, artist, url}){
    const {setPlayerSrc, togglePlay, setPlayerDetail, audioPlayer, pausePlay, continuePlay} = useContext(Context)

    // set current music to play
    const handleClick = () => {
        setPlayerSrc(url)
        setPlayerDetail({cover: img, title: title, duration: "", artist: artist})
        setTimeout(()=>{togglePlay(); console.log('o ti loor')}, 100)
        // togglePlay()
    }

    return(
        <div 
            className="text-xs text-white shrink-0 w-[153px] mr-[30px]"
            onClick={handleClick}    
        >
            <img src={img} height={153} width={153} alt={title} className="rounded-3xl mr-[1.875rem] mb-1" />
            <p className="mb-1 w-full truncate">{title}</p>
            <p>{artist}</p>
        </div>
    )
}

export default MusicList