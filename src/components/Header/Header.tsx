import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../../components/Header/Header.css'
import UserInfo from '../UserInfo'

interface HeaderProps {
  onSearchChange: (q: string) => void
  searchValue: string
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, searchValue }) => {
  const navigate = useNavigate()
  const loc = useLocation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
    if (loc.pathname !== '/') navigate('/')
  }

  return (
    <header className='app-header'>
      <div className='logo' onClick={() => navigate('/')}>🎥 MyMovies</div>
      <input className='search' placeholder='Search movies...' value={searchValue} onChange={handleChange} />
      <UserInfo />
    </header>
  )
}

export default Header
