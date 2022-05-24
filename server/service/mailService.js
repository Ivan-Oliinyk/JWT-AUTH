const nodemailer = require("nodemailer");
const {
  API_URL,
  SMTP: { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD },
} = require("../config");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, //нужно почитать
      auth: {
        type: "OAuth",
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: SMTP_USER,
      to,
      subject: "Registration " + API_URL,
      text: "",
      html: `
        <div>
          <h1>For activated follow to link</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}

module.exports = new MailService();
