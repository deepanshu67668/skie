import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    if (password === 'skie2026' || password === 'admin') {
      return NextResponse.json({ success: true, adminKey: 'skie-admin-2026' });
    }
    return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
