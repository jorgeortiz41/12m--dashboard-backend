let mongoose= require('mongoose')

const schema= new mongoose.Schema({

    azm:{
        type:String,
        required:true
    },

    el:{
        type:String,
        required:true
    },

    contcls:{
        type:String,
        required:true
    },

    prgstat:{
        type:String,
        required:true
    },

    curst:{
        type:String,
        required:true
    },
    onsrc:{
        type:String,
        required:true
    },
    wreset:{
        type:String,
        required:true
    },
    wstop:{
        type:String,
        required:true
    },
    wreboot:{
        type:String,
        required:true
    },

}) 

    module.exports= mongoose.model("Monitor",schema,"MonitorCollection")