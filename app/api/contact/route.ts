import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { Options as SMTPTransport } from 'nodemailer/lib/smtp-transport';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, to } = await req.json();

    const transportOptions: SMTPTransport = {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(transportOptions);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error details:', {
      error,
      user: process.env.EMAIL_USER,
      to: 'victorconetns@gmail.com'
    });
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 