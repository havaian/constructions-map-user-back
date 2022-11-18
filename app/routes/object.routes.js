const express = require("express");
const router = express.Router();
const controllers = require('../controllers/object.controller');

router.get("/get-all-objects", (req, res) => {
  controllers.findAllObjects(req, res);
});
 
router.get("/get-object/:id", (req, res) => {
  controllers.findOneObject(req, res);
});

router.post('/add-object', (req, res) => {
  controllers.addOneObject(req, res);
});

router.post("/update-object/:id", (req, res) => {
  controllers.updateOneObject(req, res);
});

router.post("/delete-object/:id", (req, res) => {
  controllers.deleteOneObject(req, res);
});

router.post("/delete-all-objects", (req, res) => {
  controllers.deleteAllObjects(req, res);
});

module.exports = router; 