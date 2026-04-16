import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Local CORS (allow frontend Vite)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://my-portfolio-j88h.onrender.com/contact"
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Email transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password (no spaces)
  },
});

// Verify email
contactEmail.verify((error) => {
  if (error) {
    console.log("Email error:", error);
  } else {
    console.log("✅ Ready to send emails");
  }
});

// Route
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ status: "Message Failed" });
    }

    return res.status(200).json({ status: "Message Sent" });
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});