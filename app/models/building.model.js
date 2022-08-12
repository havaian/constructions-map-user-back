// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating buildings schema
const buildingsSchema = new Schema({
	"geometry": {
		type: Object,
		required: true,
	},
	"properties": {
		type: Object,
		required: true,
	},
	"type": {
		type: String,
		required: true,
	}
}, { timestamps: true });

const Building = mongoose.model('Building', buildingsSchema);

// export default Building;

module.exports = Building;