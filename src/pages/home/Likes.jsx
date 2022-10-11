
function Likes({img, mr}){
    return(
        <div className={`h-5 w-5 rounded-full ${mr} inline-block overflow-hidden`}>
            <img src={img} className="w-5"/>
        </div>
    )
}

export default Likes