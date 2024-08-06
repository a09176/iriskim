const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
     
    name:{
        type:String,
        maxlength:50
    },
    age:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        maxlength:5
    },
    phonenumber:{
        type:Number,
        trim:true
    },
    created:{
        type:Date,
        default:Date.now
    }

})

const User = mongoose.model('User',userSchema) 

module.exports = {User}

