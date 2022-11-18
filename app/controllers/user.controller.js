const db = require('../models');

// Create and Save a new user
exports.addOneUser = (req, res) => {
    const user = new db.users(req.body);
    try {
        db.users.find({ username: req.body.username}).then(result => {
            if (result.length === 0) {
                user.save()
                .then(result => {
                    if (result.length != 0) {
                        res.status(200).send(result);
                    } else {
                        res.status(400).send('❎ Could not add the user');
                    }
                });
            } else {
                res.status(400).send('❎ Username already exists. Please, enter another one');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Find a single user with an id and verify login
exports.verifyLogin = (req, res) => {
    try {
        db.users.findOne({ username: req.body.username }).then(result => {
            if (result.length != 0) {
                if (result.password === req.body.password) {
                    res.status(200).send(result);
                } else {
                    res.status(400).send('❎ Username or login is incorrect');
                }
            } else {
                res.status(400).send('❎ Could not find the user');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update a user by the id in the request
exports.updateOneUser = (req, res) => {
    try {
        db.users.findOne({ username: req.body.username }).then(result => {
            if (result.length != 0) {
                if (result.password === req.body.old_password) {
                    db.users.updateOne({ username: req.body.username }, req.body).then(result => {
                        if (result.length != 0) {
                            res.status(200).send(result);
                        } else {
                            res.status(400).send('❎ Could not update the user');
                        }
                    });
                } else {
                    res.status(400).send('❎ Username or login is incorrect');
                }
            } else {
                res.status(400).send('❎ Could not find the user');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a user with the specified id in the request
exports.deleteOneUser = (req, res) => {
    try {
        db.users.findOne({ username: req.body.username }).then(result => {
            if (result.length != 0) {
                if (result.password === req.body.password) {
                    db.users.findOneAndDelete(req.body.username).then(result => {
                        if (result.length != 0) {
                            res.status(200).send(result);
                        } else {
                            res.status(400).send('❎ Could not delete the user');
                        }
                    });
                } else {
                    res.status(400).send('❎ Username or login is incorrect');
                }
            } else {
                res.status(400).send('❎ Could not delete the user');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve all users from the database
exports.findAllUsers = (req, res) => {
    try {
        db.users.find().then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ No users to show');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete all user from the database
exports.deleteAllUsers = (req, res) => {
    try {
        db.users.deleteMany().then(result => {
            if (result.length != 0) {
                if (result.acknowledged === true) {
                    res.status(200).send(result);
                }
            } else {
                res.status(400).send('❎ Could not delete the user');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};