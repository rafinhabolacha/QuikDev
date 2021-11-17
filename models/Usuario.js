const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Usuario =  new Schema({
   name:{
     type:String,
     required:true,
   },
   username:{
       type:String,
       required:true,
   },
   birthdate:{
      type:String,
      required:true,
   },
   address:{
      type:String,
      required:true,
},
   addressNumber:{
       type: Number,
    },
   phone:{
       type:String,
       required:true,
   },
   description:{
       type:String,
   }, 
   createdAt: { 
       type: Date, 
       default: Date.now 
   },
});

module.exports = mongoose.model('Usuario',Usuario);
