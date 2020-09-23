// importing
// import express from 'express';

const express = require('express');

// app config
const app = express ();
const port = process.env.PORT || 9000;
// middleware
// 
// DB congig
// 
// ????
// 
// api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));
// 
// listen
app.listen(port, () => console.log (`listening on localhost:${port}`));