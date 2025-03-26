import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { Screen } from '../../types';
import { useTonConnectUI } from '@tonconnect/ui-react';

interface ConnectWalletProps {
  setCurrentScreen: (screen: Screen) => void;
}

export function ConnectWallet({ setCurrentScreen }: ConnectWalletProps) {
  const [tonConnectUI] = useTonConnectUI();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      await tonConnectUI.connectWallet();
      setCurrentScreen('home');
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error(err);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md text-center"
      >
        <div className="mb-8">
          <div className="bg-blue-500 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Wallet className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Connect Your Wallet</h1>
          <p className="text-gray-400">Connect your TON wallet to continue</p>
        </div>

        {error && (
          <div className="bg-red-500/20 text-red-500 p-4 rounded-xl mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className={`w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-4 rounded-full text-lg font-medium ${
            isConnecting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>

        <button
          onClick={() => setCurrentScreen('createWallet')}
          className="mt-4 text-gray-400 hover:text-white transition-colors"
        >
          Go Back
        </button>
      </motion.div>
    </div>
  );
}