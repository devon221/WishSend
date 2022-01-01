import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import './form-A-day.css'



const FmBday = () => {
    const [rem , setRem] = useState({name : "", occasion : "" , day : 0 , email : "" , month : 0})
    let name , value ;
    const handleChange = (e) => {
     
        name = e.target.name
        value = e.target.value
         
        setRem({...rem , [name]:value})
    }

    const submitHandler = async (e) => {

        e.preventDefault()
        
        const {name , occasion , day , email , month } = rem ;
         
         const res = await fetch("http://localhost:5000/bdays" , {
            method : "POST" , 
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                name , occasion , day , month , email 
            })
        }).then(()=>{
             console.log("success!")
        })   
        
       
    }
    

    return(
        <div className="form-container" method="POST" >
            Reminder Details
            <form  onSubmit={ submitHandler }>
            <label className="form-input">
                    Occasion  
                     <input 
                    name ="occasion"
                    id="occ"
                    type="text" 
                    value = {rem.occasion}
                    placeholder="birthday/anniversary/..."
                    onChange={handleChange}></input>
                </label>
                <label className="form-input">
                    Email
                     <input 
                    name ="email"
                    id="email"
                    type="text" 
                    value = {rem.email}
                    placeholder="abc@email.com"
                    onChange={handleChange}></input>
                </label>
                <label className="form-input">
                    Name   
                     <input 
                    name ="name"
                    id="name"
                    type="text" 
                    placeholder="name of the person to be remembered"
                    value = {rem.name}
                    onChange={handleChange}></input>
                </label>
                <label className="form-input" >
                   Day   <input 
                    name="day"
                    id = "day"
                    type="Number" 
                    placeholder="day"
                    value={rem.day}
                   onChange = {handleChange}></input>
                </label>
                <label className="form-input" >
                  Month   <input 
                    name="month"
                    id = "month"
                    type="Number" 
                    placeholder="month"
                    value={rem.month}
                   onChange = {handleChange}></input>
                </label>
                <button className="cont-btn"   >Submit</button>
            </form>
        </div>

        
        
    )
}

export default FmBday ;