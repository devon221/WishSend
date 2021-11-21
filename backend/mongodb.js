const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'inviteMaker';

MongoClient.connect(connectionURL , {useNewUrlParser : true} , (error , client)=>{
    if(error)
    {
        return console.log("error : unable to connect!");
    }
   const db =  client.db(dbName)

   const id = new ObjectID()
   console.log(id)

 //  db.collection('bday').findOne({name : "Pronoy"} , (er , user) => {
   //    if(er)
//return console.log("Error : couldnt be found !")
//
    //   console.log(user)
 //  })
//
 //  db.collection('bday').find({name : "freind1"}).count((err , user ) => {
  //     if(err)
  //     return console.log("Error : couldnt be found!")
//
 //      console.log(user)
 //  })
//
 //  db.collection('bday').updateMany({name : "friend2"} , {
 //      $set : {
//           name : "asish"
//       }
 //  }).then((res)=>{//
    //   console.log(res)
 //  }).catch((err)=> {//
    //   console.log(err)
 //  })
 //  db.collection('bday').insertMany([
 //      {
 //      date : "3/3/2002",
//      wishes : "happy birthday bro",
 //      email : "vedchak2020@gmail.vcom"
//   } , 
//   {
//       name : "friend2" , 
//       date : "4/4/2002",
//       wishes : "happybirtday homie",
//       email : "cpro@gmail.com"
//   }
//] , (error , result) => {
// //      if(error)
//       return console.log("error : unable to complete")
//
//       console.log(result)
//   })

})