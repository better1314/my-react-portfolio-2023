import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faSchool, faCertificate, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Timeline(){
    return(
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Jan 2021 - present"
                    dateClassName='date-timeline textalign-left'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">Hong Leong Bank Malaysia</h3>
                    <h4 className="vertical-timeline-element-subtitle">Executive</h4>
                    <p>
                    Coding with Java, SQL, Spring and promoted from Graduate Trainee
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName='date-timeline'
                    date="Sep - Dec 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">Nettium Sdn Bhd</h3>
                    <h4 className="vertical-timeline-element-subtitle">Junior Software Engineer</h4>
                    <p>
                    Coding with C#, SQL, HTML/CSS
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName='date-timeline textalign-left'
                    date="Feb - July 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">CIMB Bank Malaysia</h3>
                    <h4 className="vertical-timeline-element-subtitle">Internship</h4>
                    <p>
                    Learn on APM Tools, such as Nagios, Dynatrace, Splunk
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName='date-timeline'
                    date="2018-2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">DynaFront System Bhd</h3>
                    <h4 className="vertical-timeline-element-subtitle">Part Timer</h4>
                    <p>
                    Basic office work, e-commerce admin and simple programming work.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    dateClassName='date-timeline textalign-left'
                    date="2018 - 2020"
                    iconStyle={{ background: 'rgb(255, 128, 0)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faCertificate}/>}
                >
                    <h3 className="vertical-timeline-element-title">Tunku Abdul Rahman Univercity College</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree in Information Technology</h4>
                    <p>
                    Setapak, Kuala Lumpur
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    dateClassName='date-timeline'
                    date="2016 - 2018"
                    iconStyle={{ background: 'rgb(255, 128, 0)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faCertificate}/>}
                >
                    <h3 className="vertical-timeline-element-title">Tunku Abdul Rahman Univercity College</h3>
                    <h4 className="vertical-timeline-element-subtitle">Diploma in Internet Technology</h4>
                    <p>
                    @Segamat, Johor.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    dateClassName='date-timeline textalign-left'
                    date="2011 - 2016"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">SMK Ledang</h3>
                    <h4 className="vertical-timeline-element-subtitle">Secondary School</h4>
                    <p>
                    @Tangkak, Johor.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    dateClassName='date-timeline'
                    date="2004 - 2010"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">SJKC Chi Ming 1</h3>
                    <h4 className="vertical-timeline-element-subtitle">Primary School</h4>
                    <p>
                    @Tangkak, Johor.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    dateClassName='date-timeline textalign-left'
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faCirclePlay}/>}
                    date="23 August 1998"
                />
                </VerticalTimeline>
        </>
    );
}

export default Timeline;