

const axios=require('axios');


const getUser=async (req,res)=>{
    try{
            const respuesta = await axios.get(`${process.env.SERVICIO_USER}/user`)

            res.json({ok:true,msg:respuesta.data})
    }catch(error){
        res.status(501).json({ok:false,msg:"Ocurrio un error con el servicio de Usuarios"})
    }
}


module.exports={
    getUser
}