"use client";

import ClientButton from "./clientButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 text-white text-center p-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-white mb-4">CryptoJack</h1>
        <p className="text-lg text-blue-200">
          🚀 Unlock Exclusive Crypto Insights!
        </p>
        <ul className="text-left text-blue-100 mt-4 space-y-2">
          <li>✅ Daily Market Updates</li>
          <li>✅ Exclusive Airdrop Analytics</li>
          <li>✅ Hidden Crypto Gems</li>
          <li>✅ Token Growth Predictions</li>
          <li>✅ Insider Trading Strategies</li>
        </ul>
        <div className="mt-6">
          <ClientButton />
        </div>
      </div>
    </div>
  );
}
