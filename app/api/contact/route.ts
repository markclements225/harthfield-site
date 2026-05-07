import { NextRequest, NextResponse } from 'next/server';
import { supabase, type ContactFormData } from '@/lib/db';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, message, propertyAddress } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const contactData: ContactFormData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      message: message.trim(),
      propertyAddress: propertyAddress?.trim() || null,
    };

    const { error: dbError } = await supabase
      .from('ContactForm')
      .insert([contactData]);

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { message: 'Failed to save contact information' },
        { status: 500 }
      );
    }

    try {
      await sendContactNotification(contactData);
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
