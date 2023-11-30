const Resultado = ({pelicula}) => {

    const {Poster, Title, Type, Year} = pelicula

  return (
    <div className="resultado-container">  
      <img 
        src={Poster} 
        alt={`Poster ${Title}`}
        width="150"
        height="200"
      />
      <div>
        <p>{Title}</p>
        <p>{Type}</p>
        <p>{Year}</p>
      </div>
      <button type="button">Ver mas</button>
    </div>
  )
}

export default Resultado
