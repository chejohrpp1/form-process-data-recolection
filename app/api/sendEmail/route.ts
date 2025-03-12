import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Hacer un GET para probar en el navegador
export async function GET() {
  return NextResponse.json({ success: true, message: "API sendEmail funcionando correctamente!" });
}

// POST para enviar el correo
export async function POST(req: Request) {
  try {
    const { formData, tableData } = await req.json();

    if (!formData) {
      return NextResponse.json({ success: false, message: "Faltan datos en la solicitud" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let htmlContent = `
      <h2>Formulario Enviado</h2>
      <p><strong>Nombre:</strong> ${formData.name}</p>
      <p><strong>Email Institucional:</strong> ${formData.email}</p>
      <p><strong>Departamento:</strong> ${formData.department}</p>
      <p><strong>Puesto:</strong> ${formData.position}</p>
      <h3>Procesos Clave</h3>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr>
          <th>Tipo de proceso</th>
          <th>Nombre del Proceso</th>
          <th>Descripción</th>
          <th>Periodicidad</th>
          <th>Áreas Involucradas</th>
        </tr>
    `;

    tableData.slice(1).forEach((row: string[]) => {
      htmlContent += `
        <tr>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
          <td>${row[4]}</td>
        </tr>
      `;
    });

    htmlContent += "</table>";

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL_TO_SEND,
      subject: "Formulario de Procesos enviado",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ success: false, message: "Error al enviar el correo" }, { status: 500 });
  }
}
