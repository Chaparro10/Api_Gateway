

const {Router}=require('express');


const router=Router();


const LoginRoute=require('./login.routes');

router.use('',LoginRoute);

module.exports=router;