import playIcon from  '../../assets/icons/play-new.svg'


function CollectionCard({title, artist, trackImg}){
    return(
        <div className="collection-container duration-1000 rounded-2xl h-[234px] w-full lg:w-[213px] text-white overflow-hidden flex items-end relative">
            <img src={trackImg} className="h-[234px] w-full lg:w-[213px] absolute top-0 left-0 transition-transform" />
            <div className='flex w-full h-full px-5 py-6 items-end z-10 color-gradient'>
                <div className='w-3/4 '>
                    <p className="text-2xl truncate">{title}</p>
                    <p className="text-[10px] color-[#EFEEE0] opacity-75 truncate">{artist}</p>
                    <p className="likes lg:hidden text-[10px] mt-6">2.3m likes</p>
                </div>
                <img src={playIcon} className="h-10 w-10" />
            </div>
        </div>
    )
}


export default CollectionCard