import banner from '../../assets/images/rectangle-26.png'

import playIcon from '../../assets/icons/play.svg'
import nextIcon from '../../assets/icons/next.svg'
import previous from '../../assets/icons/previous.svg'
import repeatIcon from '../../assets/icons/repeate-one.svg'
import shuffle from '../../assets/icons/shuffle.svg'
import soundIcon from '../../assets/icons/sound.svg'

function Player(){
    return(
        <div className="fixed bottom-0 bg-[rgba(29,33,35,0.3)] border-t border-white/[0.1] backdrop-blur-lg py-0 lg:py-4 w-full pl-6 -ml-6 lg:ml-0 z-50">
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={banner} className="rounded-2xl h-12 w-12 mr-3 font-bold"/>
                    <div className='text-white'>
                        <p className='text-sm '>Seasons in</p>
                        <span className='text-[10px] text-white/[0.44]'>James</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-3/5 mx-9'>
                    <div className='flex items-center justify-center'>
                        <img src={shuffle} className="hidden md:inline-block h-4 mr-11"/>
                        <img src={previous} className="hidden md:inline-block h-4 mr-11"/>
                        <img src={playIcon}  className="md:mr-11"/>
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
                    <div className='h-1 bg-white/[0.04] w-full rounded'>
                        <div className='w-1/2 bg-primary-yellow h-full rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player