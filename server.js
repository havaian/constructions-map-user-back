const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/index.js");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const controllers = require('./app/controllers/building.controller');

const app = express();
var corsOptions = {
  origin: process.env.front_end_url
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ 
    message: `It's working! 🙌`
  });
});

app.get("/get-all-buildings", (req, res) => {
  controllers.findAllBuildings(req, res);
});
 
app.get("/get-building/:id", (req, res) => {
  controllers.findOneBuilding(req, res);
});

app.post('/add-building', (req, res) => {
  controllers.addOneBuilding(req, res);
});

app.post("/update-building/:id", (req, res) => {
  controllers.updateOneBuilding(req, res);
});

app.post("/delete-building/:id", (req, res) => {
  controllers.deleteOneBuilding(req, res);
});

app.post("/delete-all-buildings", (req, res) => {
  controllers.deleteAllBuildings(req, res);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Port: ${PORT} ✅`);
});

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB ✅");
})
.catch(err => {
  console.log("MongoDB ❌", err);
  process.exit();
});