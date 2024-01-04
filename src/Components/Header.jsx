import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../GanZhiKiat-2024-Resume.pdf';
import '../css/App.css';

function Header(){
    return (
        <>
        <div className='header-container'>
            <Link to="/" style={{textDecoration : 'none'}}><div className='header-title'>My Portfolio.</div></Link>
            <div className='header-button'>
                <a href = {Pdf} target = "_blank" rel="noreferrer"><button type="button">Full Resume</button></a>
            </div> 
        </div>
        <div className='seperate-line'/>
        </>
    );
}

export default Header;