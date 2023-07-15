import React from 'react';
import '../css/App.css';
import Timeline from './Timeline';

function MyJourney(){
    return(
        <>
        <div className='myjourney-container'>
            <span className='title'><span className='blue-word'>My</span> Journey</span>
            <Timeline/>
        </div>
        </>
    );
}

export default MyJourney;