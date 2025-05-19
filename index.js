const express = require("express");
const app = express();
app.use (express.json());
const PORT = 3000;
app.past('/soma', (req, res)=>{
    const{a,b} = req.body;
    const resultado = a+b;
    res.json({resultado});
});
