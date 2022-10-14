import heart from '../../assets/icons/outline-heart.svg'
import {Context} from '../../Context'
import { useContext } from 'react'

function MusicCard({img, title, musicCategory, duration, artist}){
    const {millisecondsToMinute} = useContext(Context)

    return (
        <div className="flex items-center  backdrop-blur-sm bg-[rgb(51,55,59,0.37)] rounded-[15px] py-2 pl-2.5 pr-8 text-xs mb-2.5">
            <div className='flex items-center w-3/5'>
                <img src={img} alt="Banner image" width='39' className="rounded-lg mr-5"/> 
                <img src={heart} alt="Banner image" className="mr-[79px]"/>
                <p>{title} ~ {artist}</p>
            </div>
            <p  className='w-1/5'>{musicCategory}</p>
            <p  className='w-1/5'>{millisecondsToMinute(duration)}</p>
            <i className="fa-solid fa-ellipsis-vertical text-primary-yellow text-base"></i>
        </div>
    )
}

export default MusicCard