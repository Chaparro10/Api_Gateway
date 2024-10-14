

const ProductModel=require('../models/Product.model');


const getProduct=(req,res)=>{
    try{
        const respuesta=ProductModel;//En este caso se  llama directo por que es un array
        res.json({ok:true,msg:respuesta})
    }catch(error){
        
        res.status(501).json({ok:false,msg:"Ocurrio un error al Obtener la informacion"})
    }
}

module.exports={
    getProduct
}