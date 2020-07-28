const express = require('express');
const http = require('http');
var request = require('request');
var rp = require('request-promise');

var app = express()
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static('public'))
/**set server */
app.set('port', process.env.PORT || 8000);
app.get('/', function(req, res) {
    var status = 0;
    request("http://nk.googlle.vip", function (error, response, body) {
        //   console.error('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.

        if (!error && response.statusCode == 200) {
            var statusDomian1 = {
                "domain": "http://nk.googlle.vip",
                "status": '0K'
            }
            status=200;
            res.render("index",{code:status})
        }


    });

});
//
// io.on('connection', (socket) => {
//     socket.on('domain', (msg) => {
//
//     });
// });

app.listen(8000, function () {
    console.log('***** exp listening on port: ' + process.env.PORT);
});
