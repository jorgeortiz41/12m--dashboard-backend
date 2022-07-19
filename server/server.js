//get packages for server
const express = require("express");
const Event = require("./models/Event");
const cors = require("cors");
const Eventroutes = require("./routes/events");
const Prproutes = require("./routes/prp");
const MongoDBConnect = require("./MongoDBConnect");

//create express app
const app = express();

//app use
app.use(cors());
app.use(express.json());
app.use("/api", Eventroutes, Prproutes);

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

//listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
