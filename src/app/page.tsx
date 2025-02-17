import Header from './components/Header';
import { Banner } from './components/Banner';
import { MovieRow } from './components/MovieRow';
import { getMovieById } from './service/Movie.service';

export default async function Home() {
  const movie = await getMovieById('105');
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={movie} />
        <MovieRow title='Trending Now' movies={[]} />
      </main>
    </div>
  );
}
