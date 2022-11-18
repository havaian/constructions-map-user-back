const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const db = require("./app/models/index.js");

const morgan = require("morgan");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const buildingRoutes = require('./app/routes/building.routes');
const objectRoutes = require('./app/routes/object.routes');
const userRoutes = require('./app/routes/user.routes');

const app = express();
var corsOptions = {
  origin: process.env.front_end_url
};
app.use(cors(corsOptions));

// set up route logger tools
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log(`${Date(Date.now())}`);
  next();
})

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// default for checking if api works
app.get("/", (req, res) => {
  res.json({ 
    message: `It's working! 🙌`
  });
});

// integrating all routes to the project
app.use(buildingRoutes);
app.use(objectRoutes);
app.use(userRoutes);

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