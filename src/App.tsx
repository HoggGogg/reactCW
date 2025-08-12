import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MoviesPage from './containers/MoviesPage'
import MovieDetailsPage from './containers/MovieDetailsPage'
import Header from './components/Header/Header'

const App: React.FC = () => {
  const [search, setSearch] = useState('')
  return (
    <Router>
      <Header onSearchChange={setSearch} searchValue={search} />
      <Routes>
        <Route path='/' element={<MoviesPage searchQuery={search} />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
