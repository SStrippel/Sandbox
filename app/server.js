'use strict'

const express = require('express');
const app = express(); 

const hostname = '0.0.0.0';
const port = 80;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {

    res.sendFile('public/index.html' , { root : __dirname});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});