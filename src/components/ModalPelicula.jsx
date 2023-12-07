import React from 'react'
import useBuscadorContext from '../hooks/useBuscadorContext'

const ModalPelicula = () => {

    const {datosPelicula, generos, cerrarModal} = useBuscadorContext()
    const {Title, Year, Rated, Runtime, Poster, Plot, Director, Writer, Actors, imdbRating} = datosPelicula

  return (
    <div className='modal'>
      <div className='modal-content'>
        <p className='title'>{Title}</p>
        <p className='rating'>{imdbRating}</p>
        <div className='datos-container'>
            <p>{Year} ·</p>
            <p>{Rated} ·</p>
            <p>{Runtime}</p>
        </div>
        <img 
          src={Poster} 
          alt={`Poster ${Title}`}
          width="300px"
          height="450px"
        />
        <div className='generos-container'>
        {
          generos.map( genero => (

            <p>{genero}</p>

          ))
        }
        </div>
        <div className='datos-container-2'>
          <p className='plot'>{Plot}</p>
          <hr />
          <p>Dirección: <span>{Director}</span></p>
          <hr />
          <p>Guionista: <span>{Writer}</span></p>
          <hr />
          <p>Elenco: <span>{Actors}</span></p>
        </div>
        <button 
          className='close-btn'
          type='button'
          onClick={cerrarModal}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default ModalPelicula
