import React from 'react';
import { Screen } from '../../types';
import { motion } from 'framer-motion';

interface Onboarding3Props {
  setCurrentScreen: (screen: Screen) => void;
}

export function Onboarding3({ setCurrentScreen }: Onboarding3Props) {
  return (
    <div 
      className="min-h-screen relative flex flex-col items-center justify-center text-white text-center p-6"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1920&h=1080")',
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
        <h1 className="text-3xl font-bold mb-4">Secret Vault</h1>
        <p className="text-lg mb-12 text-gray-200">You can feel secure your assets, it comes with vault feature</p>
        <button
          onClick={() => setCurrentScreen('createWallet')}
          className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-4 rounded-full w-full text-lg font-medium"
        >
          Next
        </button>
        <div className="flex gap-2 justify-center mt-8">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
        </div>
      </motion.div>
    </div>
  );
}