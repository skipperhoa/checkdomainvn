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
const https = require('https');


var httpServer = https.createServer(app);
var io = require('socket.io')(httpServer);
app.get("/",function(req,res){
    https.get('http://namkhoa.phongkhamdakhoahongphong.vn/sub-wp/', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('data', (d) => {
            console.log(d);

        });

    }).on('error', (e) => {
        console.error(e);

    });
   res.render("index",{code:res.statusCode});
});

io.on('connection', (socket) => {
    socket.on("domain",function(msg){
    })
});
httpServer.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
