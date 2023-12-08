import Navbar from "./components/Navbar"
import ListaResultados from "./components/ListaResultados"
import useBuscadorContext from "./hooks/useBuscadorContext"
import ModalPelicula from "./components/ModalPelicula"
import PaginaPrincipal from "./components/PaginaPrincipal"

function App() {

  const {modal, listaPeliculas} = useBuscadorContext()

  return (
    <>
      <Navbar />
      <main>
        {
          listaPeliculas.length == 0 && <PaginaPrincipal />
        }
        <ListaResultados />   
        {
          modal && <ModalPelicula />
        }
      </main>
    </>
  )
}

export default App
