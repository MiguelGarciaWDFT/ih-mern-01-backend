const Store = require ("./../models/Store")

exports.create= async(req,res)=>{
    const{
        domicilio,
        telefono
    } = req.body
try {
    const newStore = await Store.create({
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

