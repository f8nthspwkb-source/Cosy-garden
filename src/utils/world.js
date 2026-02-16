export function generateWorld() {
  const soilTiles = [];
  const waterTiles = [];

  for (let r = 6; r <= 9; r++) {
    for (let c = 3; c <= 14; c++) {
      soilTiles.push({ r, c });
    }
  }

  for (let r = 3; r <= 5; r++) {
    for (let c = 2; c <= 9; c++) {
      waterTiles.push({ r, c });
    }
  }

  return {
    soilTiles,
    waterTiles,
    deckTile: { r: 5, c: 6 },
    rodTile: { r: 4, c: 7 }
  };
}

export function initializePlots(soilTiles) {
  const plots = {};
  soilTiles.forEach(({ r, c }) => {
    plots[`${r},${c}`] = { plant: null, plantedAt: null };
  });
  return plots;
}
