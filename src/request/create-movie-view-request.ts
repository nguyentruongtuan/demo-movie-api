export type CreateMovieViewRequest = {
  title: string;
  year: number;
  genres: Array<number>;
  createdAt: Date;
  updatedAt: Date;
};
