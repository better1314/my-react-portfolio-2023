import React from 'react';
import '../css/App.css';
import ProgressBar from './ProgressBar';

function MySkills(){
    return(
        <>
        
        <div className='myskill-container'>
            <span className='title'>About <span className='blue-word'>ME</span></span>
            <div className="myskill-upper-container">
                <div className="content-box">
                    <div className="sub-title"><span className='blue-word'>E</span>ducation Level</div>
                    <div className="content-itself">
                        <h3 className='text-align-left'>Tunku Abdul Rahman University College</h3>
                        <ul>
                            <li>Bachalor's Degree in Informations Technology (Internet Technology)</li>
                            <li>@ CGPA 3.63</li>
                            <li>Obtain a Dean list</li>
                            <li>May 2018 - Aug 2020</li>
                        </ul>
                        <div className='seperate-line-container'/>
                        <ul>
                            <li>Diploma in Informations Technology (Internet Technology)</li>
                            <li>@ CGPA 3.65</li>
                            <li>May 2016 - Mac 2018</li>
                        </ul>
                    </div>
                </div>
                <div className="content-box">
                    <div className="sub-title"><span className='blue-word'>C</span>oding Skill</div>
                    <div className="content-itself">
                        <ProgressBar title='Java' width='80'/>
                        <ProgressBar title='HTML/CSS' width='80'/>
                        <ProgressBar title='JS Frameworks' width='50'/>
                    </div>
                </div>
            </div>
            <div className="myskill-lower-container">
                <div className="content-box">
                    <div className="sub-title"><span className='blue-word'>E</span>xtra-Curiculum Activities</div>
                    <div className="content-itself">
                        <h3 className='text-align-left'>World Skill Malaysia 2019</h3>
                        <ul>
                            <li>Finalist in World Skill Malaysia 2019 - IT Track</li>
                            <li>@ Kuala Lumpur</li>
                        </ul>
                        <h3 className='text-align-left'>University Startup Challenge 2020</h3>
                            <ul>
                                <li>Pitch an idea about mordern e-commerce to solve current problem.</li>
                                <li>Shortlisted by the organizer.</li>
                            </ul>
                    </div>
                </div>
                <div className="content-box">
                    <div className="sub-title"><span className='blue-word'>S</span>ide Projects</div>
                    <div className="content-itself">
                        <h3 className='text-align-left'>My Portfolio Website</h3>
                        <ul>
                            <li>Solely build and deploy by myselft.</li>
                            <li>Develop in React Framework with HTML and CSS</li>
                            <li>Deploy and Hosted in a CPanel provided by Jimat Hosting</li>
                        </ul>
                        <h3 className='text-align-left'>Basic Ecommerce Backend</h3>
                        <ul>
                            <li>Solely build and deploy by myselft.</li>
                            <li>Develop in Springboot Framework and Java language</li>
                            <li>Another version in ExpressJS in Javascript</li>
                            <li>Deploy and Hosted in a CPanel provided by Jimat Hosting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MySkills;