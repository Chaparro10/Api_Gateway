

const jwt = require('jsonwebtoken');

const login=(req,res)=>{

    const {user,pass}=req.body;

    if(!req.body || Object.keys(req.body).length==0){
        return res.status(404).json({ok:false,msg:"No se proporciono data correctamente"})
    }

    try{
        //Aqui se haria la validacion lo de BD , en este caso es un array y vamos a simular con el usuario nomas

        if(!(user=='admin' && pass==123)){
                return res.status(501).json({ok:false,msg:"Las credenciales son incorrectas"});


        }

        //Generamos el token y lo mandamos como respuesta
        const token= jwt.sign({user:user,name:"Pedro"},"Secret", { expiresIn: '1h' });

        res.json({ok:true,msg:token})
        
    }catch(error){
        res.status(501).json({ok:false,msg:"Ocurrio un error en el login,intente nuevamente"})
    }
}


module.exports=login;