let mongoose= require('mongoose')

const EventScheme= new mongoose.Schema({

    operatorname:{

     type:String,

     required:true   

    },

    Date:String,

    EventCode:String,

    TimeStamp:String, 

    Comment:String,

    EventID:String,

     }) 

    module.exports= mongoose.model('eventmodel',EventScheme,'EventCollection2')