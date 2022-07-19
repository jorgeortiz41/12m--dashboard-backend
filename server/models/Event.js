let mongoose= require('mongoose')

const schema= new mongoose.Schema({

    operator:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    eventcode:{
        type:String,
        required:true
    },

    comment:{
        type:String,
        required:false
    },

    eventID:{
        type:String,
        required:true
    },

     },
     {
        timestamps:true
    }) 

    module.exports= mongoose.model("Event",schema,"EventCollection")
    