import { api } from './axiosConfig'
import { TMDBDiscoverResponse } from '../types/movie'

export const moviesService = {
  discoverMovies: (page = 1) => api.get<TMDBDiscoverResponse>('/discover/movie', { params: { page } }),
  searchMovies: (query: string, page = 1) => api.get<TMDBDiscoverResponse>('/search/movie', { params: { query, page } }),
  getGenres: () => api.get('/genre/movie/list'),
  getMovieById: (id: number) => api.get(`/movie/${id}`)
}
