'use client';
import React, { use } from 'react';
import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="text-4xl text-red-600 mb-4">⚠️</div>
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="mb-4 text-gray-600">{error.message || 'An unexpected error occurred.'}</p>

      <Link href="/">
        <button className="mt-4 px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
          Return to promptflora
        </button>
      </Link>
    </div>
  );
}
