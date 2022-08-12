const db = require('../models');

// Create and Save a new building
exports.addOneBuilding = (req, res) => {
    const building = new db.buildings(req.body);
    try {
        building.save()
        .then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not add the building');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve all buildings from the database
exports.findAllBuildings = (req, res) => {
    try {
        db.buildings.find().then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ No buildings to show');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Find a single building with an id
exports.findOneBuilding = (req, res) => {
    try {
        db.buildings.findById(req.params.id).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not find the building');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update a building by the id in the request
exports.updateOneBuilding = (req, res) => {
    try {
        db.buildings.findByIdAndUpdate(req.params.id, req.body).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not update the building');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a building with the specified id in the request
exports.deleteOneBuilding = (req, res) => {
    try {
        db.buildings.findByIdAndDelete(req.params.id).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(400).send('❎ Could not delete the building');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete all buildings from the database
exports.deleteAllBuildings = (req, res) => {
    try {
        db.buildings.deleteMany().then(result => {
            if (result.length != 0) {
                if (result.acknowledged === true) {
                    res.status(200).send(result);
                }
            } else {
                res.status(400).send('❎ Could not delete the building');
            }
        });
    } catch (err) {
        res.status(400).send(err);
    }
};