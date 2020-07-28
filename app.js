const express = require('express');
const http = require('http');
var request = require('request');
var rp = require('request-promise');
const httpPort = 8000;
var app = express()
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static('public'))
/**set server */
var httpServer = http.createServer(app);
var io = require('socket.io')(httpServer);
app.get("/",function(req,res){
   res.render("index");
});
const https = require('https');


io.on('connection', (socket) => {
    socket.on("domain",function(msg){
        var domain = msg.domain;
        console.log(domain.length)
        https.get('https://namkhoa.phongkhamdakhoahongphong.vn/sub-wp/', (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
            socket.emit("statusDomain",res)
            res.on('data', (d) => {
                console.log(d);
                socket.emit("statusDomain",d)
            });

        }).on('error', (e) => {
            console.error(e);
            socket.emit("statusDomain",e)
        });


    })
});
httpServer.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
