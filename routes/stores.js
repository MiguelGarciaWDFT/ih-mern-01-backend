const express 		= require("express")
const router		= express.Router()

const storeController = require("./../controllers/storeController")

//crear tienda
router.post("/create", storeController.create)
//leer guitarras
router.get("/readall", storeController.readAll)

//crear una guitarra
router.get("/readone/:id", storeController.readOne)
//actualizar guitarra
router.put("/edit/:id", storeController.edit)
//borrar una guitarra

module.exports = router