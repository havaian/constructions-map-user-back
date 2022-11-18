const express = require("express");
const router = express.Router();
const controllers = require('../controllers/building.controller');

router.get("/get-all-buildings", (req, res) => {
  controllers.findAllBuildings(req, res);
});
 
router.get("/get-building/:id", (req, res) => {
  controllers.findOneBuilding(req, res);
});

router.post('/add-building', (req, res) => {
  controllers.addOneBuilding(req, res);
});

router.post("/update-building/:id", (req, res) => {
  controllers.updateOneBuilding(req, res);
});

router.post("/delete-building/:id", (req, res) => {
  controllers.deleteOneBuilding(req, res);
});

router.post("/delete-all-buildings", (req, res) => {
  controllers.deleteAllBuildings(req, res);
});

module.exports = router; 