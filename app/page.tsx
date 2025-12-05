'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      // User is logged in, redirect based on role would need API call
      // For now, just show the landing page
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Welcome to Shop Link
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Connect with vendors and discover amazing products. Browse, explore, and shop with ease.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg text-lg"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all shadow-lg border border-slate-200 text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
