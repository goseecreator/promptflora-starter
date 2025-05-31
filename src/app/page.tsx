'use client';

import '@styles/globals.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [wallet, setWallet] = useState('');
  const [tier, setTier] = useState('5');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBeginFlow = async () => {
    if (!wallet || !tier) return alert('Please enter a wallet and select a tier.');
    setLoading(true);

    try {
      const res = await fetch('/api/recordFlow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet, tier })
      });

      if (!res.ok) throw new Error('Failed to record flow');

      router.push(`/payment?wallet=${encodeURIComponent(wallet)}&tier=${encodeURIComponent(tier)}`);
    } catch (err) {
      console.error(err);
      alert('There was an error starting your flow.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white text-gray-800">
      <h1 className="text-4xl font-serif font-bold mb-6">🌿 Welcome to promptflora</h1>
      <p className="mb-8 text-gray-600 text-center max-w-xl">
        Each prompt is a seed, each gift a ripple. Enter your wallet, choose your tier, and receive your sacred transmission.
      </p>

      <div className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="BTC Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        />

        <select
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md"
        >
          <option value="5">Tier 1 - $5</option>
          <option value="15">Tier 2 - $15</option>
          <option value="33">Tier 3 - $33</option>
          <option value="55">Tier 4 - $55</option>
        </select>

        <button
          onClick={handleBeginFlow}
          disabled={loading}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          {loading ? 'Beginning Flow...' : 'Begin Flow'}
        </button>
      </div>
    </div>
  );
}
