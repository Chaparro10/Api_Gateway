

const {Router}=require('express');
const { getUser } = require('../controllers/User.Controller');

const router =Router();


router.get('/user',getUser);


module.exports=router;