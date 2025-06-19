// Email utilities for contact form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData, env: any) {
  const { name, email, message } = data;
  
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Contact Form <noreply@frandab.com>',
      to: ['hello@frandab.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px; font-size: 14px; color: #666;">
            <p style="margin: 0;"><strong>Reply Instructions:</strong> You can reply directly to this email to respond to ${name} at ${email}</p>
          </div>
        </div>
      `,
      reply_to: email, // This allows you to reply directly to the sender
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error('Resend API error:', errorData);
    throw new Error('Failed to send email');
  }

  return await response.json();
}