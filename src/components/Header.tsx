import React from 'react';
import '../assets/styles/Header.css';
import mainLogo from '../assets/images/main.png';


export default function Header() {

    return (
        <div className='header'>
            <div className='logo_container'>
                <img src={mainLogo} alt="main" className='logo'/>
            </div>
        </div>
    )
}