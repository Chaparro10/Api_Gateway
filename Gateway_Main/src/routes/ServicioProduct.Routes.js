const {Router} = require('express');
const getProduct = require('../controllers/ServicioProduct');


const router=Router();


router.get('/product',getProduct);

module.exports=router;