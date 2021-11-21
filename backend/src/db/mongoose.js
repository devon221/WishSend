const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/inviteMaker-api' , {
    useNewUrlParser : true 
})


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




const me = new annday({
    hname : "male" , 
    fname : "female" , 
    wishes : "happy so many years together" , 
    year : 20 , 
    date : '1999-09-12', 
    email : "pronoy@"
})

me.save().then((res)=>{
    console.log(res)

}).catch((err)=> {
    console.log(err)
})