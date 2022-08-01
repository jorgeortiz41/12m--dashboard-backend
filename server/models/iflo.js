let mongoose= require('mongoose')

const schema= new mongoose.Schema({

    if1frq:{
        type:String,
        required:true
    },

    vlbafrq:{
        type:String,
        required:true
    },

    gainif:{
        type:String,
        required:true
    },

    mix1:{
        type:String,
        required:true
    },

    mix2:{
        type:String,
        required:true
    },
    mix3:{
        type:String,
        required:true
    },
    mix4:{
        type:String,
        required:true
    },
    mix5:{
        type:String,
        required:true
    },
    mix6:{
        type:String,
        required:true
    },
    mix7:{
        type:String,
        required:true
    },
    mix8:{
        type:String,
        required:true
    },

}) 

    module.exports= mongoose.model("Iflo",schema,"IfloCollection")