import React from 'react'
import '../../components/PaginationControls/PaginationControls.css'

interface Props {
  page: number
  totalPages?: number
  onPrev: () => void
  onNext: () => void
}

const PaginationControls: React.FC<Props> = ({ page, totalPages = 1, onPrev, onNext }) => (
  <div className='pagination-controls'>
    <button className='page-btn' disabled={page <= 1} onClick={onPrev}>◀ Prev</button>
    <span className='page-number'>Page {page} / {totalPages}</span>
    <button className='page-btn' disabled={page >= totalPages} onClick={onNext}>Next ▶</button>
  </div>
)

export default PaginationControls
