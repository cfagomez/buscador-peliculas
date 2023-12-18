import useBuscadorContext from '../hooks/useBuscadorContext'

const Resultado = ({pelicula}) => {

    const {Poster, Title, Type, Year} = pelicula
    const {obtenerDatosPelicula} = useBuscadorContext()

  return (
    <div className="resultado-container">
      <div className="informacion-container">
        <img 
          src={Poster} 
          alt={`Póster ${Title}`}
          width="150"
          height="200"
        />
        <div>
          <p className='p-title'>{Title}</p>
          <p className="p-type capitalize">{Type}</p>
          <p className='p-year'>{Year}</p>
        </div>
      </div>
      <button 
        type="button"
        className="btn-ver-mas"
        onClick={() => obtenerDatosPelicula(Title)}
      >
        Ver más
      </button>
    </div>
  )
}

export default Resultado
