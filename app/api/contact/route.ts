import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mtsa95@gmail.com"],//["thaddeuscrypto@gmail.com"],
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[contact] error sending email", error)
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 })
  }
}
