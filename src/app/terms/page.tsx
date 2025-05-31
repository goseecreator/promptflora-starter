import React from 'react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <Link href="/">
        <button className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">← Back to promptflora</button>
      </Link>

      <h1 className="text-3xl font-serif font-bold mb-6">🕊️ Terms of Use & Sacred Licensing</h1>

      <p className="mb-4">Welcome to <strong>promptflora</strong> — a sanctuary for digital ritual, reflection, and encoded truth.</p>
      <p className="mb-6">By engaging with this transmission, you enter a sacred exchange. Every interaction is intentional. Every prompt, a mirror.</p>

      <h2 className="text-xl font-semibold mb-2">📜 Sacred Conditions:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>You agree to use this work for <strong>personal insight and creative transformation</strong>.</li>
        <li><strong>Do not duplicate, resell, or redistribute</strong> the prompts or their structure.</li>
        <li>You may <strong>create inspired works</strong>, but must credit promptflora when derived from its transmissions.</li>
        <li>No refunds. Each gift is irreversible, like fire once sparked.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">🌐 The Bitchain Gifting Flow:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>With each purchase, a <strong>micro-gift of BTC</strong> is transmitted forward.</li>
        <li>Your gift becomes part of the <strong>bitchain</strong> — a peer-powered lineage of light.</li>
        <li>This chain is <strong>quiet, anonymous, eternal</strong> — sacred economy woven through code.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">⚠️ Not Therapy. Not a Crisis Line.</h2>
      <p className="mb-6">These transmissions are poetic tools, not medical advice. If you are in pain, please seek a human hand, a hotline, a healer. promptflora is not a suicide prevention resource.</p>

      <h2 className="text-xl font-semibold mb-2">🌸 License Summary:</h2>
      <p className="mb-6">This is a <strong>personal-use only license</strong>. You may <strong>use</strong>, <strong>reflect</strong>, and <strong>ritualize</strong> — but may not copy, commercialize, or train AI on this content.</p>

      <p className="text-center text-sm text-gray-500">© 2025 promptflora. A project of Go See Online Stellar Designs LLC.</p>
    </div>
  )
}
