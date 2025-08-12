import React from 'react'
import '../../components/GenreBadge/GenreBadge.css'
import { TMDBGenre } from '../../types/movie'

interface Props {
  genre: TMDBGenre
  active?: boolean
  onClick: (id: number) => void
}

const GenreBadge: React.FC<Props> = ({ genre, active, onClick }) => (
  <button className={`genre-badge ${active ? 'active' : ''}`} onClick={() => onClick(genre.id)}>
    {genre.name}
  </button>
)

export default GenreBadge
