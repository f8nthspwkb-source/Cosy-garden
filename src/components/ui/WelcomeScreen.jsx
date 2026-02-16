import React from 'react';

export function WelcomeScreen({ onNewGame, onContinue, hasSavedGames }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1>🌿 Welcome to Your Garden! 🌿</h1>
        <p>
          Plant seeds, harvest crops, trade with neighbours, and watch your cozy garden flourish.
          Every seed you plant is a new beginning!
        </p>
        <div className="welcome-buttons">
          <button className="welcome-btn new" onClick={onNewGame}>
            🌱 Start New Garden
          </button>
          {hasSavedGames && (
            <button className="welcome-btn continue" onClick={onContinue}>
              🏡 Continue Gardening
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
