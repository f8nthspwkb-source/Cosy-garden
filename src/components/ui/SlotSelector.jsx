import React from 'react';
import { getSaveData } from '../../utils/saveLoad';

export function SlotSelector({ onSelectSlot, onCancel, isNewGame }) {
  const saves = getSaveData();

  const handleSlotClick = (slotNum, saveData) => {
    if (isNewGame && saveData) {
      if (window.confirm(`Overwrite Slot ${slotNum}?`)) {
        onSelectSlot(slotNum);
      }
    } else {
      onSelectSlot(slotNum);
    }
  };

  return (
    <div className="slot-selector">
      <div className="slot-panel">
        <h2>Choose Your Garden</h2>
        <div className="slot-list">
          {[1, 2, 3].map(num => {
            const saveData = saves[`slot${num}`];
            return (
              <div
                key={num}
                className={`slot-item ${!saveData ? 'empty' : ''}`}
                onClick={() => handleSlotClick(num, saveData)}
              >
                <div className="slot-name">Slot {num}</div>
                <div className="slot-info">
                  {saveData ? `Season ${saveData.season}, Day ${saveData.day}` : 'Empty'}
                </div>
              </div>
            );
          })}
        </div>
        <button className="slot-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
