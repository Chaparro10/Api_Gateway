

const express = require('express');
const cors =require('cors');


const app=express();

app.use(express.json());

app.use(cors());


app.use('/api',require('./routes/routes'));


app.listen(3003,()=>{
    console.log("Servidor ejecutandose en el puerto 3003");
})