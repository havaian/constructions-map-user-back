const express = require("express");
const router = express.Router();

const controllers = require('../controllers/user.controller');

router.post('/add-user', (req, res) => {
    controllers.addOneUser(req, res);
});

router.post("/verify-login", (req, res) => {
    controllers.verifyLogin(req, res);
});

router.post("/update-user", (req, res) => {
    controllers.updateOneUser(req, res);
});

router.post("/delete-user", (req, res) => {
    controllers.deleteOneUser(req, res);
});

router.get("/get-all-users", (req, res) => {
    controllers.findAllUsers(req, res);
});

module.exports = router;