export const FISH = [
  { id: 'fish', emoji: '🐟', name: 'Fish', rarity: 'common' },
  { id: 'tropical', emoji: '🐠', name: 'Tropical', rarity: 'rare' },
  { id: 'blowfish', emoji: '🐡', name: 'Blowfish', rarity: 'exotic' }
];

export const getFishById = (id) => FISH.find(f => f.id === id);
