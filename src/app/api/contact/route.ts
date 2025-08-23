// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactForm, ApiResponse } from '@/types';

// Configuración del transporter de email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Validación básica de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitizar entrada
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validación de datos requeridos
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: 'Todos los campos requeridos deben estar completos.',
      }, { status: 400 });
    }

    // Validar email
    if (!isValidEmail(email)) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: 'Por favor proporciona un email válido.',
      }, { status: 400 });
    }

    // Sanitizar datos
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
      company: body.company ? sanitizeInput(body.company) : '',
      budget: body.budget || 'No especificado',
      timeline: body.timeline || 'Flexible',
      projectType: body.projectType || 'No especificado',
    };

    // Crear el contenido del email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #10B981; }
          .message-content { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nuevo mensaje desde tu portfolio</h2>
            <p>Has recibido un nuevo mensaje de contacto</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nombre:</div>
              <div class="value">${sanitizedData.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${sanitizedData.email}</div>
            </div>
            
            ${sanitizedData.company ? `
            <div class="field">
              <div class="label">Empresa:</div>
              <div class="value">${sanitizedData.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Asunto:</div>
              <div class="value">${sanitizedData.subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Presupuesto:</div>
              <div class="value">${sanitizedData.budget}</div>
            </div>
            
            <div class="field">
              <div class="label">Cronograma:</div>
              <div class="value">${sanitizedData.timeline}</div>
            </div>
            
            <div class="field">
              <div class="label">Tipo de proyecto:</div>
              <div class="value">${sanitizedData.projectType}</div>
            </div>
            
            <div class="field">
              <div class="label">Mensaje:</div>
              <div class="message-content">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Este mensaje fue enviado desde tu portfolio web el ${new Date().toLocaleString('es-CR', { 
                timeZone: 'America/Costa_Rica',
                year: 'numeric',
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email de notificación para ti
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL, // Tu email personal
      replyTo: sanitizedData.email,
      subject: `Nuevo contacto: ${sanitizedData.subject}`,
      html: htmlContent,
    };

    // Email de confirmación para el usuario
    const confirmationEmail = {
      from: `"Tu Nombre" <${process.env.SMTP_FROM}>`,
      to: sanitizedData.email,
      subject: 'Gracias por tu mensaje - Te contactaré pronto',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .content { padding: 30px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>¡Gracias por contactarme!</h2>
            </div>
            <div class="content">
              <p>Hola ${sanitizedData.name},</p>
              <p>He recibido tu mensaje sobre "<strong>${sanitizedData.subject}</strong>" y te responderé lo antes posible, generalmente en 24-48 horas.</p>
              <p>Mientras tanto, siéntete libre de explorar mi portfolio y ver algunos de mis proyectos recientes.</p>
              <p>¡Saludos!</p>
              <p><strong>Tu Nombre</strong><br>
              Desarrollador Full Stack</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Enviar emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationEmail),
    ]);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Mensaje enviado exitosamente. Te contactaré pronto.',
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      message: 'Hubo un error enviando tu mensaje. Por favor intenta de nuevo.',
    }, { status: 500 });
  }
}

// Método OPTIONS para CORS (si es necesario)
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
