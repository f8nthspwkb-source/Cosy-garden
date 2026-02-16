import React, { useState } from 'react';
import { TradingIntro } from './components/intro/TradingIntro';
import { WelcomeScreen } from './components/ui/WelcomeScreen';
import { SlotSelector } from './components/ui/SlotSelector';
import { useGameState } from './hooks/useGameState';
import { hasSaves } from './utils/saveLoad';
import './styles/index.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSlotSelector, setShowSlotSelector] = useState(false);
  const [isNewGame, setIsNewGame] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const { state, loadSavedGame, startNewGame } = useGameState();

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowWelcome(true);
  };

  const handleNewGame = () => {
    setIsNewGame(true);
    setShowWelcome(false);
    setShowSlotSelector(true);
  };

  const handleContinue = () => {
    setIsNewGame(false);
    setShowWelcome(false);
    setShowSlotSelector(true);
  };

  const handleSlotSelected = (slotNum) => {
    setShowSlotSelector(false);
    if (isNewGame) {
      startNewGame(slotNum);
    } else {
      loadSavedGame(slotNum);
    }
    setGameStarted(true);
  };

  const handleCancelSlotSelection = () => {
    setShowSlotSelector(false);
    setShowWelcome(true);
  };

  if (showIntro) {
    return <TradingIntro onComplete={handleIntroComplete} />;
  }

  if (showWelcome) {
    return (
      <WelcomeScreen
        onNewGame={handleNewGame}
        onContinue={handleContinue}
        hasSavedGames={hasSaves()}
      />
    );
  }

  if (showSlotSelector) {
    return (
      <SlotSelector
        onSelectSlot={handleSlotSelected}
        onCancel={handleCancelSlotSelection}
        isNewGame={isNewGame}
      />
    );
  }

  if (gameStarted) {
    return (
      <div className="game-container">
        <h1>🌿 Cozy Garden 🌿</h1>
        <p>Season {state.season}, Day {state.day}</p>
        <p>Slot: {state.activeSlot}</p>
      </div>
    );
  }

  return null;
}

export default App;
