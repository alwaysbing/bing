import React from 'react';
// import { format } from 'date-fns';
import CountUp from "react-countup";
import '../assets/styles/Count.css';

export default function Count(){
    // 작품 수 / 캐릭터 갯수 / days 수
    const debut = new Date("2008-02-21");
    const date = new Date();
    const timeDifference = date.getTime() - debut.getTime(); // 밀리초 단위 차이 계산
    
    const day = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    

    return(
        <div className='count_wrapper'>
            <div className='count_container'>
                <ul>
                    <li>
                        <p> <CountUp className='count' start={0} end={52} duration={2.5} separator="," suffix="개" /></p>
                        <span className='title'>작품 수</span>
                    </li>
                    <li>
                        <p><CountUp className='count' start={0} end={37} duration={2.5} separator="," suffix="개" /></p>
                        <span className='title'>캐릭터</span>
                    </li>
                    <li>
                        <p><CountUp className='count' start={0} end={day} duration={2} separator="," suffix="일" /></p>
                        <span className='title'>활동일</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}