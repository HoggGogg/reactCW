import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { moviesService } from '../api/moviesService'
import { TMDBMovie } from '../types/movie'
import StarsRating from '../components/StarsRating'
import { Container, Badge } from 'reactstrap'

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string } >()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<TMDBMovie | null>(null)

  useEffect(() => {
    if (!id) return
    moviesService.getMovieById(Number(id)).then(res => setMovie(res.data)).catch(console.error)
  }, [id])

  if (!movie) return <div style={{padding:20}}>Loading...</div>

  return (
    <Container style={{paddingTop:20}}>
      <div style={{display:'flex',gap:20,alignItems:'flex-start'}}>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x450'} alt={movie.title} style={{width:300}} />
        <div>
          <h2>{movie.title}</h2>
          <div style={{marginTop:8, marginBottom:8}}>
            {movie.genres?.map(g => <Badge key={g.id} color='primary' className='me-2'>{g.name}</Badge>)}
          </div>
          <StarsRating rating={movie.vote_average} />
          <p style={{marginTop:12}}>{movie.overview}</p>
          <p><strong>Release:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
          <button onClick={() => navigate(-1)} style={{marginTop:12}} className='btn btn-secondary'>Back</button>
        </div>
      </div>
    </Container>
  )
}

export default MovieDetailsPage
