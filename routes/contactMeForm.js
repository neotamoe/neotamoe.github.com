// requires
var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

router.post('/', function(req,res){
  console.log('req.body:', req.body);

  var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
          user: 'science123app@gmail.com',
          pass: 'Science123'
      }
  });
  // this is email to be sent to admin
  var mailOptions = {
    from: '"'+req.body.name+'"<'+ req.body.email+'>',
    to: '"neotamoe" <neotamoe@gmail.com>',
    subject: 'from neotamoe.com contact me form',
    text: req.body.name + ' (email: ' + req.body.email + ') sent a message from neotamoe.com.  ' + req.body.comments, // plain text body  // insert content from form here
    html: '<p>'+ req.body.name + ' (email: ' + req.body.email + ') sent a message from neotamoe.com.  </p><p>' + req.body.comments +'</p>'// html body
  };
  // this sends email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.sendStatus(200);

});


module.exports = router;
