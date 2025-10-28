import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- CONFIGURACIÓN CRÍTICA ---
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD; 

if (!SENDER_EMAIL || !GMAIL_APP_PASSWORD) {
  console.error("Faltan variables de entorno SENDER_EMAIL o GMAIL_APP_PASSWORD.");
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SENDER_EMAIL, 
    pass: GMAIL_APP_PASSWORD, 
  },
});

// Manejador para solicitudes POST
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Faltan datos en el formulario. Por favor, completa todos los campos.' },
        { status: 400 }
      );
    }
    
    // El mensaje de correo
    const mailOptions = {
      to: 'brayanclarosdiaz@gmail.com', 
      from: SENDER_EMAIL, 
      subject: `📧 Nueva Propuesta de Portafolio: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h2 style="color: #3b82f6;">Detalles de la Propuesta</h2>
            <p><strong>De:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #f97316;">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Mensaje Completo:</strong></p>
            <div style="border-left: 4px solid #f97316; padding-left: 15px; background-color: #f4f4f4; padding: 15px; border-radius: 4px;">
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="margin-top: 25px; font-size: 0.9em; color: #777;">Este correo fue generado automáticamente por tu formulario de contacto.</p>
        </div>
      `,
    };

    // Envía el correo usando el transportador
    await transporter.sendMail(mailOptions);

    // Respuesta de éxito para el Frontend
    return NextResponse.json({ message: 'Correo enviado correctamente.' }, { status: 200 });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    // Respuesta de error para el Frontend
    return NextResponse.json(
      { message: 'Fallo el envío del correo en el servidor. Revisa los logs de Next.js.' },
      { status: 500 }
    );
  }
}