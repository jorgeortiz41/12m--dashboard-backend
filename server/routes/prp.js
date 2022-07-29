const express = require("express")
const Prp = require("../models/Prp")
const Prprouter = express.Router()

//get all output
Prprouter.get("/prp", async (req, res) => {
	const events = await Prp.find()
	res.send(events)
})

//get one parameter
Prprouter.get("/prp/:id", async (req, res) => {
    const event = await Prp.findById(req.params.id)
    res.send(event)
})

//post new output
Prprouter.post("/addprp", async (req, res) => {
    const event = new Prp(req.body)
    await event.save()
    res.send(event)
})



module.exports = Prprouter