

const {Router}= require('express');
const { getUser } = require('../controllers/ServicioUser');
const VerifyToken = require('../middleware/VerifyToken');

const router=Router();


router.get('/user',VerifyToken,getUser)

module.exports=router;