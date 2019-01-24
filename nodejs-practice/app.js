const http    = require('http');
const fs      = require('fs');
const express = require('express');
const app     = express('');

app.use('/test',(req, res, next)=>{
    console.log('This is only a test')
    res.send('<h1>This is only a test</h1>');
});

app.use('/', (req, res, next)=> {
    console.log('This is my message from my server')
    res.send('Hello from my server again.');
});


const server  = http.createServer(app);
app.listen(2000);