const express = require("express")
const Schedule = require("../models/Schedule")
const Schedulerouter = express.Router()

//get all schedules
Schedulerouter.get("/schedules", async (req, res) => {
	const schedule = await Schedule.find()
	res.send(schedule)
})

//get one schedule
Schedulerouter.get("/schedules/:id", async (req, res) => {
    const schedule = await Schedule.findById(req.params.id)
    res.send(schedule)
})

//get schedule by dates
Schedulerouter.get("/schedules/:date", async (req, res) => {
    const schedule = await Schedule.find({dates: req.params.date})
    res.send(schedule)
})

//post new event
Schedulerouter.post("/addschedule", async (req, res) => {
    const schedule = new Schedule(req.body)
    await schedule.save()
    res.send(schedule)
})



module.exports = Schedulerouter