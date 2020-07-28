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
   
    res.render("index",{code:status})
});
//
// io.on('connection', (socket) => {
//     socket.on('domain', (msg) => {
//
//     });
// });

app.listen(8000, function () {
    console.log('***** exp listening on port: 8000');
});
