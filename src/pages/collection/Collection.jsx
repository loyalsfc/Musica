import topMusic from '../home/TopMusic'

import CollectionCard from './CollectionCard'

function Collection(){

    const collections = topMusic.map((track, index) => {
        return(
            <CollectionCard
                key={track.key}
                title = {track.title} 
                artist = {track.subtitle}
                trackImg={track.share.image}
                url = {track.hub.actions[1].uri}
            />
        )
    })

    return(
       
            <section className="w-full text-sm">
                <button className="text-primary-dark bg-primary-yellow rounded-full py-2.5 px-4 mr-2.5">My Collection</button>
                <button className="text-[#EFEEE0] border border-[#EFEEE0] rounded-full py-2.5 px-4 opacity-25">My Collection</button>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 place-content-start mt-6">
                    {collections}
                </div>
            </section>
               
    )
}
export default Collection