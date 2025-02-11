import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import '../assets/styles/Video.css';

export default function Video(){


    return(
        <div className="video_wrapper">
            <div className="video_container">
            <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=dYpXbsXWulw&list=PL35g5_2TtRUJZ74TtsUdVdk_KNmpvLfTh'
                width='100%'
                playing muted loop config={{youtube: {
                    playerVars: { controls: 0,  start:0 }
                }}}/> 
            </div>
        </div>
    )
}