import React, { useState } from 'react';
import { BarChart3, BookOpen, Clock, Coins, Layout, LineChart, Settings, Shield } from 'lucide-react';

function App() {
  const [selectedAsset, setSelectedAsset] = useState('BTC');

  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', price: '44,256.78', change: '+2.34%' },
    { symbol: 'ETH', name: 'Ethereum', price: '2,345.90', change: '-1.20%' },
    { symbol: 'TSLA', name: 'Tesla Stock', price: '245.67', change: '+0.89%' },
    { symbol: 'AAPL', name: 'Apple Stock', price: '178.34', change: '+1.45%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Pesadrop</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Connect Wallet
              </button>
              <Settings className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Shield className="h-10 w-10 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Secured by HCS</p>
                <p className="text-lg font-semibold text-gray-900">100% Transparent</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Settlement Time</p>
                <p className="text-lg font-semibold text-gray-900">Instant</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Coins className="h-10 w-10 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Assets</p>
                <p className="text-lg font-semibold text-gray-900">$2.5M</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <BarChart3 className="h-10 w-10 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">24h Volume</p>
                <p className="text-lg font-semibold text-gray-900">$850K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Asset List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Available Assets</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {assets.map((asset) => (
                  <button
                    key={asset.symbol}
                    className={`w-full p-4 text-left hover:bg-gray-50 focus:outline-none ${
                      selectedAsset === asset.symbol ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedAsset(asset.symbol)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{asset.name}</p>
                        <p className="text-sm text-gray-500">{asset.symbol}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">${asset.price}</p>
                        <p className={`text-sm ${
                          asset.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {asset.change}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trading Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Trading Interface</h2>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                      <LineChart className="h-4 w-4 inline-block mr-1" />
                      Chart
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                      <BookOpen className="h-4 w-4 inline-block mr-1" />
                      Order Book
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                    Buy
                  </button>
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;