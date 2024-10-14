



const {Router} = require('express');
const { getProduct } = require('../controllers/ProductController');

const router=Router();


router.get('/product',getProduct);

module.exports=router;