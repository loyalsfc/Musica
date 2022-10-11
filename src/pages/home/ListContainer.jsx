
function ListContainer({title, children}){
    return(
            <div className="flex flex-nowrap overflow-x-scroll mb-6">
                {children}
            </div>
    )
}

export default ListContainer