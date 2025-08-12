import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TMDBMovie } from '../../types/movie'
import PosterPreview from '../PosterPreview'
import StarsRating from '../StarsRating'

const MoviesListCard: React.FC<{ movie: TMDBMovie }> = ({ movie }) => {
  const navigate = useNavigate()
  return (
    <div className='card' style={{cursor:'pointer'}} onClick={() => navigate(`/movie/${movie.id}`)}>
      <PosterPreview path={movie.poster_path} title={movie.title} />
      <div style={{padding:10}}>
        <h4 style={{margin:0, fontSize:16}}>{movie.title}</h4>
        <div style={{marginTop:8}}>
          <StarsRating rating={movie.vote_average} />
        </div>
      </div>
    </div>
  )
}

export default MoviesListCard
