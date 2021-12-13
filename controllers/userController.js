// ./server/controllers/userController.js
const bcryptjs  = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User		= require("./../models/User")


exports.create = async (req, res) => {

	// 1. OBTENER USUARIO, EMAIL Y PASSWORD DEL FORMULARIO (REQ)
	const { 
		nombre,
		apellido,
		pais,
		direccion,
		email,
		password
	 } = req.body

	// 2A. REALIZAR EL PROCESO ASÍNCRONO
	try {
		
		// 3. GENERAR PASSWORD PARA BASE DE DATOS
		const salt	= await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt)

		// 4. CREAR USUARIO EN BASE DE DATOS
		const newUser = await User.create({
			nombre,
			apellido,
			pais,
			direccion,
			email,
			password: hashedPassword
		})

		//autenticacion con tokens
        //A.crear un payload(informacion del usuario)

        const payload = {
            user:{
                id: newUser._id //id de mongodb del usuario
            }
        }

        //B. Firmar el token
        jwt.sign(
            payload,//datos que acompañan al token
            process.env.SECRET,//palabra secreta(firma)
            {
                expiresIn:360000//expiracion del token

            },
            (error, token)=>{
                if(error) throw error
                res.json({
                    msg:"token generado correctamente.",
                    data:token
                })

            }
        )

	} catch (error) {
	// 2B. EN CASO DE ERROR CON AWAIT
		res.status(500).json({
			msg: "Hubo un error con la creación de usuario.",
			error: error
		})

	}


}