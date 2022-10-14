import React, { useContext } from "react";
const Context = React.createContext()


function ContextProvider(props){
    // Convert milliseconds to minute and seconds
    function millisecondsToMinute(milliseconds){
        const second = Math.floor(milliseconds / 1000);
        const minute = Math.floor(second / 60)
        const seconds = Math.floor(second % 60)
        return `${minute.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    }

    return(
        <Context.Provider value={{millisecondsToMinute}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}