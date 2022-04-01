const express = require("express")
const studentPageAPI = require("../controllers/studentPageController.js")
const router = express.Router();

router.get('/:id', studentPageAPI.getStudent);
router.put('/:id', studentPageAPI.updateStudent);

module.exports = router