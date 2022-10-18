
function Likes({img, mr}){
    return(
        <div className={`w-8 h-8 lg:h-5 lg:w-5 rounded-full ${mr} inline-block overflow-hidden drop-shadow-3xl`}>
            <img src={img} className="w-8 lg:w-5"/>
        </div>
    )
}

export default Likes