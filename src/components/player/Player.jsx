
import nextIcon from '../../assets/icons/next.svg'
import previous from '../../assets/icons/previous.svg'
import soundIcon from '../../assets/icons/sound.svg'
import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Context'

function Player(){
    const {playerSrc, audioPlayer, playerDetail, togglePlay, nextTrack, prevTrack, setIsShuffle, currentTime, musicDuration} = useContext(Context)
    const voluweWrapper = document.querySelector('.volume-wrapper')
    const [volume, setVolume] = useState(1)

    //Update the player volume when the volume state changed
    useEffect(() => {
        audioPlayer.volume = volume
    }, [volume])

    //Active loop and set the loop element fill to yellow
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

    function shuffle(){
        document.querySelectorAll('.shuffle path').forEach(item => {
            item.classList.toggle('fill-primary-yellow')
        })
        setIsShuffle(prevState => !prevState)
    }

    //Set volume state
    const handleClick = (e) => {
        const selectedLength = e.clientX - voluweWrapper.offsetLeft
        setVolume((selectedLength / voluweWrapper.clientWidth).toFixed(2))
    }

    // sleek player
    const handleChange = (e) => {
        audioPlayer.currentTime = e.target.value
    }

    return(
        <div className="fixed bottom-0 bg-[rgba(29,33,35,0.3)] border-t border-white/[0.1] backdrop-blur-lg py-4 lg:py-6 w-full pl-6 -ml-6 lg:ml-0 z-50">
            <audio id='audio-player' src={playerSrc}></audio>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center w-3/5 md:w-1/5 grow-0'>
                    <img src={playerDetail.cover} className="rounded-2xl h-[53px]  w-[53px] md:h-12 md:w-12 mr-3 font-bold"/>
                    <div className='text-white truncate'>
                        <p className='text-sm '>{playerDetail.title}</p>
                        <span className='text-[10px] text-white/[0.44]'>{playerDetail.artist}</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-3/5 mx-9 grow-0'>
                    <div className='flex items-center justify-center md:mb-8'>
                        <svg width="16" height="17" className="shuffle hidden md:inline-block h-4 mr-11 play-icon"  onClick={shuffle} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z" fill="white"/>
                            <path d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z" fill="white"/>
                            <path d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z" fill="white"/>
                        </svg>

                        <img src={previous} onClick={prevTrack} className="hidden md:inline-block h-4 mr-11 play-icon"/>
                        <div onClick={togglePlay} className='mr-6 md:mr-11 h-[25px] w-[25px] text-white text-xs rounded-full bg-primary-yellow shadow-[0_0_18px_rgba(255,255,255,0.3)] flex items-center justify-center'>
                            {audioPlayer.paused ? 
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z" fill="#EFEEE0"/>
                            </svg> : 
                            <svg width="9" height="12" viewBox="0 0 53 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="6" width="18" height="53" rx="9" fill="white"/>
                                <rect x="30" y="6" width="18" height="53" rx="9" fill="white"/>
                            </svg>
                            }
                        </div>
                        <img src={nextIcon} onClick={nextTrack} className="h-4 md:mr-11 hover:cursor-pointer play-icon"/>
                        <svg width="16" className="repeat hidden md:inline-block h-4 fill-primary-yellow play-icon" onClick={loop} height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z" fill="white"/>
                            <path d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z" fill="white"/>
                            <path d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='hidden md:block h-1 bg-white/[0.04] w-full rounded relative'>
                        <input type='range' className='opacity-0 absolute w-full h-1  hidden md:block' max={musicDuration} onChange={handleChange} />
                        <div className='bg-primary-yellow h-full rounded player' style={{width: currentTime + '%'}}></div>
                        <div 
                            className='h-3 w-3 rounded-full border border-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-0.5' 
                            style={{left: currentTime + '%'}}
                        >
                            <div className='h-full w-full rounded-full bg-primary-yellow shadow-[0_0_8px_rgba(0,0,0,0.92)]'></div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex items-center w-1/5 grow-0'>
                    <img src={soundIcon}  className="mr-2"/>
                    <div className='volume-wrapper h-1 bg-white/[0.04] w-full rounded hover:cursor-pointer' onClick={handleClick}>
                        <div className='bg-primary-yellow h-full rounded' style={{width: volume * 100 + '%'}}></div>
                        {/* <input type="range" className='volume-slider h-1 w-full bg-primary-yellow rounded-full' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player