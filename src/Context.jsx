import React, { useContext, useEffect, useState } from "react";
import TopMusic from "./pages/home/TopMusic";
const Context = React.createContext()


function ContextProvider(props){
    const [playlistBG, setPlaylistBG] = useState();
    const [playerSrc, setPlayerSrc] = useState('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/13/2d/cd132d9a-2449-65fe-e094-fb927d7c6c9e/mzaf_16088994795328198867.plus.aac.ep.m4a')
    const [audioPlayer, setAudioPlayer] = useState(document.createElement('audio'));
    const [playerDetail, setPlayerDetail] = useState({cover: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ff/ee/a8/ffeea8ba-38af-138f-045f-013bf8072cb2/194690959790_cover.jpg/400x400cc.jpg", title: "Cough (Odo)", duration: "", artist: "EMPIRE & Kizz Daniel"})
    const [musicDuration, setMusicDuration] = useState('')
    const [currentTime, setCurrentTime] = useState(0)
    const [tracksQueue, setTracksQueue] = useState(TopMusic)
    const [trackIndex, setTrackIndex] = useState(0)
    const [isShuffle, setIsShuffle] = useState(false)
    
    useEffect(() => {
        // set the audioplayer globally
        setAudioPlayer(document.querySelector('#audio-player'))   
    },[])

    // Play track with corresponding Index
    useEffect(() => {
        setCurrentTrack(trackIndex)
    }, [trackIndex])

    function continuePlay(){
        audioPlayer.play()
    }

    function togglePlay(){
        //Check if audio is paused and play
        if(audioPlayer.paused ) {
            console.log('play')
            audioPlayer.play();
         } else {
            console.log('paused')
            audioPlayer.pause();
         }
         setMusicDuration(audioPlayer.duration);
         setCurrentTime((audioPlayer.currentTime / audioPlayer.duration) * 100)
    } 

    function setCurrentTrack(index){
        const {hub, images, title, subtitle} = tracksQueue[index]
        const url = hub.actions[1].uri
        setPlayerSrc(url)
        setPlayerDetail({cover: images.coverart, title: title, duration: "", artist: subtitle})
        audioPlayer.onloadedmetadata = () => {
            setMusicDuration(audioPlayer.duration);
            setCurrentTime((audioPlayer.currentTime / audioPlayer.duration) * 100)
            continuePlay();    
        }
    }

    //Increment the track index when play ends 
    audioPlayer.onended = () => {
        nextTrack()
    }; 

    //Moving play progress
    audioPlayer.ontimeupdate = () => {
        setCurrentTime((audioPlayer.currentTime / musicDuration * 100).toFixed(2))
    }
    // Convert milliseconds to minute and seconds
    function millisecondsToMinute(milliseconds){
        const second = Math.floor(milliseconds / 1000);
        const minute = Math.floor(second / 60)
        const seconds = Math.floor(second % 60)
        return `${minute.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    }

    // Play next track
    function nextTrack(){
        if(!isShuffle){
            //If shuffle is false, increment the trackIndex
            setTrackIndex(prevState => {
                if(prevState != (tracksQueue.length - 1)){
                    return prevState + 1
                } else {
                    return 0
                }
            })
        } else {
            //Generate a random number and assign it to trackIndex
            const randomIndex = Math.floor(Math.random() * tracksQueue.length)
            setTrackIndex(randomIndex);
        }
    }

    // Play previous track
    function prevTrack(){
        setTrackIndex(prevState => {
            if(prevState !== 0){
                return prevState - 1;
            } else {
                return 0;
            }
        })
    }

    return(
        <Context.Provider 
            value={{millisecondsToMinute, 
                playlistBG, 
                setPlaylistBG, 
                playerSrc, 
                setPlayerSrc,
                playerDetail,
                setPlayerDetail,
                audioPlayer,
                togglePlay,
                setCurrentTrack,
                continuePlay,
                setTracksQueue,
                setTrackIndex,
                nextTrack,
                prevTrack,
                setIsShuffle,
                currentTime,
                musicDuration,
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}