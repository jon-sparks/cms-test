const nodemailer = require('nodemailer')

exports.handler = async function(event, context) {
  console.log(event)
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    host: "smtp.ionos.co.uk",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jon@jonsparks.co.uk",
      pass: "3!&k$#FE",
      // user: testAccount.user, // generated ethereal user
      // pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <form@jonsparks.co.uk>', // sender address
    to: "j91sparks@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: event.body, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  return {
    statusCode: 200,
    body: JSON.stringify({ sent: `ok` })
  }
}