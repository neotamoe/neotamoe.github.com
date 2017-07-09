// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var contact = require('./routes/contactMeForm');

// globals
var port = 3000 || process.env.PORT;

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve back static files
app.use(express.static(path.join(__dirname, './public')));

// routes
app.use('/contact', contact);


// app listen
app.listen(port, function(){
   console.log('Listening on port: ', port);
});
