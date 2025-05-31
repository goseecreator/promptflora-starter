import { NextApiRequest, NextApiResponse } from 'next'

// 🌿 This endpoint records each sacred transaction
// It honors the fixed $0.47 BTC gift, while allowing flexible tier pricing
// Beyond the BTC gift, funds are absorbed into the Aquifer Reserve, artist reward, and maintenance

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { wallet, tier } = req.body;
  if (!wallet || !tier) return res.status(400).json({ error: 'Missing data' });

  // Ritual bookkeeping
  const fixedGift = 0.47; // sacred BTC gift
  const record = {
    timestamp: new Date().toISOString(),
    wallet,
    tier,
    btcGift: fixedGift,
    remainderHeld: `USD amount of tier - $0.47` // not calculated here
  };

  console.log('🌸 Flow recorded:', record);
  // Later: log to DB or forward to payout queue

  res.status(200).json({ message: 'Flow recorded', record });
}
