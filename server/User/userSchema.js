const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    fname:{
        type:String,
      
        required:true,
       
    },
    lname:{
        type:String,
      
        required:true,
       
    },
    contact:{
        type:String,
       
        required:true,
    
    },
    email:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:Object
    },
    imgUrl:{
        type:String

    },
    isActive:{
        type:Boolean,
        default:true
    },
});
module.exports=mongoose.model('users',userSchema)

