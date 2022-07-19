const express = require("express")
const Event = require("../models/Event")
const router = express.Router()

//get all events
router.get("/events", async (req, res) => {
	const events = await Event.find()
	res.send(events)
})

//get one event
router.get("/events/:id", async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.send(event)
})

//post new event
router.post("/addevents", async (req, res) => {
    const event = new Event(req.body)
    await event.save()
    res.send(event)
})

//update event by id
router.put("/editevents/:id", async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.send(event)
})

//delete event by id
router.delete("/eraseevents/:id", async (req, res) => {
    await Event.findByIdAndDelete(req.params.id)
    res.send(`event with id ${req.params.id} deleted`)
})


module.exports = router