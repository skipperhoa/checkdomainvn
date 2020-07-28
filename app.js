const express = require('express');
var request = require('request');
var rp = require('request-promise');
const httpPort = 8000;
/**set server */
var app = require('express')();
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static('public'))
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
