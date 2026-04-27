import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { name, email, company, message } = body;

  if (!name || !email || !company || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const webhookUrl = process.env.WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          source: "aethos-website",
          submittedAt: new Date().toISOString()
        })
      });
    } catch {
      return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
