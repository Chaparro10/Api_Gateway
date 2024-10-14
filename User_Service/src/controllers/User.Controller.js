


const userModel=require('../models/modelUser');


const getUser=(req,res)=>{
        try{
            const respuesta=userModel;
            res.json(respuesta);
        }catch(error){
            res.status(501).json({ok:false,msg:"Ocurrio un error al mostrar la informacion"})
        }
}


module.exports={
    getUser
}