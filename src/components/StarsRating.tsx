import React from 'react'
import StarRatings from 'react-star-ratings'

const StarsRating: React.FC<{ rating: number }> = ({ rating }) => {
  const value = Math.round((rating / 10) * 5 * 10) / 10
  return <StarRatings rating={value} numberOfStars={5} starRatedColor='gold' starDimension='18px' starSpacing='2px' name='rating' />
}

export default StarsRating
