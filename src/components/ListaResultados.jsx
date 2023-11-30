import useBuscadorContext from '../hooks/useBuscadorContext'
import Resultado from './Resultado'

const ListaResultados = () => {

    const {listaPeliculas} = useBuscadorContext()

  return (
    <div>
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
