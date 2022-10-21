import heart from '../../assets/icons/outline-heart.svg'
import {Context} from '../../Context'
import { useContext } from 'react'

function MusicCard({img, title, musicCategory, duration, artist}){
    const {millisecondsToMinute} = useContext(Context)

    return (
        <div className="flex items-center  backdrop-blur-sm bg-[rgb(51,55,59,0.37)] rounded-[15px] py-2 px-2.5 lg:pr-8  text-xs mb-2.5">
            <div className='flex lg:items-center w-4/5'>
                <img src={img} alt="Banner image" width='39' className="rounded-lg mr-5"/> 
                <img src={heart} alt="heart image" className="mr-[79px] hidden lg:block"/>
                <div className='flex flex-col overflow-hidden justify-center lg:flex-row lg:w-3/4'>
                    <p className='lg:w-2/3 truncate'>{title} ~ {artist}</p>
                    <p className='lg:w-1/3'>{musicCategory}</p>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row w-1/5 items-end lg:item-center  justify-between'>
                <p  className=''>{duration}</p>
                <i className="fa-solid fa-ellipsis-vertical text-primary-yellow text-base"></i>
            </div>
        </div>
    )
}

export default MusicCard