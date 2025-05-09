const mailer = require('nodemailer')
const cron = require('node-cron')

const employeeEmails = [
    'sonettjsaha@gmail.com',
    'joysaha9882@gmail.com'
]

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joys0178000@gmail.com',
        pass: 'woqosigncqqlqxwe'
    }
})

function sendEmail() {
    transporter.sendMail({
        from: 'joys0178000@gmail.com',
        to: employeeEmails.join(','),
        subject: "🎉 Happy New Year!",
        text: "Wishing you a prosperous and joyful New Year! :D"
    }, (error, info) => {
        if(error) {
            console.log('Email sending falied!', error)
        }
        else {
            console.log('Email sent!!', info.response)
        }
    })
}
// <second> <minute> <hour> <day-of-month> <month> <day-of-week> <year> 
cron.schedule('', () => {
    console.log('Sending New Year emails...');
    
})


// by sendgrid
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');

// const employeeEmails = [
//     'joys0178000@gmail.com'
// ];

// function sendNewYearEmail() {
//     const contents = {
//         to: employeeEmails,
//         from: 'sonettjsaha@gmail.com',
//         subject: 'Sending with Twilio SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };

//   sgMail.sendMultiple(contents)
//     .then(() => {
//       console.log('Emails sent successfully!');
//     })
//     .catch((error) => {
//       console.error('Error sending emails:', error);
//     });
// }

// sendNewYearEmail()