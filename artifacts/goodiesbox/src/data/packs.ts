export interface Pack {
  id: string;
  name: string;
  description: string;
  theme: 'Sports' | 'Crypto' | 'Entertainment' | 'Gaming';
  rarity: 'Standard' | 'Premium' | 'Legendary';
  priceSOL: number;
  priceETH: number;
  cardsPerPack: number;
  available: number;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
}

export const mockPacks: Pack[] = [
  {
    id: "pack-1",
    name: "Crypto Summer Alpha",
    description: "Contains 3 cards predicting major crypto events in Q3/Q4. High chance of Epic pulls.",
    theme: "Crypto",
    rarity: "Premium",
    priceSOL: 1.5,
    priceETH: 0.05,
    cardsPerPack: 3,
    available: 450,
    gradientFrom: "#00E5FF",
    gradientTo: "#7B2FBE",
    glowColor: "rgba(0, 229, 255, 0.5)",
  },
  {
    id: "pack-2",
    name: "Sports Legends 2024",
    description: "Your ticket to major sporting event predictions. Guaranteed 1 Rare or higher.",
    theme: "Sports",
    rarity: "Standard",
    priceSOL: 0.5,
    priceETH: 0.02,
    cardsPerPack: 3,
    available: 1200,
    gradientFrom: "#FF3CAC",
    gradientTo: "#2B86C5",
    glowColor: "rgba(255, 60, 172, 0.5)",
  },
  {
    id: "pack-3",
    name: "God Mode: Gaming",
    description: "Exclusive gaming industry predictions. The rarest pack in the ecosystem.",
    theme: "Gaming",
    rarity: "Legendary",
    priceSOL: 5.0,
    priceETH: 0.15,
    cardsPerPack: 5,
    available: 25,
    gradientFrom: "#FFD700",
    gradientTo: "#FF8C00",
    glowColor: "rgba(255, 215, 0, 0.5)",
  },
  {
    id: "pack-4",
    name: "Pop Culture Mystery",
    description: "Oscars, Box Office, and Celebrity drama. Open to reveal entertainment predictions.",
    theme: "Entertainment",
    rarity: "Standard",
    priceSOL: 0.4,
    priceETH: 0.015,
    cardsPerPack: 3,
    available: 800,
    gradientFrom: "#14F195",
    gradientTo: "#00E5FF",
    glowColor: "rgba(20, 241, 149, 0.5)",
  },
  {
    id: "pack-5",
    name: "Crypto Degens",
    description: "High risk, high reward predictions on meme coins and obscure L1s.",
    theme: "Crypto",
    rarity: "Legendary",
    priceSOL: 3.5,
    priceETH: 0.12,
    cardsPerPack: 5,
    available: 50,
    gradientFrom: "#9945FF",
    gradientTo: "#14F195",
    glowColor: "rgba(153, 69, 255, 0.5)",
  },
  {
    id: "pack-6",
    name: "E-Sports Arena",
    description: "Predictions for major tournaments across LoL, CS2, and Valorant.",
    theme: "Gaming",
    rarity: "Premium",
    priceSOL: 1.0,
    priceETH: 0.035,
    cardsPerPack: 3,
    available: 300,
    gradientFrom: "#FF7E5F",
    gradientTo: "#FEB47B",
    glowColor: "rgba(255, 126, 95, 0.5)",
  },
  {
    id: "pack-7",
    name: "Gridiron Glory",
    description: "NFL focused predictions for the upcoming season.",
    theme: "Sports",
    rarity: "Premium",
    priceSOL: 1.2,
    priceETH: 0.04,
    cardsPerPack: 3,
    available: 250,
    gradientFrom: "#8E44AD",
    gradientTo: "#2980B9",
    glowColor: "rgba(142, 68, 173, 0.5)",
  },
  {
    id: "pack-8",
    name: "Blockbuster Bets",
    description: "Box office opening weekend predictions for major releases.",
    theme: "Entertainment",
    rarity: "Standard",
    priceSOL: 0.3,
    priceETH: 0.01,
    cardsPerPack: 3,
    available: 1500,
    gradientFrom: "#E74C3C",
    gradientTo: "#F39C12",
    glowColor: "rgba(231, 76, 60, 0.5)",
  }
];