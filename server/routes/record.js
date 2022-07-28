const express = require("express")
const Record = require("../models/Record")
const Recordrouter = express.Router()

//get all records
Recordrouter.get("/records", async (req, res) => {
	const records = await Record.find()
	res.send(records)
})

//get record by timestamp
Recordrouter.get("/records/:timestamp", async (req, res) => {
    const record = await Record.find({timestamp: req.params.timestamp})
    res.send(record)
})

//post new record
Recordrouter.post("/addrecord", async (req, res) => {
    const record = new Record(req.body)
    await record.save()
    res.send(record)
})



module.exports = Recordrouter