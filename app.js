const express = require('express');
const http = require('http');
var request = require('request');
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
io.on('connection', (socket) => {
    socket.on("domain",function(msg){
        var domain = msg.domain;
        console.log(domain)
        var status = [];

        for(var i = 0;i<domain.length;i++){
            request(domain[i], function (error, response, body) {
             //   console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
              // console.log('body:', body); // Print the HTML for the Google homepage.
                 if (!error && response.statusCode == 200) {
                     var statusDomian = {
                         "domain":domain[i],
                         "status":'0K'
                     }

                     status.push(statusDomian)
                 } else {
                     var statusDomian = {
                         "domain":domain[i],
                         "status":'Error'
                     }

                     status.push(statusDomian)
                 }
                 socket.emit("statusDomain",{domain:statusDomian});

            });

        }
        console.log(status);
    })
});
httpServer.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
