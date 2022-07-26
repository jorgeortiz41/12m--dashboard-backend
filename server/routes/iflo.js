const express = require("express")
const Iflo = require("../models/Iflo")
const Iflorouter = express.Router()

//get all events
Iflorouter.get("/iflo", async (req, res) => {
	const events = await Iflo.find()
	res.send(events)
})

//get one event
Iflorouter.get("/iflo/:id", async (req, res) => {
    const event = await Iflo.findById(req.params.id)
    res.send(event)
})

//post new event
Iflorouter.post("/addiflo", async (req, res) => {
    const event = new Iflo(req.body)
    await event.save()
    res.send(event)
})



module.exports = Iflorouter