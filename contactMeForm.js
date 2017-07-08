// requires
var express = require('express');
// var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');

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
  from: '"Science123 Quiz" <science123app@gmail.com>',
  to: '"neotamoe" <neotamoe@gmail.com>',
  subject: 'from neotamoe.com contact me form',
  text: '', // plain text body  // insert content from form here
  // html: '<h2>Hello!</h2><p>'+req.user.email + ' added a question to the <strong>Science123 Quiz App.</strong>  Please log in to the app to review it for approval, denial or editing.</p>' // html body
};
// this sends email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
      return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});

module.exports = transporter;
