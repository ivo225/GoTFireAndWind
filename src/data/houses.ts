export interface House {
  id: string;
  name: string;
  type: 'great-house' | 'noble-house' | 'extinct-house';
  sigil: string;
  words: string;
  seat: string;
  region: string;
  description: string;
}

export const houses: House[] = [
  {
    id: 'stark',
    name: 'House Stark',
    type: 'great-house',
    sigil: 'A grey direwolf on a white field',
    words: 'Winter is Coming',
    seat: 'Winterfell',
    region: 'The North',
    description: 'The ancient house of the North, known for their honor and resilience.'
  },
  {
    id: 'lannister',
    name: 'House Lannister',
    type: 'great-house',
    sigil: 'A golden lion on a crimson field',
    words: 'Hear Me Roar!',
    seat: 'Casterly Rock',
    region: 'The Westerlands',
    description: 'The wealthy house of the Westerlands, known for their gold and ambition.'
  },
  {
    id: 'targaryen',
    name: 'House Targaryen',
    type: 'great-house',
    sigil: 'A three-headed dragon on a black field',
    words: 'Fire and Blood',
    seat: 'Dragonstone',
    region: 'The Crownlands',
    description: 'The house of the dragon, former rulers of the Seven Kingdoms.'
  },
  {
    id: 'baratheon',
    name: 'House Baratheon',
    type: 'great-house',
    sigil: 'A crowned black stag on a gold field',
    words: 'Ours is the Fury',
    seat: "Storm's End",
    region: 'The Stormlands',
    description: 'The proud house of the Stormlands, known for their strength and determination.'
  },
  {
    id: 'tyrell',
    name: 'House Tyrell',
    type: 'great-house',
    sigil: 'A golden rose on a green field',
    words: 'Growing Strong',
    seat: 'Highgarden',
    region: 'The Reach',
    description: 'The ambitious house of the Reach, known for their wealth and political acumen.'
  }
];
