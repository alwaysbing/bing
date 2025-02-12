import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import '../assets/styles/Video.css';

export default function Video(){


    return(
        <div className="video_wrapper">
            <div className="video_container">
            <ReactPlayer className="react-player" url='https://www.youtube.com/watch?v=z6kpJb08m8s&list=PLDBIIAx87PniXifFuOfZyt8PHKvmt1nq0'
                width='100%'
                playing muted loop config={{youtube: {
                    playerVars: { controls: 0,  start:0 }
                }}}/> 
            </div>
        </div>
    )
}