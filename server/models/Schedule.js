let mongoose= require('mongoose')


const schema= new mongoose.Schema({

    operators:{
        type: Array,
        required:true
    },
    eventcodes:{
        type: Array,
        required:true
    },

    dates:{
        type: String,
        required:true
    }
     }) 

    module.exports= mongoose.model("Schedule",schema,"ScheduleCollection")
    