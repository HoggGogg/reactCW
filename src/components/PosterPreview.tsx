import React from 'react'

const PosterPreview: React.FC<{ path?: string | null; title: string }> = ({ path, title }) => {
  const url = path ? `https://image.tmdb.org/t/p/w300${path}` : `https://via.placeholder.com/300x450?text=No+Image`
  return <img src={url} alt={title} style={{ width: '100%', display: 'block', borderTopLeftRadius:6, borderTopRightRadius:6 }} />
}

export default PosterPreview
