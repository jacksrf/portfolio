//Require the module
var nodemailer = require('nodemailer');

//Create the reusable transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'thethirdcontactform@gmail.com',
        pass: 'trey3333'
    }
});

var submit = document.getElementById('send')

submit.addEventListener('click', function() {
    console.log('submit button hit');
    var visitorName = document.getElementById('nameInput');
    var visitorEmail = document.getElementById('emailInput');
    var visitorMessage = document.getElementById('messageInput');

// setup e-mail data with unicode symbols
            var mailOptions = {
                from: 'Contact Alert <thethirdcontactform@gmail.com>', // sender address
                to: 'jacksrf@email.com',
                subject: 'New email from your website contact form', // Subject line
                text: visitorMessage.value + '///// You may contact ' + visitorName.value + ' at: ' + visitorEmail.value // plaintext body

            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent!');
                }
            });

})
