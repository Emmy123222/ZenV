import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Copy, Settings } from 'lucide-react';
import { Screen } from '../../types';
import { Navigation } from '../Navigation';
import { motion } from 'framer-motion';

interface HomeProps {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  isBalanceHidden: boolean;
  setIsBalanceHidden: (hidden: boolean) => void;
}

export function Home({ currentScreen, setCurrentScreen, isBalanceHidden, setIsBalanceHidden }: HomeProps) {
  const [activeTab, setActiveTab] = useState<'wallet' | 'vault'>('wallet');

  const cryptoAssets = [
    { symbol: 'TON', name: 'Toncoin', balance: '4.56', icon: '💎' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '80.24k', icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', balance: '2.58k', icon: '⟠' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-primary-dark">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700"></div>
          <span className="text-white font-medium">AD1568V9</span>
        </div>
        <Settings className="text-white" />
      </div>

      {/* Tab Switcher */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 p-1 bg-primary-dark rounded-lg">
          <button
            onClick={() => setActiveTab('wallet')}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              activeTab === 'wallet' ? 'bg-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            Wallet
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              activeTab === 'vault' ? 'bg-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            Vault
          </button>
        </div>
      </div>

      {activeTab === 'wallet' ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4"
        >
          {/* Balance Card */}
          <div className="bg-primary-dark rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Total Balance</span>
              <Copy className="text-gray-400 w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              ${isBalanceHidden ? '****' : '2,458'}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center bg-blue-500/10 rounded-xl p-3">
                <ArrowUp className="text-blue-500 mb-1" />
                <span className="text-sm text-white">Transfer</span>
              </button>
              <button className="flex flex-col items-center bg-blue-500/10 rounded-xl p-3">
                <ArrowDown className="text-blue-500 mb-1" />
                <span className="text-sm text-white">Receive</span>
              </button>
              <button className="flex flex-col items-center bg-blue-500/10 rounded-xl p-3">
                <Copy className="text-blue-500 mb-1" />
                <span className="text-sm text-white">To Vault</span>
              </button>
            </div>
          </div>

          {/* Crypto Assets */}
          <div className="space-y-3">
            {cryptoAssets.map((asset) => (
              <div
                key={asset.symbol}
                className="flex items-center justify-between bg-primary-dark p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    {asset.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{asset.symbol}</h3>
                    <p className="text-sm text-gray-400">{asset.name}</p>
                  </div>
                </div>
                <span className="text-white font-medium">${asset.balance}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex flex-col items-center justify-center p-4 text-center"
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/vault-5349711-4468981.png"
            alt="Vault"
            className="w-48 h-48 mb-8"
          />
          <div className="w-full max-w-sm space-y-4">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-primary-dark text-white px-4 py-3 rounded-xl text-center"
            />
            <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
              Open
            </button>
            <div className="space-y-2">
              <button className="text-white">Create Vault Password</button>
              <button className="text-blue-500">Reset Vault Password</button>
            </div>
          </div>
        </motion.div>
      )}

      <Navigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );
}