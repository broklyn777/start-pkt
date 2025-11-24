"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  try {
    await resend.emails.send({
        from: "Kontakt <onboarding@resend.dev>",
    //   from: "Kontakt <no-reply@ostanahemservice.se>",
      to: "broklyn777@gmail.com",
      subject: `Nytt meddelande från ${name}`,
      html: `
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Meddelande:</strong> ${message}</p>
        `,
    });
      
    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: err };
  }
}
