import { NextResponse } from 'next/server';
import { getDB, saveDB } from '@/lib/db';

export async function GET() {
  const db = getDB();
  return NextResponse.json(db);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { adminKey, data } = body;

    // Simple Admin authentication check
    if (adminKey !== 'skie-admin-2026') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const success = saveDB(data);
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to write to database' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
