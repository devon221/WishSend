require('dotenv').config()
const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const bday = require("./models/bday")
const annDay = require("./models/annDay")
const annday = require('./models/annDay')
const cron = require('node-cron')
const sgMail = require('@sendgrid/mail')
const app = express()
const router = express.Router()
const port = process.env.PORT || 5000
 
const API_key = "WISHSEND_API_KEY_GET_YOURS_OWN"
sgMail.setApiKey(API_key)

app.use(cors({
  origin : "*"
}))
app.use(express.json())
router.use(express.json())
app.get('/' , (req , res)=>{
    res.send("home page ");
})
app.post('/bdays' ,  async (req , res)=>{
    const newbday = new bday(req.body)
    const {name , occasion , day , month , email  } = newbday;
    
      const message = {
        to : email , 
        from : "cpronoy6@gmail.com" , 
        subject : occasion , 
        text : "did you remember about " + name  
      }
    
      cron.schedule( ' 1 6 30 ' + day +' ' + month + ' * ', async ()=> {
      sgMail.send(message).then((res)=>console.log("email sent!")).catch((er)=>console.log(er.message))
        

       // console.log(newbday)  
      })


    res.send('testing!')
}  )
 
app.listen(port , ()=> {
    console.log("server is up on port : " , port) ;
})
