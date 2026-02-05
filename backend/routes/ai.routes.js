const express = require("express");
const router = express.Router();
const { requireAuth } = require("@clerk/express");
const aiController = require("../controllers/ai.controller");

router.post("/generate", requireAuth(), aiController.generateContent);

module.exports = router;
