import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data || {};

    if (!name || !email || !message || message.length < 5) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 422 });
    }

    // TODO: wire this up to an email service (Resend, Nodemailer, etc.)
    // or forward to a database / spreadsheet. For now we just log it
    // server-side so the form works out of the box.
    console.log('New contact message:', data);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
