import playIcon from  '../../assets/icons/play-new.svg'


function CollectionCard({title, artist, trackImg}){
    return(
        <div className="rounded-2xl px-5 py-6 h-[234px] w-[213px] text-white overflow-hidden flex items-end relative">
            <img src={trackImg} className="h-[234px] w-[213px] absolute top-0 left-0 " />
            <div className='flex w-full items-center z-10'>
                <div className=''>
                    <p className="text-2xl truncate w-1/2">{title}</p>
                    <p className="text-[10px] color-[#EFEEE0] opacity-75  truncate w-1/2">{artist}</p>
                    <p className="text-[10px] mt-6 hidden">2.3m likes</p>
                </div>
                <img src={playIcon} className="h-10 w-10" />
            </div>
        </div>
    )
}

export default CollectionCard