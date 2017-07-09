// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var contact = require('./routes/contactMeForm');

// globals
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve back static files
app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// routes
app.use('/contact', contact);


// app listen
app.listen(port, function(){
   console.log('Listening on port: ', port);
});
