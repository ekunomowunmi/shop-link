import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Debug endpoint to check authentication status
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  
  return NextResponse.json({
    hasToken: !!token,
    tokenValue: token ? `${token.substring(0, 20)}...` : null,
    cookies: Object.fromEntries(
      request.cookies.getAll().map(c => [c.name, c.value.substring(0, 20) + '...'])
    ),
    user: token ? verifyToken(token) : null,
  });
}

