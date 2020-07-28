const express = require('express');
const http = require('http');
var request = require('request');
var rp = require('request-promise');
var sslRedirect = require('heroku-ssl-redirect');
const httpPort = 8000;
var app = express()
app.use(sslRedirect());
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static('public'))
/**set server */
const https = require('https');
var httpServer = https.createServer(app);
var io = require('socket.io')(httpServer);
app.get("/",function(req,ress){
    ress.render("index");

});
io.on('connection', (socket) => {
    socket.on("domain",function(msg){
    })
});
httpServer.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
