const mongoose = require("mongoose");

const ValentineSchema = new mongoose.Schema({
	nickname: {
		type: String,
		required: true,
		trim: true,
	},
	music: {
		type: String,
		enum: [
			"none",
			"field-grass",
			"romantic-hopeful",
			"romantic-love",
			"romantic-wedding",
		],
		default: "none",
	},
	card: {
		title: {
			type: String,
			required: true,
			trim: true,
		},
		message: {
			type: String,
			required: true,
			trim: true,
		},
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Valentine", ValentineSchema);
