
const express = require("express");
const controller = require("../controllers/invoiceController");

const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.add);
router.put("/", controller.update);
router.get("/:id", controller.getByID);

module.exports.router = router;