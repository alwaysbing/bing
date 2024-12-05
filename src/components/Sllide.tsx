import React, { useState } from 'react';
import '../assets/styles/Slide.css';

import filmoData from "../assets/data/filmo.json";

export default function Slide(){

    // 애니메이션 제어 할 상태 변수 
    const [animate, setAnimate] =useState(true);
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
                                <p className="item">
                                    <img src={require(`../assets/images/filmo/${images.image}`)} alt={images.title} />
                                </p>
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
                                <p className="item">

                                    {/* <img src={`img/${images.img}.png`} alt={images.name} /> */}
                                </p>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}