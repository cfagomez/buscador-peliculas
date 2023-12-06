const Resultado = ({pelicula}) => {

    const {Poster, Title, Type, Year} = pelicula

  return (
    <div className="resultado-container">
      <div className="informacion-container">
        <img 
          src={Poster} 
          alt={`Poster ${Title}`}
          width="150"
          height="200"
        />
        <div>
          <p>{Title}</p>
          <p className="type">{Type}</p>
          <p>{Year}</p>
        </div>
      </div>
      <button 
        type="button"
        className="btn-ver-mas"
      >
        Ver más
      </button>
    </div>
  )
}

export default Resultado
