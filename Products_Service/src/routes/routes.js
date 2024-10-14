


const {Router}=require('express');


const router=Router();


const ProductRoute=require('../routes/product.routes');



router.use('',ProductRoute);

module.exports=router;