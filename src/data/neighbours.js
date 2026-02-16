export const NEIGHBOURS = [
  {
    id: 'baker',
    name: 'Baker',
    avatar: '👨‍🍳',
    desc: 'Loves fresh veggies',
    friendshipMax: 100,
    trades: [
      { give: [{ id: 'carrot', qty: 3 }], get: [{ id: 'watering_can', qty: 1 }], friendReq: 0 },
      { give: [{ id: 'tomato', qty: 5 }], get: [{ id: 'fertilizer', qty: 1 }], friendReq: 20 },
      { give: [{ id: 'pumpkin', qty: 2 }], get: [{ id: 'scarecrow', qty: 1 }], friendReq: 50 }
    ]
  },
  {
    id: 'fishmonger',
    name: 'Fishmonger',
    avatar: '🎣',
    desc: 'Trading fish for seeds',
    friendshipMax: 100,
    trades: [
      { give: [{ id: 'fish', qty: 2 }], get: [{ id: 'carrot', qty: 3 }], friendReq: 0 },
      { give: [{ id: 'tropical', qty: 1 }], get: [{ id: 'pumpkin', qty: 1 }], friendReq: 30 },
      { give: [{ id: 'blowfish', qty: 1 }], get: [{ id: 'rose', qty: 1 }], friendReq: 60 }
    ]
  },
  {
    id: 'florist',
    name: 'Florist',
    avatar: '💐',
    desc: 'Collecting rare blooms',
    friendshipMax: 100,
    trades: [
      { give: [{ id: 'sunflower', qty: 2 }], get: [{ id: 'watering_can', qty: 2 }], friendReq: 0 },
      { give: [{ id: 'rose', qty: 1 }], get: [{ id: 'fertilizer', qty: 3 }], friendReq: 40 },
      { give: [{ id: 'tulip', qty: 1 }], get: [{ id: 'scarecrow', qty: 2 }], friendReq: 70 }
    ]
  }
];
