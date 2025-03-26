import React from 'react';
import { Home, History, Compass } from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
}

export function Navigation({ currentScreen, setCurrentScreen }: NavigationProps) {
  const navItems = [
    { icon: Home, label: 'Home', screen: 'home' as Screen },
    { icon: History, label: 'Transactions', screen: 'transactions' as Screen },
    { icon: Compass, label: 'Explore', screen: 'home' as Screen },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="mt-auto bg-primary-dark py-4 px-8"
    >
      <div className="flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, screen }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-1 ${
              currentScreen === screen ? 'text-blue-500' : 'text-gray-400'
            }`}
            onClick={() => setCurrentScreen(screen)}
          >
            <Icon size={24} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}