import { TonConnect } from '@tonconnect/sdk';

// Initialize TON Connect
export const tonConnector = new TonConnect({
  manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json'
});

// Connect wallet
export const connectWallet = async () => {
  try {
    const wallets = await tonConnector.getWallets();
    
    // If no wallets are available, open the default wallet selection modal
    if (!wallets.length) {
      await tonConnector.connect();
      return;
    }

    // If wallets are available, connect to the first available one
    const firstWallet = wallets[0];
    await tonConnector.connect({
      jsBridgeKey: firstWallet.jsBridgeKey
    });
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    throw error;
  }
};

// Disconnect wallet
export const disconnectWallet = async () => {
  try {
    await tonConnector.disconnect();
  } catch (error) {
    console.error('Failed to disconnect wallet:', error);
    throw error;
  }
};