const Eventschema = require("../models/Event")

let mongoose= require('mongoose')

const schema= new mongoose.Schema({
    timestamp:{
        type:String,
        required:true
    }
    })

    module.exports= mongoose.model("Record",schema,"RecordCollection")
    