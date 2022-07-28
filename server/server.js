//get packages for server
const express = require("express");
const Event = require("./models/Event");
const cors = require("cors");
const Eventroutes = require("./routes/events");
const Prproutes = require("./routes/prp");
const Ifloroutes = require("./routes/iflo");
const Monitorroutes = require("./routes/monitor");
const Scheduleroutes = require("./routes/schedule");
const Recordroutes = require("./routes/record");
const MongoDBConnect = require("./MongoDBConnect");
const spawn = require("child_process").spawn;

//create express app
const app = express();

// //use spawn to run the python prpreader.py script
// const pythonProcess = spawn("python", ["prpreader.py"]);

// //show python output
// pythonProcess.stdout.on("data", data => {
//   console.log(`stdout: ${data}`);
// });

// //show python error
// pythonProcess.stderr.on("data", data => {
//   console.log(`stderr: ${data}`);
// });

// //close python process
// pythonProcess.on("close", code => {
//   console.log(`child process exited with code ${code}`);
// });

//app use
app.use(cors());
app.use(express.json());
app.use("/api", Eventroutes, Prproutes, Ifloroutes, Monitorroutes, Scheduleroutes, Recordroutes);

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
