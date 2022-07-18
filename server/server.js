//get packages for server
const express = require("express");
const Event = require("./eventSchema");
const mongodbConnected = require("./MongoDBConnect");
const cors = require("cors");

//create express app
const app = express();

//app use
app.use(cors());
app.use(express.json());

console.log("EVENTS", Event);

//get default page
app.get("/", (req, res) => {
  res.send("this is default page");
}
);

//get about page
app.get("/about", (req, res) => {
  res.send("this is about page")
  Event.countDocuments().exec()
          .then(count=>{
                console.log("Total documents Count before addition :", count) 
          }) .catch(err => {
            console.error(err)
          })
}
);


// REST API for events
// get all events
app.get("/allevents", (req, res) => {
  // get all events from the database
  Event.find({}, (err, events) => {
    if (err) return res.status(500).send(err);
    res.send(events);
  });
}
);

// get event by id
app.get("/events/:id", (req, res) => {
  // get event by id from the database
  Event.findById(req.params.id, (err, event) => {
    if (err) return res.status(500).send(err);
    res.send(event);
  });
}
);

// add event to database
app.post("/addevents", (req, res) => {
  // add event to the database
  const event = new Event(req.body);
  event.save((err, event) => {
    if (err) return res.status(500).send(err);
    res.send(event);
  });
}
);

// update event by id
app.put("/events/:id", (req, res) => {
  // update event by id in the database
  Event.findByIdAndUpdate(req.params.id, req.body, (err, event) => {
    if (err) return res.status(500).send(err);
    res.send(event);
  });
}
);

// delete event by id
app.delete("/events/:id", (req, res) => {
  // delete event by id from the database
  Event.findByIdAndRemove(req.params.id, (err, event) => {
    if (err) return res.status(500).send(err);
    res.send(event);
  });
} 
);

//listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
