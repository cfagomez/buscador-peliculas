import React from 'react'
import useBuscadorContext from '../hooks/useBuscadorContext'

const ModalPelicula = () => {

    const {datosPelicula} = useBuscadorContext()
    const {Title, Year, Rated, Runtime, Poster} = datosPelicula

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>{Title}</h2>
        <div className='datos-container'>
            <p>{Year} ·</p>
            <p>{Rated} ·</p>
            <p>{Runtime}</p>
        </div>
        <img src={Poster} alt={`Poster ${Title}`} />
      </div>
    </div>
  )
}

export default ModalPelicula
