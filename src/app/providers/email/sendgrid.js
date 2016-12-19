var sg = require("sendgrid")(process.env.SENDGRID_APIKEY);
var helper = require('sendgrid').mail;

var sendEmailSendgrid = (mail, cb) => {
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, (error, response) => {
        cb(error, response);
    });
}

module.exports = {
    sendEmail: (to, from, subject, body, cb) => {
        var from_email = new helper.Email(from);
        var to_email = new helper.Email(to);
        var content = new helper.Content('text/html', body);

        var mail = new helper.Mail(from_email, subject, to_email, content);

        sendEmailSendgrid(mail, cb);
    }
}