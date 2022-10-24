import { useContext } from "react"
import { Context } from "../../Context"
import TopMusic from "./TopMusic"

function MusicList ({img, title, artist, url, index}){
    const {setTrackIndex, setCurrentTrack, setTracksQueue} = useContext(Context)

    // set current music to play
    const handleClick = (e) => {
        setTracksQueue(TopMusic)
        const index = e.currentTarget.getAttribute('data-id')
        setTrackIndex(parseInt(index))
        setCurrentTrack(index)
    }   

    return(
        <div 
            className="text-xs text-white shrink-0 w-[153px] mr-[30px]"
            onClick={handleClick}
            data-id={index}    
        >
            <img src={img} height={153} width={153} alt={title} className="rounded-3xl mr-[1.875rem] mb-1" />
            <p className="mb-1 w-full truncate">{title}</p>
            <p>{artist}</p>
        </div>
    )
}

export default MusicList