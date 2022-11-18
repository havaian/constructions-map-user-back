const db = require('../models');

// Create and Save a new object
exports.addOneObject = (req, res) => {
    const object = new db.objects(req.body);
    try {
        object.save()
        .then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not add the object');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve all objects from the database
exports.findAllObjects = (req, res) => {
    try {
        db.objects.find().then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ No objects to show');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Find a single object with an id
exports.findOneObject = (req, res) => {
    try {
        db.objects.findById(req.params.id).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not find the object');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update a object by the id in the request
exports.updateOneObject = (req, res) => {
    try {
        db.objects.findByIdAndUpdate(req.params.id, req.body).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not update the object');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a object with the specified id in the request
exports.deleteOneObject = (req, res) => {
    try {
        db.objects.findByIdAndDelete(req.params.id).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not delete the object');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete all objects from the database
exports.deleteAllObjects = (req, res) => {
    try {
        db.objects.deleteMany().then(result => {
            if (result.length != 0) {
                if (result.acknowledged === true) {
                    res.status(200).send(result);
                }
            } else {
                res.status(400).send('❎ Could not delete the object');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};