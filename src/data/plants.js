export const PLANTS = [
  { id: 'carrot', emoji: '🥕', name: 'Carrot', rarity: 'common', seedCost: 1 },
  { id: 'tomato', emoji: '🍅', name: 'Tomato', rarity: 'common', seedCost: 1 },
  { id: 'corn', emoji: '🌽', name: 'Corn', rarity: 'common', seedCost: 1 },
  { id: 'pumpkin', emoji: '🎃', name: 'Pumpkin', rarity: 'rare', seedCost: 3 },
  { id: 'sunflower', emoji: '🌻', name: 'Sunflower', rarity: 'rare', seedCost: 3 },
  { id: 'rose', emoji: '🌹', name: 'Rose', rarity: 'exotic', seedCost: 10 },
  { id: 'tulip', emoji: '🌷', name: 'Tulip', rarity: 'exotic', seedCost: 10 }
];

export const SEED_RETURN = { common: 2, rare: 1, exotic: 0 };
export const getPlantById = (id) => PLANTS.find(p => p.id === id);
