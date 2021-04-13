const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wtwerner@gmail.com',
        subject: 'Welcome to Task App',
        text: `Welcome to Task App, ${name}! Let me know how you like the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wtwerner@gmail.com',
        subject: 'Sorry to see you go!',
        text: `You have sucessfully canceled your Task App account, ${name}. Is there anything we could have done better?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}