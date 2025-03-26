import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Screen, Transaction } from '../../types';
import { Navigation } from '../Navigation';

interface TransactionsProps {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
}

export function Transactions({ currentScreen, setCurrentScreen }: TransactionsProps) {
  const transactions: Transaction[] = [
    { type: 'Sent BTC', amount: '-0.0234', value: '1,234', date: 'Mar 24, 2024' },
    { type: 'Received ETH', amount: '+2.5', value: '4,567', date: 'Mar 23, 2024' },
    { type: 'Sent BTC', amount: '-0.015', value: '890', date: 'Mar 22, 2024' }
  ];

  return (
    <div className="flex flex-col h-full text-white">
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
        <div className="space-y-4">
          {transactions.map((tx, i) => (
            <div key={i} className="flex justify-between items-center bg-[#040333] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" />
                </div>
                <div>
                  <div className="font-medium">{tx.type}</div>
                  <div className="text-sm text-gray-400">{tx.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={tx.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                  {tx.amount} {tx.type.split(' ')[1]}
                </div>
                <div className="text-sm text-gray-400">${tx.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );
}