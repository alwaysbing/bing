import React, { useState } from 'react';
import '../assets/styles/Profile.css';

export default function Profile() {

    return (
        <div className='profile_wrapper'>
            <div className='profile_container'>
                <div className='profile'>
                    <div className='profile_img'>
                        <img src='/images/profile/profile.png'></img>
                    </div>
                    <div className='profile_text'>
                        <div className='name'>임병근 <span className='name_en'> Lim Byung-keun</span></div>
                        <br/>
                        생년월일 : 1983.02.07
                        <br/>
                        키 : 187cm
                        <br/>
                        학력 : 중앙대학교 예술대학원 공연영상학과 석사
                        <br/>
                        데뷔 : 2008 뮤지컬 &lt;햄릿 시즌2&gt;
                        <br/>
                        수상 : 2011년 대구국제뮤지컬페스티벌 신인상
                        <div className='site'>
                            <div className='insta_logo'>
                                <a href="https://www.instagram.com/lbk_bing" target='_blank'>
                                <img src='/images/profile/insta.png'></img> 
                                </a>
                            </div>
                            <div className='x_logo'>
                                <a href='https://x.com/lbkzz27' target='_blank'>
                                <img src='/images/profile/x.png'></img> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}