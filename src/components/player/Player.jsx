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

    // console.log(audioPlayer)

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
                        <img src={repeatIcon} className="hidden md:inline-block h-4"/>
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