const http    = require('http');
const fs      = require('fs');
const express = require('express');
const app     = express('');

app.use('/add-product', (req, res, next)=> {
    console.log('Another in the middleware!')
    res.send('<h1>Hello from express</h1>');
});

app.use('/', (req, res, next)=> {
    console.log('Another in the middleware!')
    res.send('<h1>Hello from express</h1>');
});

const server  = http.createServer(app);

app.listen(5000);