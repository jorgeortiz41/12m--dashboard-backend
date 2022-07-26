const express = require("express")
const Monitor = require("../models/Monitor")
const Monitorrouter = express.Router()

//get all events
Monitorrouter.get("/monitor", async (req, res) => {
	const events = await Monitor.find()
	res.send(events)
})

//get one event
Monitorrouter.get("/monitor/:id", async (req, res) => {
    const event = await Monitor.findById(req.params.id)
    res.send(event)
})

//post new event
Monitorrouter.post("/addmonitor", async (req, res) => {
    const event = new Monitor(req.body)
    await event.save()
    res.send(event)
})



module.exports = Monitorrouter