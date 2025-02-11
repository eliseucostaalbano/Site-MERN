// const express = require("express")
// versão moderna
import express from "express";

const app  = express()

app.get("/" , (req, res)=>{
    res.send("Sevidor Pronto")
})

app.listen(2621, () =>{
    console.log("Servidor iniciado em http://localhost:2621")
})