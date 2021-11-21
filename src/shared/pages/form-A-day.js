import React from 'react'
import {Link} from 'react-router-dom'
import './form-A-day.css'
const fmAnnday = props => {
    return(
        <div className="form-container">
            anniversary details
            <form>
                <label className="form-input">
                    Name    <input type="text"></input>
                </label>
                <label className="form-input" >
                    Year    <input type="text"></input>
                </label>
                <label className="form-input lar-input">
                    Text    <input type="text"></input>
                </label>
                <label className="form-input">
                    Date    <input type="date"></input>
                </label>
                <button className="cont-btn" type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default fmAnnday ;