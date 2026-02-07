const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { clerkMiddleware } = require("@clerk/express");
const birthdayRoutes = require("./routes/birthday.routes");
const valentineRoutes = require("./routes/valentine.routes");
const aiRoutes = require("./routes/ai.routes");
const app = express();

const corsOptions = {
	origin: ["https://wishly.bryanherdianto.site", "http://localhost:5173"],
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
	optionsSuccessStatus: 200,
};

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(clerkMiddleware());
app.use("/birthday", birthdayRoutes);
app.use("/valentine", valentineRoutes);
app.use("/ai", aiRoutes);

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("MongoDB connected successfully"))
	.catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
	res.send("Wishly Backend is running...");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
