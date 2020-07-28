const express = require('express');
var request = require('request');
var rp = require('request-promise');
const httpPort = 8000;
/**set server */
var app = require('express')();
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static('public'))
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    var status = 0;
    

});

http.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
