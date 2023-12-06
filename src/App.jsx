import Navbar from "./components/Navbar"
import ListaResultados from "./components/ListaResultados"
import useBuscadorContext from "./hooks/useBuscadorContext"
import ModalPelicula from "./components/ModalPelicula"

function App() {

  const {modal} = useBuscadorContext()

  return (
    <>
      <Navbar />
      <main>
        <ListaResultados />
        {
          modal && <ModalPelicula />
        }
      </main>
    </>
  )
}

export default App
