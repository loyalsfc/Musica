import topMusic from '../home/TopMusic'

import CollectionCard from './CollectionCard'
import { Context } from '../../Context'
import { useContext } from 'react'
import Transitions from '../../components/animation/AnimatedRoute'

function Collection(){
    const {playTrack} = useContext(Context)
    const trackPlay = (e) => {
        playTrack(e, topMusic)
    }

    const collections = topMusic.map((track, index) => {
        return(
            <CollectionCard
                key={track.key}
                index = {index}
                title = {track.title} 
                artist = {track.subtitle}
                trackImg={track.share.image}
                url = {track.hub.actions[1].uri}
                handleClick = {trackPlay}
            />
        )
    })

    return(
       <>
           <Transitions>
                <section className="w-full text-sm pb-24">
                    <button className="text-primary-dark bg-primary-yellow rounded-full py-2.5 px-4 mr-2.5">My Collection</button>
                    <button className="text-[#EFEEE0] border border-[#EFEEE0] rounded-full py-2.5 px-4 opacity-25">My Collection</button>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-content-end mt-6"> */}
                    <div className="flex flex-wrap gap-6 mt-6">
                        {collections}
                    </div>
                </section>
            </Transitions>
        </>
    )
}
export default Collection