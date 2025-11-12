// server.js
import express, { Router } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import cors from "cors";
app.use(cors({ origin: "*" })); // allow all origins for testing
dotenv.config();

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);


const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
const mail = {
  from: process.env.EMAIL_USER,     // must be your Gmail
  replyTo: email,                    // visitor's email
  to: process.env.EMAIL_USER,
  subject: "Contact Form Submission - Portfolio",
  html: `<p>Name: ${name}</p>
         <p>Email: ${email}</p>
         <p>Phone: ${phone}</p>
         <p>Message: ${message}</p>`,
};
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ code: 500, status: "Message Failed" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

