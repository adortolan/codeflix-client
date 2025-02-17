import type { Movie, Movies } from '../types/movie.type';
import { apiRequest, type requestOptions } from './ApiRequest';

export const getMovieById = async (id: string): Promise<Movie> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovies = async (id: string): Promise<Movie[]> => {
  return apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: requestOptions
): Promise<Movies> => {
  return apiRequest('movies', { genres_like: genre }, options);
};

export const searchMovies = async (
  genre: string,
  title: string,
  options: requestOptions = { _limit: 100 }
): Promise<Movies> => {
  return apiRequest(
    'movies',
    { title_like: title, genres_like: genre },
    options
  );
};
