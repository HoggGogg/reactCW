import React, { useEffect, useState } from 'react'
import { moviesService } from '../api/moviesService'
import MoviesList from '../components/MoviesList/MoviesList'
import GenreBadge from '../components/GenreBadge/GenreBadge'
import PaginationControls from '../components/PaginationControls/PaginationControls'
import { TMDBMovie, TMDBGenre } from '../types/movie'
import { Container } from 'reactstrap'

interface Props { searchQuery: string }

const MoviesPage: React.FC<Props> = ({ searchQuery }) => {
  const [movies, setMovies] = useState<TMDBMovie[]>([])
  const [genres, setGenres] = useState<TMDBGenre[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)

  useEffect(() => { loadGenres() }, [])

  useEffect(() => { loadMovies() /* eslint-disable-next-line */ }, [page, selectedGenre, searchQuery])

  const loadGenres = async () => {
    try {
      const res = await moviesService.getGenres()
      setGenres(res.data.genres)
    } catch (e) { console.error(e) }
  }

  const loadMovies = async () => {
    try {
      if (searchQuery) {
        const res = await moviesService.searchMovies(searchQuery, page)
        setMovies(res.data.results)
        setTotalPages(res.data.total_pages)
      } else if (selectedGenre) {
        const resp = await (await import('../api/axiosConfig')).api.get('/discover/movie', { params: { page, with_genres: selectedGenre } })
        setMovies(resp.data.results)
        setTotalPages(resp.data.total_pages)
      } else {
        const res = await moviesService.discoverMovies(page)
        setMovies(res.data.results)
        setTotalPages(res.data.total_pages)
      }
    } catch (e) { console.error(e) }
  }

  return (
    <Container>
      <div style={{marginTop:16}}>
        <div style={{marginBottom:12}}>
          {genres.map(g => (
            <GenreBadge
              key={g.id}
              genre={g}
              active={g.id === selectedGenre}
              onClick={(id) => { setSelectedGenre(prev => prev === id ? null : id); setPage(1) }}
            />
          ))}
        </div>
        <MoviesList movies={movies} />
        <PaginationControls page={page} totalPages={totalPages} onPrev={() => setPage(p => Math.max(1, p - 1))} onNext={() => setPage(p => Math.min(totalPages, p + 1))} />
      </div>
    </Container>
  )
}

export default MoviesPage
