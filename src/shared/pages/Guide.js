import React from 'react'
import {Link} from 'react-router-dom'
import './Guide.css'
const Guide = props => {
    return(
        <div className="home-container">
            <div className="content-container">
                <h1>Do you forget to wish your friends ? </h1>
                <h3>Don't fret no more because we got your back!</h3>
            </div>
            <div className="content-container">
                
                <ul>Steps to follow :
                    <li>Enter the details in the form. </li>
                    <li>We will remember to remind you !.</li>
                </ul>
               
            </div>
           
        </div>
        
    )
}

export default Guide;
