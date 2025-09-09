// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactForm, ApiResponse } from '@/types';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'All required fields must be completed.',
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Please provide a valid email address.',
        },
        { status: 400 },
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #106B8F, #002336); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #106B8F; }
          .message-content { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New message from your portfolio</h2>
            <p>You have received a new contact message</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${sanitizedData.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${sanitizedData.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${sanitizedData.subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-content">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from your portfolio website on ${new Date().toLocaleString(
                'en-US',
                {
                  timeZone: 'America/Costa_Rica',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                },
              )}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL, // Your personal email
      replyTo: sanitizedData.email,
      subject: `New contact: ${sanitizedData.subject}`,
      html: htmlContent,
    };

    const confirmationEmail = {
      from: `"Francisco González" <${process.env.SMTP_FROM}>`,
      to: sanitizedData.email,
      subject: "Thanks for your message - I'll get back to you soon",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
          <style>
            body, table, td, p, a, li, blockquote {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table, td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            body {
              margin: 0 !important;
              padding: 0 !important;
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
            }
            .header-table {
              width: 100%;
              background-color: #106B8F;
            }
            .content-table {
              width: 100%;
              background-color: #f9fafb;
            }
          </style>
        </head>
        <body>
          <!--[if mso | IE]>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="email-container" style="width:600px;" width="600">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
          
          <div class="email-container">
            <!-- Header -->
            <table class="header-table" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding: 20px; text-align: center; color: white;">
                  <h2 style="margin: 0; font-size: 24px;">Thanks for reaching out!</h2>
                </td>
              </tr>
            </table>
            
            <!-- Content -->
            <table class="content-table" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding: 30px; line-height: 1.6; color: #333;">
                  <p style="margin: 0 0 15px 0;">Hi ${sanitizedData.name},</p>
                  <p style="margin: 0 0 15px 0;">I've received your message about "<strong>${sanitizedData.subject}</strong>" and I'll get back to you as soon as possible, usually within 24-48 hours.</p>
                  <p style="margin: 0 0 15px 0;">In the meantime, feel free to explore my portfolio and check out some of my recent projects.</p>
                  <p style="margin: 0 0 5px 0;">Best regards,</p>
                  <p style="margin: 0;"><strong>Francisco González</strong><br>
                  Full-Stack Software Engineer</p>
                </td>
              </tr>
            </table>
          </div>
          
          <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          <![endif]-->
        </body>
        </html>
      `,
    };

    await Promise.all([transporter.sendMail(mailOptions), transporter.sendMail(confirmationEmail)]);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Message sent successfully. I will contact you soon.',
    });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'There was an error sending your message. Please try again.',
      },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    },
  );
}
