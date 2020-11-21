import { Game } from '@bg/api-interfaces';

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const randomReviews = (game: string) => {
  return new Array(randomInteger(1, 3)).fill({}).map(() => ({
    game,
    rating: randomInteger(0, 5),
    content: 'Lorem ipsum dolor sit amet',
  }));
};

export const games: Game[] = [
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image: '/assets/beans.png',
    description: 'Description',
    price: 35,
    reviews: randomReviews('settlers-in-the-can'),
  },
  {
    id: 'chess-pie',
    name: 'Chess Pie',
    image: '/assets/chess.png',
    description: 'Description',
    price: 15,
    reviews: randomReviews('chess-pie'),
  },
];
