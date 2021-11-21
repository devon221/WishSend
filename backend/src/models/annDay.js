const mongoose = require('mongoose')
const validator = require('validator')


const annday = mongoose.model('annday' , {
    hname : {
        type : String,
        trim : true ,
        required : true
    },
    fname : {
         type : String,
         trim : true , 
         required : true
    },
    wishes : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    } ,
    date : {
        type : Date,
        required : true
    }, 
    email : {
        type : String , 
        required : true , 
        validate(value){
            if(!validator.isEmail(value))
            {throw new Error('Value is invalid !');
        }
        }
    }

})

module.exports = annday