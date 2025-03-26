import React from 'react';
import { Screen } from '../../types';
import { motion } from 'framer-motion';

interface CreateWalletProps {
  setCurrentScreen: (screen: Screen) => void;
}

export function CreateWallet({ setCurrentScreen }: CreateWalletProps) {
  return (
    <div 
      className="min-h-screen relative flex flex-col items-center justify-center text-white text-center p-6"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1920&h=1080")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary-dark/90" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-3xl font-bold mb-4">Let's Begin Here</h1>
        <p className="text-lg mb-12 text-gray-200">Create a wallet before we progress</p>
        <div className="space-y-4">
          <button
            onClick={() => setCurrentScreen('seedphrase')}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-4 rounded-full w-full text-lg font-medium"
          >
            Create Wallet
          </button>
          <button
            onClick={() => setCurrentScreen('connectWallet')}
            className="bg-transparent hover:bg-blue-500/10 transition-colors text-white px-8 py-4 rounded-full w-full text-lg font-medium border-2 border-blue-500"
          >
            Connect Wallet
          </button>
        </div>
      </motion.div>
    </div>
  );
}