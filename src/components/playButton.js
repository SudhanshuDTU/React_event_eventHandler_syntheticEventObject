import React from 'react'
import './playButton.css'

const PlayButton = ({message,children,onPlay,onPause}) => {
    let isPlay = true;
    function clickFunction(){
       if(isPlay){
        onPause();
        
       }
       else{
        onPlay();
    }
    isPlay = !isPlay;

    }
  return (
   <button onClick={clickFunction}>{children} : [{isPlay? "true": "false" }]</button>
  )
}

export default PlayButton