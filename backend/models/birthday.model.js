const mongoose = require("mongoose");

const BirthdaySchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		index: true,
	},
	firstname: {
		type: String,
		required: true,
		trim: true,
	},
	lastname: {
		type: String,
		required: true,
		trim: true,
	},
	music: {
		type: String,
		enum: [
			"none",
			"emotional-uplifting",
			"melancholic-nostalgic",
			"piano-background",
			"piano-moment",
			"sentimental-leger",
			"sentimental-mellow",
		],
		default: "none",
	},
	cards: [
		{
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
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Birthday", BirthdaySchema);
