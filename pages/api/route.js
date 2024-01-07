import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.name,
        text: data.email,
        html: `<h1>${data.name}</h1><h2>${data.email}</h2><p>${data.subject}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;
