export class Boardgame {
  id: number;
  name: string;
  description: string;
  imageLink: string;
  minPlayers: number;
  maxPlayers: string;
  playingTime: number;
  mechanics: Array<string>;
  isExpansion: boolean;
  yearPublished: number;
  bggRating: number;
  averageRating: number;
  rank: number;
  designers: Array<string>;
  publishers: Array<string>;
  artists: Array<string>;
}
