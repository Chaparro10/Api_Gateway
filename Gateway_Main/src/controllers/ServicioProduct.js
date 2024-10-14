


const axios=require('axios');

const getProduct=async(req,res)=>{
    try{
        const respuesta=await axios.get(`${process.env.SERVICIO_PRODUCT}/product`)
        res.json({ok:true,msg:respuesta.data})
    }catch(error){
        console.log("Aui",error)
        res.status(500).json({ok:false,msg:"Ocurrio un error con el servicio de Products"})
    }
}


module.exports=getProduct