import { useState, useEffect, useCallback } from 'react';
import { PLANTS, SEED_RETURN, getPlantById } from '../data/plants';
import { FISH } from '../data/fish';
import { CONFIG } from '../data/config';
import { saveGame, loadGame } from '../utils/saveLoad';

const initialState = {
  season: 1,
  day: 1,
  inventory: {},
  seeds: { carrot: 5, tomato: 3, corn: 2 },
  fish: {},
  tools: {},
  plots: {},
  discovered: new Set(['carrot', 'tomato', 'corn']),
  discoveredFish: new Set([]),
  neighbours: {
    baker: { friendship: 0 },
    fishmonger: { friendship: 0 },
    florist: { friendship: 0 }
  },
  goalProgress: 0,
  goalTarget: 10,
  goalItems: [
    { id: 'carrot', qty: 5, type: 'plant' },
    { id: 'tomato', qty: 5, type: 'plant' }
  ],
  fishing: false,
  activeSlot: null
};

export function useGameState() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state.activeSlot) {
      const interval = setInterval(() => {
        saveGame(state.activeSlot, state);
      }, CONFIG.AUTO_SAVE_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [state.activeSlot, state]);

  const plantSeed = useCallback((plotKey, plantId) => {
    setState(prev => {
      if ((prev.seeds[plantId] || 0) < 1) return prev;
      return {
        ...prev,
        seeds: { ...prev.seeds, [plantId]: prev.seeds[plantId] - 1 },
        plots: { ...prev.plots, [plotKey]: { plant: plantId, plantedAt: Date.now() } }
      };
    });
  }, []);

  const harvest = useCallback((plotKey) => {
    setState(prev => {
      const plot = prev.plots[plotKey];
      if (!plot || !plot.plant) return prev;

      const plant = getPlantById(plot.plant);
      const seedReturn = SEED_RETURN[plant.rarity] || 0;
      const newDiscovered = new Set(prev.discovered);
      newDiscovered.add(plant.id);

      return {
        ...prev,
        inventory: { ...prev.inventory, [plant.id]: (prev.inventory[plant.id] || 0) + 1 },
        seeds: { ...prev.seeds, [plant.id]: (prev.seeds[plant.id] || 0) + seedReturn },
        discovered: newDiscovered,
        plots: { ...prev.plots, [plotKey]: { plant: null, plantedAt: null } }
      };
    });
  }, []);

  const startFishing = useCallback(() => {
    setState(prev => ({ ...prev, fishing: true, fishCastTime: Date.now() }));
    setTimeout(() => {
      setState(prev => {
        if (!prev.fishing) return prev;
        const roll = Math.random();
        let caught;
        if (roll < 0.6) caught = FISH[0];
        else if (roll < 0.9) caught = FISH[1];
        else caught = FISH[2];

        const newDiscoveredFish = new Set(prev.discoveredFish);
        newDiscoveredFish.add(caught.id);

        return {
          ...prev,
          fish: { ...prev.fish, [caught.id]: (prev.fish[caught.id] || 0) + 1 },
          discoveredFish: newDiscoveredFish,
          fishing: false
        };
      });
    }, CONFIG.FISH_CATCH_TIME);
  }, []);

  const loadSavedGame = useCallback((slot) => {
    const data = loadGame(slot);
    if (data) {
      setState({ ...data, activeSlot: slot });
      return true;
    }
    return false;
  }, []);

  const startNewGame = useCallback((slot) => {
    setState({ ...initialState, activeSlot: slot });
  }, []);

  return { state, plantSeed, harvest, startFishing, loadSavedGame, startNewGame };
}
