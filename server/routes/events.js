const express = require("express")
const Event = require("../models/Event")
const Eventrouter = express.Router()

//get all events
Eventrouter.get("/events", async (req, res) => {
	const events = await Event.find()
	res.send(events)
})

//get one event
Eventrouter.get("/events/:id", async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.send(event)
})

//post new event
Eventrouter.post("/addevents", async (req, res) => {
    const event = new Event(req.body)
    await event.save()
    res.send(event)
})

//update event by id
Eventrouter.put("/editevents/:id", async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.send(event)
})

//delete event by id
Eventrouter.delete("/eraseevents/:id", async (req, res) => {
    await Event.findByIdAndDelete(req.params.id)
    res.send(`event with id ${req.params.id} deleted`)
})


module.exports = Eventrouter