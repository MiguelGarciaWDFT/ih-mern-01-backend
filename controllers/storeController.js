const Store = require ("./../models/Store")

exports.create= async(req,res)=>{
    const{
        nombre,
        domicilio,
        telefono
    } = req.body
try {
    const newStore = await Store.create({
        nombre,
        domicilio,
        telefono
    })
    res.json({
        msg:"tienda creada",
        data:newStore
    })
} catch (error) {
    res.status(500).json({
        msg:"error al crear tienda",
        error:error
    })
    
}


}

exports.readAll = async (req, res) => {

	try {
		
		const stores = await Store.find({})

		res.json({
			msg: "Tiendas encontradas.",
			data: stores
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error al encontrar tiendas",
			error: error
		})

	}

}

exports.readOne = async(req,res)=>{
    const {id}= req.params

    try {
        const store = await Store.findById(id)
        res.json({
            msg:"Tienda vista con exito.",
            data: store
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener informacion de la tienda",
            error: error
        })
        
    }
} //correcta


