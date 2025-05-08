//const express = require('express');
import express from "express";
const app=express();

const port = 4000;

app.get("/",(req,res)=> {
    return res.send('<h1>Dominicano</h1>');
})

app.listen(port,()=>{
    console.log(`El servidor esta ejecutandose en el puerto: ${port}`);
})

