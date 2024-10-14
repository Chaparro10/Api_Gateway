

const {Router}=require('express');

const router=Router();




const UserRoute=require('./user.routes')


router.use('',UserRoute)


module.exports=router;