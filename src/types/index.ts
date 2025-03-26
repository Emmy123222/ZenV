export type Screen = 
  | 'splash' 
  | 'onboarding1' 
  | 'onboarding2' 
  | 'onboarding3' 
  | 'createWallet' 
  | 'connectWallet'
  | 'seedphrase' 
  | 'home' 
  | 'transactions' 
  | 'vault';

export interface Transaction {
  id: string;
  type: 'sent' | 'received';
  amount: string;
  value: string;
  date: string;
  asset: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface Asset {
  symbol: string;
  name: string;
  balance: string;
  value: number;
  icon: string;
}