let mongoose= require('mongoose')

const schema= new mongoose.Schema({

    mode:{
        type: String,
        required:true
    },

    stat:{
        type: String,
        required:true
    },

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

    module.exports= mongoose.model("Prp",schema,"PrpCollection")
    