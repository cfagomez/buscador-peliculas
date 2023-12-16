import useBuscadorContext from '../hooks/useBuscadorContext'
import Resultado from './Resultado'

const ListaResultados = () => {

    const {listaPeliculas, titulo2} = useBuscadorContext()

  return (
    <div className='container-resultados'>
      <div className='p-resultados-container'>
        <p className='p-resultados'>Se han encontrado <span>{listaPeliculas.length}</span> resultados para <span>"{titulo2}"</span>.</p>
      </div>
      {
        listaPeliculas.map ( pelicula => (

            <>
                <Resultado
                    key={pelicula.imdbID}
                    pelicula={pelicula}
                />
            </>

        ))
      }
    </div>
  )
}

export default ListaResultados
