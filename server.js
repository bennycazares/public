//get the things we need
var express = require('express');
var app     = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/'));

// set up our one route to the index.html file
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

// start the server on port 8080 (http://localhost8080)
app.listen(8080);
console.log('Goto port 8080.');
