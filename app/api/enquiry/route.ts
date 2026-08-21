import { NextResponse } from 'next/server';
import { getDB, saveDB, Enquiry } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required fields.' }, { status: 400 });
    }

    const db = getDB();
    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      name,
      phone,
      email: email || 'N/A',
      course: course || 'General Enquiry',
      message: message || '',
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };

    db.enquiries.unshift(newEnquiry);
    saveDB(db);

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully! Our counselor will call you back shortly.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process enquiry' }, { status: 500 });
  }
}
