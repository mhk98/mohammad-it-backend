const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "host11.registrar-servers.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "_mainaccount@arcfbd.org",
    pass: "CreateAbit2023",
  },
});

// async..await is not allowed in global scope, must use a wrapper
exports.sendMail = async (
  mailAddress,
  mailerName,
  mailerSubject,
  mailerMessage
) => {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${mailerName}" <${mailAddress}>`, // sender address
      to: "<info@arcfbd.org>", // list of receivers
      subject: mailerSubject, // Subject line
      text: mailerMessage, // plain text body
      // html: "<b>{mailerMessage}</b>",
    });

    console.log("Message sent: %s", info);

    return info;
  } catch (error) {
    return error;
  }

  //
};
