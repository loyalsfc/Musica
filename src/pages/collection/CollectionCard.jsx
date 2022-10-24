
function CollectionCard({title, artist, trackImg}){
    return(
        <div className="collection-container duration-1000 rounded-2xl h-[234px] w-full lg:w-[213px] text-white overflow-hidden flex items-end relative">
            <img src={trackImg} className="h-[234px] w-full lg:w-[213px] absolute top-0 left-0 transition-transform" />
            <div className='flex w-full h-full px-5 py-6 items-end justify-between z-10 color-gradient'>
                <div className='w-3/4 '>
                    <p className="text-2xl truncate">{title}</p>
                    <p className="text-[10px] color-[#EFEEE0] opacity-75 truncate">{artist}</p>
                    <p className="likes lg:-mb-12 transition-all transition-1000 text-[10px] mt-6">2.3m likes</p>
                </div>
                <svg width="40" height="40" className="play-icon h-10 w-10 lg:opacity-0 transition-all duration-700" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M40 20.0096C40 31.0275 31.0232 40 20 40C8.97683 40 0 31.0275 0 20.0096C0 8.9725 8.97683 0 20 0C31.0232 0 40 8.9725 40 20.0096Z" fill="#FACD66"/>
                    <path d="M28 20.0097C28 20.5152 27.8409 21.0226 27.5227 21.4289C27.4631 21.5086 27.1847 21.8372 26.9659 22.051L26.8466 22.1677C25.1761 23.9388 21.0199 26.6022 18.9119 27.4557C18.9119 27.4751 17.6591 27.9825 17.0625 28H16.983C16.0682 28 15.2131 27.4965 14.7756 26.68C14.5369 26.2309 14.3182 24.9283 14.2983 24.9108C14.1193 23.7424 14 21.9538 14 19.9903C14 17.9315 14.1193 16.0632 14.3381 14.9162C14.3381 14.8967 14.5568 13.8469 14.696 13.497C14.9148 12.9934 15.3125 12.5638 15.8097 12.2916C16.2074 12.0991 16.625 12 17.0625 12C17.5199 12.0214 18.375 12.3111 18.7131 12.4471C20.9403 13.3026 25.196 16.1021 26.8267 17.8129C27.1051 18.0851 27.4034 18.4175 27.483 18.4933C27.821 18.921 28 19.4459 28 20.0097Z" fill="#FACD66"/>
                </svg>

                {/* <img src={playIcon}  /> */}
            </div>
        </div>
    )
}


export default CollectionCard