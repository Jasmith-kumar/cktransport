import nodemailer from 'nodemailer';

const CONTACT_TO = process.env.CONTACT_EMAIL || 'info@cktransports.us';

export function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment.'
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export function getContactInbox() {
  return CONTACT_TO;
}

export function getFromAddress() {
  return process.env.SMTP_FROM || process.env.SMTP_USER || CONTACT_TO;
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  formType: 'contact' | 'quote';
};

export async function sendContactEmails(payload: ContactPayload) {
  const transporter = getMailTransporter();
  const inbox = getContactInbox();
  const from = getFromAddress();
  const label = payload.formType === 'quote' ? 'Quote Request' : 'Contact Form';
  const subjectLine =
    payload.subject?.trim() ||
    (payload.formType === 'quote'
      ? `New freight quote request from ${payload.name}`
      : `New website inquiry from ${payload.name}`);

  await transporter.sendMail({
    from: `"CK Transports Website" <${from}>`,
    to: inbox,
    replyTo: payload.email,
    subject: `[${label}] ${subjectLine}`,
    text: [
      `New ${label.toLowerCase()} submission`,
      '',
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || 'Not provided'}`,
      `Company: ${payload.company || 'Not provided'}`,
      `Subject: ${payload.subject || 'N/A'}`,
      '',
      'Message:',
      payload.message,
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0B1F33; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New ${label}</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone || 'Not provided')}</p>
        <p><strong>Company:</strong> ${escapeHtml(payload.company || 'Not provided')}</p>
        <p><strong>Subject:</strong> ${escapeHtml(payload.subject || 'N/A')}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
      </div>
    `,
  });

  await transporter.sendMail({
    from: `"CK Transports" <${from}>`,
    to: payload.email,
    subject: 'Thank you for contacting CK Transports',
    text: [
      `Hi ${payload.name},`,
      '',
      'Thank you for reaching out to CK Transports. We have received your message and our team will get back to you shortly.',
      '',
      'If your matter is urgent, call our dispatch desk at 973-200-7886.',
      '',
      'Best regards,',
      'CK Transports',
      '2 Penn Plaza E, Newark, NJ 07105',
      'info@cktransports.us',
      '973-200-7886',
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0B1F33; line-height: 1.6;">
        <h2 style="margin: 0 0 12px; color: #0B1F33;">Thank you for contacting CK Transports</h2>
        <p>Hi ${escapeHtml(payload.name)},</p>
        <p>Thank you for reaching out to <strong>CK Transports</strong>. We have received your message and our team will get back to you shortly.</p>
        <p>If your matter is urgent, call our dispatch desk at <strong>973-200-7886</strong>.</p>
        <p style="margin-top: 24px;">
          Best regards,<br />
          <strong>CK Transports</strong><br />
          2 Penn Plaza E, Newark, NJ 07105<br />
          <a href="mailto:info@cktransports.us">info@cktransports.us</a><br />
          973-200-7886
        </p>
      </div>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
