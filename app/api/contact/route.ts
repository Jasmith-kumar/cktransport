import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/mail';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const company = String(body.company || '').trim();
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();
    const formType = body.formType === 'quote' ? 'quote' : 'contact';

    if (!name) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    await sendContactEmails({
      name,
      email,
      phone,
      company,
      subject,
      message,
      formType,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    const message =
      error instanceof Error && error.message.includes('SMTP is not configured')
        ? 'Email service is not configured yet. Please try again later or call 973-200-7886.'
        : 'Unable to send your message right now. Please try again or call 973-200-7886.';

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
