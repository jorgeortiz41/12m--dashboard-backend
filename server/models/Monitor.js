let mongoose= require('mongoose')

const schema= new mongoose.Schema({

    ast:{
        type:String,
        required:true
    },

    lmst:{
        type:String,
        required:true
    },

    mjd:{
        type:String,
        required:true
    },

    pos:{
        type:String,
        required:true
    },

    curp:{
        type:String,
        required:true
    },
    errp:{
        type:String,
        required:true
    },
    reqp:{
        type:String,
        required:true
    },
    vhel:{
        type:String,
        required:true
    },
    vgeo:{
        type:String,
        required:true
    },

}) 

    module.exports= mongoose.model("Monitor",schema,"MonitorCollection")