const express = require("express");
const router = express.Router();
const valentineController = require("../controllers/valentine.controller");

router.get("/cards", valentineController.getValentines);
router.post("/cards", valentineController.createValentine);
router.get("/cards/:id", valentineController.getValentineById);
router.put("/cards/:id", valentineController.updateValentine);
router.delete("/cards/:id", valentineController.deleteValentine);

module.exports = router;
