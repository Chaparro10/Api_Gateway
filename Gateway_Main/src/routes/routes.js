

const {Router}=require('express');

const router=Router();


const UserRoute=require('./Servicio.Routes');
const ProductRoute=require('./ServicioProduct.Routes');

router.use('',UserRoute);
router.use('',ProductRoute);

module.exports=router;