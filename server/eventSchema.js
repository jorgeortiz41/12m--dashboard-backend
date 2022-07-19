let mongoose= require('mongoose')

const EventScheme= new mongoose.Schema({

    operator:String,

    date:String,

    eventcode:String,

    comment:String,

    eventID:String,

     },
     {
        timestamps:true
    }) 

    module.exports= mongoose.model('eventmodel',EventScheme,'EventCollection2')