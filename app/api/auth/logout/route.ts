import { NextResponse } from 'next/server';

export async function POST() {
  // Client will clear localStorage
  return NextResponse.json({ success: true });
}

