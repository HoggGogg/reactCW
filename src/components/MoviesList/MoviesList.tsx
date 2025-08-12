import React from 'react'
import MoviesListCard from '../MoviesListCard/MoviesListCard'
import { TMDBMovie } from '../../types/movie'
import '../../components/MoviesList/MoviesList.css'

const MoviesList: React.FC<{ movies: TMDBMovie[] }> = ({ movies }) => (
  <div className='movies-grid'>
    {movies.map(m => <MoviesListCard key={m.id} movie={m} />)}
  </div>
)

export default MoviesList
