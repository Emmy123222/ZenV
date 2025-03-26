import React from 'react';
import { Screen } from '../../types';

interface SeedphraseProps {
  setCurrentScreen: (screen: Screen) => void;
  seedPhrase: string[];
}

export function Seedphrase({ setCurrentScreen, seedPhrase }: SeedphraseProps) {
  return (
    <div className="flex flex-col text-white p-6">
      <h1 className="text-2xl font-bold mb-2">Backup your Seedphrase</h1>
      <p className="text-sm mb-6 text-gray-400">Write these 12 words down, or copy them carefully to secure storage</p>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {seedPhrase.map((word, index) => (
          <div key={index} className="bg-[#040333] p-3 rounded-lg text-center">
            <span className="text-gray-500 text-xs">{index + 1}</span>
            <p className="font-medium">{word}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentScreen('home')}
        className="bg-blue-500 text-white px-8 py-3 rounded-full w-full"
      >
        I've Saved These Words
      </button>
    </div>
  );
}