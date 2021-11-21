const mongoose = require('mongoose')
const validator = require('validator')

const bday = mongoose.model('bday' , {
    name : {
        type : String ,
        trim : true ,
        required : true
    },
    wishes : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    email: {
        type : String , 
        required : true , 
        trim : true
    }
})

module.exports = bday 
