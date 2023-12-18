import React from 'react'
import useBuscadorContext from '../hooks/useBuscadorContext'

const ModalPelicula = () => {

    const {datosPelicula, generos, cerrarModal} = useBuscadorContext()
    const {Title, Year, Rated, Runtime, Poster, Plot, Director, Writer, Actors, imdbRating} = datosPelicula

  return (
    <div className='modal'>
      <div className='modal-content'>
        <p className='title'>{Title}</p>
        {

          imdbRating === "N/A" ? (

            null

          ) : (

            <p className='rating'>{imdbRating}</p>

          )

        }
        <div className='datos-container'>
            <p>{Year}</p>
            {

              Rated === "N/A" ? (

                null

              ) : (

                <p>{Rated}</p>

              )

            }
            {

              Runtime === "N/A" ? (

                null

              ) : (

                <p>{Runtime}</p>

              )

            }  
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

            <p key={genero}>{genero}</p>

          ))
        }
        </div>
        <div className='datos-container-2'>
          {

            Plot === "N/A" ? (

              <p className='datos-error'>No se ha encontrado información.</p>

            ) : (

              <p className='plot'>{Plot}</p>

            )

          }
          <hr />
          <p>Director: {
            
            Director === "N/A" ? (

              <span className='datos-error'>No se ha encontrado información.</span>

            ) : (

              <span className='director'>{Director}</span>

            )
          
          }</p>
          <hr />
          <p>Guionista: {
            
            Writer === "N/A" ? (

              <span className='datos-error'>No se ha encontrado información.</span>

            ) : (

              <span className='guionista'>{Writer}</span>

            )
          
          }</p>
          <hr />
          <p>Elenco: {
            
            Actors === "N/A" ? (

              <span className='datos-error'>No se ha encontrado información.</span>

            ) : (

              <span className='elenco'>{Actors}</span>

            )
          
          }</p>
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
