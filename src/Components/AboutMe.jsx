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
                        <img src="https://assets.codepen.io/285131/neongirl.jpg" alt='imge-me'/>
                        <h2>Gan Zhi Kiat</h2>
                        <div className="social-media-icons">
                            <a href="#x">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a href="#x">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="#x">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#x">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                </div>
                <div className="content-section">
                    A student who graduated from TARUC, Bachelor's Degree in Information Technology (Internet Technology) with CGPA 3.63, made a dean list during my second year. 
                    Activly joining lots of competitions and activities during university life. Doing an internship at CIMB Bank Malaysia, currently employed by 
                    Hong Long Bank Malaysia as a Java software developer developing and maintaining the hong leong connect banking website for more than 3 years.
                </div>
            </div>
        </div>
        </>
    );
}

export default Description;