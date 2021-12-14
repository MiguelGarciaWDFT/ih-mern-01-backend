const express 		= require("express")
const router		= express.Router()

const storeController = require("./../controllers/storeController")

//crear tienda
router.post("/create", storeController.create)
//crear una guitarra
router.get("/readone/:id", storeController.readOne)
//actualizar guitarra

//borrar una guitarra



module.exports = router