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

