import React, { useState } from 'react';
import '../assets/styles/Slide2.css';

import filmoData from "../assets/data/filmo2.json";

export default function Slide2(){

    // 애니메이션 제어 할 상태 변수 
    const [animate, setAnimate] = useState(true);
    // 마우스가 슬라이더 진입 시 호출, false값으로 애니메이션 중지
    const onStop = () => setAnimate(false);
    // 마우스가 슬라이더 떠날 때 호출, true값으로 애니메이션 재시작
    const onRun = () => setAnimate(true);

    return(
        <div className='wrapper'>
            <div className='slide_container'>
            <ul
                    className="slide_wrapper"
                    onMouseEnter={onStop}
                    onMouseLeave={onRun}
                >
                    <div
                        className={"slide original" + (
                            animate ? "" : " stop"
                        )}
                    >
                        {filmoData.map((images, i) => (
                            <li
                                key={images.uid}
                            >
                                <div className="item">
                                    <img src={images.image} alt={images.title} />
                                    <div className="overlay">
                                        <p className="overlay_text">{images.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                    <div
                        className={"slide clone" + (animate ? "" : " stop")}
                    >
                        {filmoData.map((images, i) => (
                            <li
                                key={images.uid}
                            >
                                <div className="item">
                                    <img src={images.image} alt={images.title} />
                                    <div className="overlay">
                                        <p className="overlay_text">{images.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}