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
      //  var domain = msg.domain;
     //   console.log(domain)
        var domain = ['http://nk.googlle.vip','https://namkhoa.phongkhamdakhoahongphong.vn/sub-wp/'];
        console.log(domain.length)
        for(var i = 0;i<2;i++){
            var domain1 = domain[i].toString();
            request(domain1, function (error, response, body) {
                //   console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                // console.log('body:', body); // Print the HTML for the Google homepage.
                if (!error && response.statusCode == 200) {
                    var statusDomian = {
                        "domain": domain1,
                        "status": '0K'
                    }
                    socket.emit("statusDomain",{domain:statusDomian});
                    //  status.push(statusDomian)
                }
                //  socket.emit("statusDomain",{domain:statusDomian});

            });
        }

    })
});
httpServer.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
