export interface Character {
  id: string;
  name: string;
  titles: string[];
  house: string;
  description: string;
  status: 'alive' | 'deceased' | 'unknown';
}

export const characters: Character[] = [
  {
    id: 'ned-stark',
    name: 'Eddard "Ned" Stark',
    titles: ['Lord of Winterfell', 'Warden of the North', 'Hand of the King'],
    house: 'Stark',
    description: 'The honorable Lord of Winterfell, known for his unwavering sense of justice and duty.',
    status: 'deceased'
  },
  {
    id: 'daenerys-targaryen',
    name: 'Daenerys Targaryen',
    titles: [
      'Mother of Dragons',
      'Khaleesi of the Great Grass Sea',
      'The Unburnt',
      'Queen of the Andals and the First Men'
    ],
    house: 'Targaryen',
    description: 'The last known Targaryen, who hatched three dragons and seeks to reclaim the Iron Throne.',
    status: 'alive'
  },
  {
    id: 'tyrion-lannister',
    name: 'Tyrion Lannister',
    titles: ['Hand of the Queen', 'Lord of Casterly Rock'],
    house: 'Lannister',
    description: 'The youngest Lannister sibling, known for his wit, intelligence, and political acumen.',
    status: 'alive'
  },
  {
    id: 'jon-snow',
    name: 'Jon Snow',
    titles: ['Lord Commander of the Night\'s Watch', 'King in the North'],
    house: 'Stark',
    description: 'The bastard son of Winterfell who rose to become Lord Commander of the Night\'s Watch.',
    status: 'alive'
  },
  {
    id: 'cersei-lannister',
    name: 'Cersei Lannister',
    titles: ['Queen of the Seven Kingdoms', 'Lady of Casterly Rock'],
    house: 'Lannister',
    description: 'The ambitious and ruthless Queen of the Seven Kingdoms, known for her cunning and determination.',
    status: 'alive'
  }
];
