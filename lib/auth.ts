import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db, User } from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface AuthUser {
  id: string;
  email: string;
  role: 'vendor' | 'customer';
  name: string;
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch {
    return null;
  }
}

export async function authenticateUser(email: string, password: string): Promise<AuthUser | null> {
  const user = db.users.getByEmail(email);
  if (!user) return null;
  
  if (!verifyPassword(password, user.password)) return null;
  
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  };
}

export async function createUser(
  email: string,
  password: string,
  role: 'vendor' | 'customer',
  name: string
): Promise<AuthUser> {
  const existingUser = db.users.getByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  const hashedPassword = hashPassword(password);
  const user = db.users.create({
    email,
    password: hashedPassword,
    role,
    name,
  });
  
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  };
}

