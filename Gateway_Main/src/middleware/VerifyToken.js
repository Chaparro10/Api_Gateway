
const jwt =require('jsonwebtoken');

const VerifyToken=(req,res,next)=>{

        const token=req.header('Authorization');

            console.log("token",token)

        if(!token){
            return res.status(404).json("No se proporciono un token")
        }

        try{
            const theToken=token.split(' ')[1];

            //Validar token

            const isValid=jwt.verify(theToken,"Secret");
            
            if(!isValid){
                return res.json(501).json({ok:false,msg:"El token proporcionado no es valido"})
            }

            req.user=isValid; //Hacemo nuestro request para usarlo en otra funciion
           next();//Indica que se pasa a las siguiente funcion
        }catch(error){
            res.status(501).json({ok:false,msg:"Ocurrio un error al verificar el token"})
        }
       


}


module.exports=VerifyToken;