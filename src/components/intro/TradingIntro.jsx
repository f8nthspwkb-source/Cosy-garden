import React from 'react';
import '../../styles/intro.css';

export function TradingIntro({ onComplete }) {
  const playIntroMusic = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const melody = [
        { freq: 523.25, time: 0, dur: 0.6 },
        { freq: 587.33, time: 0.6, dur: 0.5 },
        { freq: 659.25, time: 1.1, dur: 0.6 }
      ];

      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 12);

      melody.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(masterGain);
        osc.type = 'sine';
        osc.frequency.value = n.freq;
        osc.start(ctx.currentTime + n.time);
        osc.stop(ctx.currentTime + n.time + n.dur);
      });
    } catch (e) {
      console.error('Audio not available:', e);
    }
  };

  const handleStart = () => {
    playIntroMusic();
    setTimeout(() => onComplete(), 12000);
  };

  return (
    <div className="trading-intro">
      <div className="intro-sky"></div>
      <div className="intro-sun"></div>
      <div className="intro-ground"></div>

      <div className="intro-flower intro-flower1">🌸</div>
      <div className="intro-flower intro-flower2">🌼</div>
      <div className="intro-flower intro-flower3">🌺</div>
      <div className="intro-flower intro-flower4">🌻</div>
      <div className="intro-flower intro-flower5">🌷</div>
      <div className="intro-flower intro-flower6">💐</div>

      <div className="intro-claire">
        👩‍🌾
        <div className="intro-claire-held">🍅</div>
        <div className="intro-claire-received">🐟</div>
      </div>

      <div className="intro-fisherman">
        👨‍🌾
        <div className="intro-fisherman-held">🐟</div>
        <div className="intro-fisherman-received">🍅</div>
      </div>

      <div className="intro-trade-tomato">🍅</div>
      <div className="intro-trade-fish">🐟</div>
      <div className="intro-sparkle">✨</div>

      <button className="intro-start-button" onClick={handleStart}>
        🌱 Start Your Adventure 🌱
      </button>
    </div>
  );
}
