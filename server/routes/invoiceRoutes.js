
const express = require("express");
const controller = require("../controllers/invoiceController");

const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.add);
router.put("/", controller.update);

module.exports.router = router;