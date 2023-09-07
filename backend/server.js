require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

  // creating a transporter
const transporter = nodemailer.createTransport({
    service: 'Outlook', 
    auth: {
        user: 'sarahkellydev@outlook.com', 
        pass: process.env.EMAIL_PASSWORD, 
    },
});

  // Defining email data
const mailOptions = {
    from: email,
    to: 'sarahkellydev@outlook.com', 
    subject: 'Contact Form Submission',
    text: `Your name: ${name}\nYour email: ${email}\nType a message: ${message}`,
};

  // Sending email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Email could not be sent.' });
    } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully.' });
    }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

