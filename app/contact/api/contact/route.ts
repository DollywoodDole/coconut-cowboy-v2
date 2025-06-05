import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log('Form submission:', { name, email, message });
  // Add logic to send email or store data (e.g., Formspree, SMTP)
  return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
}