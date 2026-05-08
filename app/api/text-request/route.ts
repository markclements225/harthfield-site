import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, propertyAddress } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    const { error: dbError } = await supabase.from('ContactForm').insert([
      {
        firstName,
        lastName,
        email,
        phone,
        message,
        propertyAddress: propertyAddress || null,
        contactMethodID: 3,
      },
    ]);

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save contact information' },
        { status: 500 }
      );
    }

    // Send SMS via Twilio
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const recipientPhone = '+12259375511';

    if (!twilioAccountSid || !twilioAuthToken || !twilioPhoneNumber) {
      console.error('Twilio credentials not configured');
      return NextResponse.json(
        { error: 'SMS service not configured' },
        { status: 500 }
      );
    }

    // Format the SMS message
    const smsBody = `New Text Request from ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
${propertyAddress ? `Property: ${propertyAddress}\n` : ''}Message: ${message}`;

    // Send SMS using Twilio API
    const twilioResponse = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64')}`,
        },
        body: new URLSearchParams({
          To: recipientPhone,
          From: twilioPhoneNumber,
          Body: smsBody,
        }),
      }
    );

    if (!twilioResponse.ok) {
      const errorData = await twilioResponse.json();
      console.error('Twilio error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send text message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing text request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
