import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP server
      port: 587, // Replace with your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: '"Your Name" <your-email@example.com>', // Replace with your name and email
        to, // List of receivers
        subject, // Subject line
        text, // Plain text body
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 