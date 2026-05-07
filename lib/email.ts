import { Resend } from 'resend';
import type { ContactFormData } from './db';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification(data: ContactFormData): Promise<void> {
  const { firstName, lastName, email, phone, message, propertyAddress } = data;

  const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${propertyAddress ? `Property Address: ${propertyAddress}` : ''}

Message:
${message}
  `.trim();

  await resend.emails.send({
    from: 'Harthfield Homes <onboarding@resend.dev>',
    to: 'mcleme9@gmail.com',
    subject: `New Contact: ${firstName} ${lastName}`,
    text: emailContent,
  });
}
