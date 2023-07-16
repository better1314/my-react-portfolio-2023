import React from 'react';
import '../css/App.css';
import TextTransition, { presets } from 'react-text-transition';

function Mainpage(){
    const [index, setIndex] = React.useState(0);
    const TEXTS = ['Software Engineer', 'Freelancer', 'Car Enthusiast'];

    React.useEffect(() => {
        const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return(
        <div className='main-container'>
            <div className='main-left-content'>
                <div className='my-picture'>
                    <img src='/assets/images/me.webp' alt="Gan Zhi Kiat" />
                </div>
            </div>
            <div className='main-right-content'>
                <div className='right-content'>
                    Hi, I'm Gan Zhi Kiat.
                    <div className="span-a">A</div>
                    <div className='loop'>
                        <TextTransition className='loop-word' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    </div>
                    <div className="span-short-description">in Malaysia over 3 years of professional experienced.</div>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;