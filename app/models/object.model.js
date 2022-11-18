// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating buildings schema
const objectsSchema = new Schema({
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

const Object_schema = mongoose.model('Object_schema', objectsSchema);

// export Object schema as a module;
module.exports = Object_schema;