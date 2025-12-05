import { NextResponse } from 'next/server';
import { CATEGORIES } from '@/lib/db';

export async function GET() {
  // Return the predefined list of categories
  return NextResponse.json({ categories: CATEGORIES });
}

