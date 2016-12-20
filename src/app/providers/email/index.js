var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var provider = require('./sendgrid');

var renderEmail = (payload, tpl, onSendEmail) => {
    var templateDir = path.join(__dirname, 'templates', tpl);

    var emailTemplate = new EmailTemplate(templateDir);
    emailTemplate.render(payload, (err, result) => {
        onSendEmail(result.subject, result.html);
    })
}

var sendEmail = (to, from, subject, body) => {
    provider.sendEmail(to, from, subject, body, (error, response) => {
        if (202 !== response.statusCode) {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        }
    })
}

module.exports = {
    sendConfimSignup: (to, uuid, data) => {
        const subject = "Please confirm your account!!";
        const from = 'info@notifapi.com';

        var payload = {
            title: 'Please confirm your account!!',
            user: data,
            url: process.env.BASE_URL + 'confirm/' + uuid
        };

        renderEmail(payload, 'confirmSignup', (subject, body) => {
            sendEmail(to, from, subject, body);
        })
    }
}
