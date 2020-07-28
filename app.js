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
   res.render("index")
});

app.listen(8000, function () {
    console.log('***** exp listening on port: ' + process.env.PORT);
});
