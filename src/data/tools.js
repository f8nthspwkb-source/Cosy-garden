export const TOOLS = [
  { id: 'watering_can', emoji: '🚿', name: 'Watering Can' },
  { id: 'fertilizer', emoji: '💊', name: 'Fertilizer' },
  { id: 'scarecrow', emoji: '🧑‍🌾', name: 'Scarecrow' }
];

export const getToolById = (id) => TOOLS.find(t => t.id === id);
