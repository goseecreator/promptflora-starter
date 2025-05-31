'use client'

import React, { useState } from "react"

export default function LandingPage() {
  const [wallet, setWallet] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [selectedTier, setSelectedTier] = useState("")
  const [btcGift, setBtcGift] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPrompt, setShowPrompt] = useState(false)
  const [promptText, setPromptText] = useState("")

  const tiers = [
    {
      name: "Seed",
      price: "$5",
      desc: "Spark the cycle — plant the first gift",
      icon: "🌱",
      color: "border-yellow-300 shadow-yellow-200",
      gift: 0.47
    },
    {
      name: "Portal",
      price: "$15",
      desc: "Open the gateway — invite deeper reflection",
      icon: "🔷",
      color: "border-purple-300 shadow-purple-200",
      gift: 0.77
    },
    {
      name: "Spiral",
      price: "$33",
      desc: "Stir transformation — receive a layered ritual",
      icon: "🌀",
      color: "border-teal-300 shadow-teal-200",
      gift: 1.11
    },
    {
      name: "Blessing",
      price: "$55",
      desc: "Amplify the light — become a link in the chain",
      icon: "✨",
      color: "border-amber-200 shadow-amber-100",
      gift: 2.22
    }
  ]

  const handleBeginFlow = async () => {
    setError("")
    if (!wallet || !wallet.startsWith("1") && !wallet.startsWith("3") && !wallet.startsWith("bc1")) {
      setError("Please enter a valid Bitcoin wallet address.")
      return
    }
    if (!accepted) {
      setError("You must agree to the sacred terms before continuing.")
      return
    }
    if (!selectedTier) {
      setError("Please select a gifting tier.")
      return
    }
    setLoading(true)

    const giftAmount = tiers.find(t => t.name === selectedTier)?.gift || 0
    setBtcGift(giftAmount)

    try {
      const res = await fetch("/api/getPrompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet, tier: selectedTier, gift: giftAmount })
      })
      const data = await res.json()
      const reflection = data.prompt || "This is your sacred mirror: What truth is ready to surface?"
      const poeticAcknowledgment = `\n\n(You chose to ripple forward $${giftAmount.toFixed(2)} — a quiet blessing woven into the chain.)`
      setPromptText(reflection + poeticAcknowledgment)
      setShowPrompt(true)
    } catch (err) {
      setPromptText("The portal flickered. Please try again shortly.")
      setShowPrompt(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 via-indigo-100 to-cyan-100 p-8 flex flex-col items-center justify-center space-y-12 animate-fade-in">

      <header className="w-full flex items-center justify-center py-4">
        <div className="flex items-center space-x-3">
          <img src="/promptflora-logo.svg" alt="promptflora logo" className="h-8 w-8" />
          <h1 className="text-2xl font-serif font-medium text-gray-800">promptflora</h1>
        </div>
      </header>

      <h1 className="text-4xl font-serif font-medium text-gray-800">Select a gifting tier</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl animate-slide-up">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl border-2 ${tier.color} bg-white/80 backdrop-blur-sm transition hover:scale-105 hover:shadow-lg text-center p-6 cursor-pointer ${selectedTier === tier.name ? 'ring-2 ring-teal-600' : ''}`}
            onClick={() => {
              setSelectedTier(tier.name)
              setBtcGift(tier.gift)
            }}
          >
            <div className="text-3xl">{tier.icon}</div>
            <h2 className="text-xl font-semibold">{tier.name}</h2>
            <p className="text-2xl font-bold">{tier.price}</p>
            <p className="text-sm text-gray-600">{tier.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4 max-w-md w-full">
        <input
          type="text"
          placeholder="bitcoin wallet address"
          className="w-full text-center border border-gray-300 rounded p-2"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I understand this is a sacred, non-refundable digital transmission from promptflora.
          </label>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-2 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          onClick={handleBeginFlow}
          disabled={loading}
        >
          {loading ? "Beginning..." : "Begin Flow"}
        </button>
      </div>

      {showPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full animate-fade-in">
            <h2 className="text-2xl font-serif text-center mb-2">Your Sacred Transmission</h2>
            <p className="text-gray-800 text-center text-lg italic">
              {promptText}
            </p>
            <div className="flex justify-center mt-6">
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                onClick={() => setShowPrompt(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        <div>
          <a href="/terms" className="underline hover:text-gray-700">Terms of Use & Sacred Licensing</a>
        </div>
        <div className="mt-2">
          © 2025 promptflora. All rights reserved.
        </div>
      </footer>

    </div>
  )
}
