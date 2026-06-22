import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.SENDGRID_TO_EMAIL;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || toEmail;

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const safeSubject = subject?.trim() || "Portfolio contact form message";
    const text = [
      "New portfolio contact form message",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${safeSubject}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }],
            subject: `Portfolio Contact: ${safeSubject}`,
          },
        ],
        from: {
          email: fromEmail,
          name: "Portfolio Contact Form",
        },
        reply_to: {
          email: email.trim(),
          name: name.trim(),
        },
        content: [
          {
            type: "text/plain",
            value: text,
          },
        ],
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("SendGrid send failed:", details);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
