'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClearStoragePage() {
  const router = useRouter();

  useEffect(() => {
    // Clear all auth data
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    
    // Redirect to register
    router.push('/register');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Clearing storage and redirecting...</p>
    </div>
  );
}

