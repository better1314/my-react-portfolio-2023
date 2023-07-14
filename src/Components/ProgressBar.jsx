import React from 'react';
import '../css/App.css';

function ProgressBar(props){
    return(
        <div className="container" style={{textAlign:'left', marginTop:'10px', paddingLeft:'5px'}}>
            <span style={{paddingLeft: '5px'}}>{props.title}</span>
            <div className="progress2">
                <div className="progress-bar2" style={{width:props.width+'%'}}>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;