import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Screen } from "./types";
import { Splash } from "./components/screens/Splash";
import { Onboarding1 } from "./components/screens/Onboarding1";
import { Onboarding2 } from "./components/screens/Onboarding2";
import { Onboarding3 } from "./components/screens/Onboarding3";
import { CreateWallet } from "./components/screens/CreateWallet";
import { ConnectWallet } from "./components/screens/ConnectWallet";
import { Seedphrase } from "./components/screens/Seedphrase";
import { Home } from "./components/screens/Home";
import { Transactions } from "./components/screens/Transactions";
import { Vault } from "./components/screens/Vault";

const manifestUrl = "/tonconnect-manifest.json";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const [seedPhrase] = useState([
    "apple",
    "banana",
    "cherry",
    "date",
    "elder",
    "fig",
    "grape",
    "honey",
    "ice",
    "jam",
    "kiwi",
    "lemon",
  ]);

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const screens: Record<Screen, JSX.Element> = {
    splash: <Splash setCurrentScreen={setCurrentScreen} />,
    onboarding1: <Onboarding1 setCurrentScreen={setCurrentScreen} />,
    onboarding2: <Onboarding2 setCurrentScreen={setCurrentScreen} />,
    onboarding3: <Onboarding3 setCurrentScreen={setCurrentScreen} />,
    createWallet: <CreateWallet setCurrentScreen={setCurrentScreen} />,
    connectWallet: <ConnectWallet setCurrentScreen={setCurrentScreen} />,
    seedphrase: (
      <Seedphrase setCurrentScreen={setCurrentScreen} seedPhrase={seedPhrase} />
    ),
    home: (
      <Home
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        isBalanceHidden={isBalanceHidden}
        setIsBalanceHidden={setIsBalanceHidden}
      />
    ),
    transactions: (
      <Transactions
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    ),
    vault: (
      <Vault
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    ),
  };

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="min-h-screen bg-gradient-primary">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen overflow-y-auto"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
