import React from 'react';
import { Shield } from 'lucide-react';
import { Screen } from '../../types';
import { Navigation } from '../Navigation';

interface VaultProps {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
}

export function Vault({ currentScreen, setCurrentScreen }: VaultProps) {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Vault</h1>
        <div className="bg-[#040333] p-6 rounded-xl text-center">
          <div className="w-24 h-24 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Shield size={48} className="text-white" />
          </div>
          <p className="text-lg font-medium mb-2">Your vault is empty</p>
          <p className="text-sm text-gray-400 mb-6">Start securing your assets in the vault</p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full w-full">
            Move Assets to Vault
          </button>
        </div>
      </div>
      <Navigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );
}