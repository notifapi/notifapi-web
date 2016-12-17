var EmailTemplate = require('email-templates').EmailTemplate
var path = require('path')
var provider = require('./sendgrid');

var renderEmail = (payload, tpl, onSendEmail) => {
    var templateDir = path.join(__dirname, 'templates', tpl);

    var emailTemplate = new EmailTemplate(templateDir);
    emailTemplate.render(payload, function (err, result) {
        onSendEmail(result.html);
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
    sendConfimSignup: (to, data) => {
        const subject = "Please confirm your account!!";
        const from = 'info@notifapi.com';

        var payload = {
            title: 'Confirm Email',
            user: data
        };

        renderEmail(payload, 'confirmSignup', (body) => {
            sendEmail(to, from, subject, body);
        })
    }
}
