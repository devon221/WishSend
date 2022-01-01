const mongoose = require('mongoose')
const validator = require('validator')

const bday = mongoose.model('bday' , {
    name : {
        type : String ,
        trim : true ,
        required : true
    },
    occasion : {
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
    }, 
    day : {
        type : Number
    },
    month : {
        type : Number
    }
})

module.exports = bday 
