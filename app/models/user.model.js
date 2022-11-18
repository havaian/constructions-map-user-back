// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating users schema
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 25,
		unique: true
	}, 
	password: {
		type: String,
		required: true,
		minLength: 10,
		maxLength: 64
	},
	role: {
		type: String,
		required: true,
	},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// export User schema as a module;
module.exports = User;