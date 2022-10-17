import Data from '../home/Data'

import SideNav from "../../components/sideNav/SideNav"

import CollectionCard from './CollectionCard'

function Collection(){

    const collections = Data.tracks.items.map(({data}, index) => {
        return(
            <CollectionCard
                key={index}
                title = {data.albumOfTrack.name} 
                artist = {data.artists.items[0].profile.name}
                trackImg={data.albumOfTrack.coverArt.sources[2].url}
            />
        )
    })

    return(
       
            <section className="w-full text-sm">
                <button className="text-primary-dark bg-primary-yellow rounded-full py-2.5 px-4 mr-2.5">My Collection</button>
                <button className="text-[#EFEEE0] border border-[#EFEEE0] rounded-full py-2.5 px-4 opacity-25">My Collection</button>
                <div className="grid grid-cols-4 gap-6 place-content-start mt-6">
                    {collections}
                </div>
            </section>
               
    )
}
export default Collection