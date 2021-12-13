const express 		= require("express")
const router		= express.Router()

const storeController = require("./../controllers/storeController")

router.post("/create", storeController.create)

module.exports = router