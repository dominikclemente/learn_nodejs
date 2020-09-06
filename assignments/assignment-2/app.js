const http = require('http');

const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('This is the users page'); 
    res.send('<ul><li>User 1</li><li>User 2</li></ul>')
});

app.use('/',(req, res, next) => {
   console.log('This is the home page'); 
   res.send('<h1>this is the homepage bro</h1>')
});

app.listen(3000);