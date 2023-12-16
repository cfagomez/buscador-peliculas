import Navbar from "./components/Navbar"
import ListaResultados from "./components/ListaResultados"
import useBuscadorContext from "./hooks/useBuscadorContext"
import ModalPelicula from "./components/ModalPelicula"
import PaginaPrincipal from "./components/PaginaPrincipal"
import ModalError from "./components/ModalError"
import Spinner from "./components/Spinner"

function App() {

  const {modal, listaPeliculas, modalError, loading} = useBuscadorContext()

  return (
    <>
      <Navbar />
        {
          loading && <Spinner />
        }
        <main>
          {

            listaPeliculas.length > 0 ? (

              <ListaResultados />

            ) : (

              <PaginaPrincipal />

            )
          }
          {
            modalError && <ModalError />
          }
          {
            modal && <ModalPelicula />
          }
        </main>
    </>
  )
}

export default App
