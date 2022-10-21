import { Link } from 'react-router-dom'
import heart from '../../assets/icons/heart.svg'


function ChartCard({playlistId, img, title, artist, length, handleClick}){
    return (
        <Link to={`/playlist/${playlistId}`} className="shrink-0 mr-4 w-3/4 lg:w-full">
            <div className="p-4 bg-dark-alt flex flex-col lg:flex-row lg:items-center rounded-3xl mb-3 relative" 
                onClick={handleClick}
            >
                <img src={img} className='w-[6.75rem] lg:h-[16] lg:w-16 rounded-xl mr-3 mb-4 lg:mb-0' alt="music image" />
                <article>
                    <h4 className="text-[17px]  leading-5 text-white">{title}</h4>
                    <span className="text-xs text-secondary-grey">{artist}</span>
                    <p className="text-xs text-white mt-6 lg:mt-1">{length}</p>
                </article>
                <div className='h-10 w-10 rounded-full border border-white/[0.11] absolute right-4 top-4 flex item-center justify-center lg:relative lg:ml-auto' >
                    <img src={heart} height={18} width={18} alt="favorite" />
                </div>
            </div>
        </Link>
    )
}

export default ChartCard