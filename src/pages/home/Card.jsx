import { Link } from 'react-router-dom'
import heart from '../../assets/icons/heart.svg'


function ChartCard({playlistId, img, title, artist, length}){
    console.log(playlistId)
    return (
        <Link to={`/playlist/${playlistId}`}>
            <div className="p-4 bg-dark-alt flex items-center rounded-3xl mb-3">
                <img src={img} className='h-16 w-16 rounded-xl mr-3' alt="music image" />
                <article>
                    <h4 className="text-[17px] mb-1 leading-5 text-white">{title}</h4>
                    <span className="text-xs text-secondary-grey">{artist}</span>
                    <p className="text-xs text-white mt-2">{length}</p>
                </article>
                <div className='h-10 w-10 rounded-full border border-white/[0.11] flex item-center justify-center ml-auto' >
                    <img src={heart} height={18} width={18} alt="favorite" />
                </div>
            </div>
        </Link>
    )
}

export default ChartCard