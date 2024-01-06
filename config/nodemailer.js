import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASS;

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
