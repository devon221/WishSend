const express = require('express')
require('./db/mongoose')
const bday = require("./models/bday")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/bdays' , (req , res)=>{
    const newbday = new bday(req.body)
    newbday.save().then(()=>{
        console.log(newbday)
    }).catch((e)=> {
        res.status(400).send(e)
    })
    res.send('testing!')
}  )

app.listen(port , ()=> {
    console.log("server is up on port : " , port) ;
})