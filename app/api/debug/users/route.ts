import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Debug endpoint to see all users (remove in production)
export async function GET() {
  const allUsers = db.users.getAll();
  // Don't return passwords in response
  const usersWithoutPasswords = allUsers.map(({ password, ...user }) => ({
    ...user,
    password: '***hidden***',
  }));
  
  return NextResponse.json({
    total: allUsers.length,
    users: usersWithoutPasswords,
    note: 'Data is stored in memory. Restart server to clear.',
  });
}

