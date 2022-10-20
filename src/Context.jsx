import React, { useContext, useEffect, useState } from "react";
const Context = React.createContext()


function ContextProvider(props){
    const [playlistBG, setPlaylistBG] = useState();
    const [playlistTitle, setPlaylistTitle] = useState();
    const [playlistDescription, setPlaylistDescription] = useState();
    const [playerSrc, setPlayerSrc] = useState('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/13/2d/cd132d9a-2449-65fe-e094-fb927d7c6c9e/mzaf_16088994795328198867.plus.aac.ep.m4a')
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = document.querySelector('#audio-player');
    const [playerDetail, setPlayerDetail] = useState({cover: "", title: "", duration: "", artist: ""})

    // Convert milliseconds to minute and seconds
    function millisecondsToMinute(milliseconds){
        const second = Math.floor(milliseconds / 1000);
        const minute = Math.floor(second / 60)
        const seconds = Math.floor(second % 60)
        return `${minute.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    }

    console.log(playerDetail)


    return(
        <Context.Provider 
            value={{millisecondsToMinute, 
                playlistBG, 
                setPlaylistBG, 
                playlistTitle, 
                setPlaylistTitle,
                playlistDescription, 
                setPlaylistDescription, 
                playerSrc, 
                setPlayerSrc,
                SayHello,
                playerDetail,
                setPlayerDetail,
                audioPlayer
                // play,
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

function SayHello(){
    console.log('hello')
    return(
        <h1 className="text-4xl text-white position-fixed top-0 z-50">Hello</h1>
    )
}

export {Context, ContextProvider}