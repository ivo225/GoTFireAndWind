export interface Location {
  id: string;
  name: string;
  type: 'region' | 'city' | 'castle' | 'landmark';
  description: string;
  continent: 'Westeros' | 'Essos' | 'Sothoryos' | 'Unknown';
  notableFor?: string[];
}

export const locations: Location[] = [
  {
    id: 'north',
    name: 'The North',
    type: 'region',
    continent: 'Westeros',
    description: 'The largest region of the Seven Kingdoms, ruled by House Stark from Winterfell.',
    notableFor: ['Winterfell', 'The Wall', 'White Harbor']
  },
  {
    id: 'kings-landing',
    name: 'King\'s Landing',
    type: 'city',
    continent: 'Westeros',
    description: 'The capital and largest city of the Seven Kingdoms, seat of the Iron Throne.',
    notableFor: ['Red Keep', 'Great Sept of Baelor', 'Dragonpit']
  },
  {
    id: 'winterfell',
    name: 'Winterfell',
    type: 'castle',
    continent: 'Westeros',
    description: 'The ancestral seat of House Stark and the capital of the North.',
    notableFor: ['Godswood', 'Broken Tower', 'Crypts of Winterfell']
  },
  {
    id: 'wall',
    name: 'The Wall',
    type: 'landmark',
    continent: 'Westeros',
    description: 'A colossal fortification of ice and magic that stretches across the northern border.',
    notableFor: ["Castle Black", "Nightfort", "Eastwatch-by-the-Sea"]
  },
  {
    id: 'pentos',
    name: 'Pentos',
    type: 'city',
    continent: 'Essos',
    description: 'One of the Free Cities, known for its merchants and trade.',
    notableFor: ['Prince\'s Palace', 'Temples', 'Trading Harbor']
  },
  {
    id: 'valyria',
    name: 'Valyria',
    type: 'region',
    continent: 'Essos',
    description: 'The ruined homeland of the Valyrian Freehold, destroyed by the Doom.',
    notableFor: ['Dragon Roads', 'Smoking Sea', 'Ancient Ruins']
  },
  {
    id: 'dorne',
    name: 'Dorne',
    type: 'region',
    continent: 'Westeros',
    description: 'The southernmost region of Westeros, known for its hot climate and fierce independence.',
    notableFor: ['Sunspear', 'Water Gardens', 'Red Mountains']
  },
  {
    id: 'iron-islands',
    name: 'Iron Islands',
    type: 'region',
    continent: 'Westeros',
    description: 'An archipelago off the western coast of Westeros, home to the ironborn.',
    notableFor: ['Pyke', 'Great Wyk', 'Old Wyk']
  },
  {
    id: 'meereen',
    name: 'Meereen',
    type: 'city',
    continent: 'Essos',
    description: 'Largest of the three great city-states of Slaver\'s Bay.',
    notableFor: ['Great Pyramid', 'Fighting Pits', 'Temple of the Graces']
  },
  {
    id: 'braavos',
    name: 'Braavos',
    type: 'city',
    continent: 'Essos',
    description: 'The wealthiest and most powerful of the Free Cities.',
    notableFor: ['Titan of Braavos', 'Iron Bank', 'House of Black and White']
  }
];
