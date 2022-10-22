import banner from '../../assets/images/rectangle-26.png'

import playIcon from '../../assets/icons/play.svg'
import nextIcon from '../../assets/icons/next.svg'
import previous from '../../assets/icons/previous.svg'
import repeatIcon from '../../assets/icons/repeate-one.svg'
import shuffle from '../../assets/icons/shuffle.svg'
import soundIcon from '../../assets/icons/sound.svg'
import { useState, useContext } from 'react'
import { Context } from '../../Context'

function Player(){
    const {playerSrc, audioPlayer, playerDetail, togglePlay} = useContext(Context)
    const [isPlaying, setIsPlaying] = useState(false)
    // console.log(audioPlayer)


    function loop(){
        document.querySelectorAll('.repeat path').forEach(item => {
            item.classList.toggle('fill-primary-yellow')
        })
        if(audioPlayer.loop == true){
            audioPlayer.loop = false;
        } else {
            audioPlayer.loop = true;
        }
    }

    const handleClick = (e) => {
        console.log(e)
    }

    return(
        <div className="fixed bottom-0 bg-[rgba(29,33,35,0.3)] border-t border-white/[0.1] backdrop-blur-lg py-0 lg:py-4 w-full pl-6 -ml-6 lg:ml-0 z-50">
            <audio id='audio-player' src={playerSrc}></audio>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center w-1/5'>
                    <img src={playerDetail.cover} className="rounded-2xl h-12 w-12 mr-3 font-bold"/>
                    <div className='text-white truncate'>
                        <p className='text-sm '>{playerDetail.title}</p>
                        <span className='text-[10px] text-white/[0.44]'>{playerDetail.artist}</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-3/5 mx-9'>
                    <div className='flex items-center justify-center'>
                        <img src={shuffle} className="hidden md:inline-block h-4 mr-11"/>
                        <img src={previous} className="hidden md:inline-block h-4 mr-11"/>
                        <svg width="61" height="62" viewBox="0 0 61 62" className="md:mr-11" onClick={togglePlay} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_12010_172)">
                                <rect x="18" y="18" width="25" height="25.5453" rx="12.5" fill="#FACD66" shapeRendering="crispEdges"/>
                                <path d="M26.3333 30.7727V28.9537C26.3333 26.6193 27.9856 25.6643 30.0017 26.8315L31.5781 27.741L33.1546 28.6505C35.1707 29.8177 35.1707 31.7277 33.1546 32.8949L31.5781 33.8044L30.0017 34.7138C27.9856 35.881 26.3333 34.9261 26.3333 32.5917V30.7727Z" fill="#EFEEE0"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_12010_172" x="0" y="0" width="61" height="61.5453" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="9"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12010_172"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12010_172" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        {/* <img src={playIcon}   /> */}
                        <img src={nextIcon} className="h-4 md:mr-11"/>
                        {/* <img src={repeatIcon} className="hidden md:inline-block h-4" onClick={loop} /> */}
                        <svg width="16" className="repeat hidden md:inline-block h-4 fill-primary-yellow" onClick={loop} height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z" fill="white"/>
                            <path d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z" fill="white"/>
                            <path d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z" fill="white"/>
                        </svg>

                    </div>
                    <div className='hidden md:block h-1 bg-white/[0.04] w-full rounded relative'>
                        <div className='w-1/2 bg-primary-yellow h-full rounded player'></div>
                        <div className='h-3 w-3 rounded-full border border-white absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 p-0.5'>
                            <div className='h-full w-full rounded-full bg-primary-yellow shadow-[0_0_8px_rgba(0,0,0,0.92)]'></div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex items-center w-1/5'>
                    <img src={soundIcon}  className="mr-2"/>
                    <div className='h-1 bg-white/[0.04] w-full rounded hover:cursor-pointer' onClick={handleClick}>
                        <div className='w-1/2 bg-primary-yellow h-full rounded'></div>
                        {/* <input type="range" className='volume-slider h-1 w-full bg-primary-yellow rounded-full' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player