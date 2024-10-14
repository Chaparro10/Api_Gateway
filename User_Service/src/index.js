



const express = require('express');

const cors = require('cors');


const app=express();


app.use(express.json());

app.use(cors());

app.use('/api',require('./routes/routes'));


app.listen(3002,()=>{
    console.log("server is running on port 3002");
})
