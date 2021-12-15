//importaciones
const mongoose = require("mongoose")

//schema
const storeSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	domicilio: {
		type: String,
		required: true
	},
	telefono: {
		type: String
	}
})

// 3. MODELOS
const Store = mongoose.model("Store", storeSchema)


// 4. EXPORTACIÓN
module.exports = Store