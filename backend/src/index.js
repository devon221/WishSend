const express = require('express')
require('./db/mongoose')
const bday = require("./models/bday")
const annDay = require("./models/annDay")
const annday = require('./models/annDay')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/bdays' , (req , res)=> {
    bday.find({}).then((bdays)=>{
        res.send(bdays)
    }).catch((e)=>{
        res.status(500).send()
    })
})

/** 
app.post('/annday' , (req , res)=> {
    const newAnnday = new annday(req.body);
    newAnnday.save().then(()=>{
        console.log(newAnnday)
    }).catch((e)=>{
        res.status(400).send(e)
    })
    res.send('testing!')
})

app.post('/bdays' , (req , res)=>{
    const newbday = new bday(req.body)
    newbday.save().then(()=>{
        console.log(newbday)
    }).catch((e)=> {
        res.status(400).send(e)
    })
    res.send('testing!')
}  )
*/
app.listen(port , ()=> {
    console.log("server is up on port : " , port) ;
})