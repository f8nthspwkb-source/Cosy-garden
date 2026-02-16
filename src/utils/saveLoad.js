export function getSaveData() {
  const saves = { slot1: null, slot2: null, slot3: null };
  for (let i = 1; i <= 3; i++) {
    const raw = localStorage.getItem(`cozygarden_slot${i}`);
    if (raw) {
      try {
        saves[`slot${i}`] = JSON.parse(raw);
      } catch (e) {
        console.error(`Error loading slot ${i}:`, e);
      }
    }
  }
  return saves;
}

export function saveGame(slot, state) {
  const data = {
    ...state,
    discovered: Array.from(state.discovered),
    discoveredFish: Array.from(state.discoveredFish),
    savedAt: Date.now()
  };
  localStorage.setItem(`cozygarden_slot${slot}`, JSON.stringify(data));
}

export function loadGame(slot) {
  const raw = localStorage.getItem(`cozygarden_slot${slot}`);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);
    return {
      ...data,
      discovered: new Set(data.discovered),
      discoveredFish: new Set(data.discoveredFish)
    };
  } catch (e) {
    console.error(`Error parsing slot ${slot}:`, e);
    return null;
  }
}

export function hasSaves() {
  const saves = getSaveData();
  return !!(saves.slot1 || saves.slot2 || saves.slot3);
}
