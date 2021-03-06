import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {loading && <i className='fas fa-spinner fa-pulse fa-4x'></i>}
      <div className='card-grid'>
        {
          images.map(img => <GifGridItem key={img.id} {...img} />)
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
