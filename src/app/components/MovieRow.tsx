import type { Movies } from '../types/movie.type';
import { MovieCard } from './MovieCard';

type MovieRowProps = {
  title: string;
  movies: Movies;
};

export const MovieRow = ({ title, movies }: MovieRowProps) => (
  <div className='-ml-4 p-4'>
    <div className='flex-col space-y-4 pl-2'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {title}
        </h2>
      </div>
      <MovieCard movie={movies} />
    </div>
  </div>
);
