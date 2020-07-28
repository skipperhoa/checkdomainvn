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
    request("http://nk.googlle.vip", function (error, response, body) {
        //   console.error('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.

        if (!error && response.statusCode == 200) {
            status = 200;
            res.render("index",{code:status})
        }
        res.render("index",{code:status})

    });


});

http.listen(process.env.PORT || httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});
