import React from 'react';
import '../css/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Description(){
    return(
        <>
        <div className='description-container'>
            <div className="desctiption-center">
                <div className="profile-image">
                        <img src="/assets/images/profile.jpg" alt='imge-me'/>
                        <h2>Gan Zhi Kiat</h2>
                        <div className="social-media-icons">
                            <a href="https://www.facebook.com/zhikiat.gan/">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a href="https://www.instagram.com/zhikiat_gan/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="https://www.linkedin.com/in/zhikiatgan/">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="https://github.com/better1314">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                </div>
                <div className="content-section">
                    A student who graduated from TARUC, Bachelor's Degree in Information Technology (Internet Technology) with CGPA 3.63, made a dean list during my second year. 
                    Activly joining lots of competitions and activities during university life. Done an internship at CIMB Bank Malaysia, currently employed by 
                    Hong Long Bank Malaysia as a Java software developer developing and maintaining the hong leong connect banking website for more than 3 years. Started my journey as a Graduate Trainee and now has been promoted to Senior Executive.
                </div>
            </div>
        </div>
        </>
    );
}

export default Description;