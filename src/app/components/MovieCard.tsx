import Image from 'next/image';
import type { Movies } from '../types/movie.type';

export const MovieCard = ({ movie }: { movie: Movies }) => (
  <div className='scrollbar-hide -ml-4 flex space-x-4 overflow-x-scroll p-2'>
    {[1, 2, 3, 4, 5].map((item) => (
      <div
        key={item}
        className='group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110'
      >
        <Image
          key={item}
          src={`/item_${item}.png`}
          alt='MAID'
          fill={true}
          className='rounded'
        />
      </div>
    ))}
  </div>
);
