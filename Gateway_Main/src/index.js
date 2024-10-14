

const express=require('express');
const cors = require('cors');

require('dotenv').config();

const app=express();

app.use(express.json());

app.use(cors());


app.use('/api',require('./routes/routes'));

app.listen(3000,()=>{
    console.log("Servidor GateWay corriendo en el puerto 3000")
})