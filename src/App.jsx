import Navbar from "./components/Navbar"
import ListaResultados from "./components/ListaResultados"
import useBuscadorContext from "./hooks/useBuscadorContext"

function App() {

  const {listaPeliculas} = useBuscadorContext()

  return (
    <>
      <Navbar />
      <main>
        <ListaResultados />
      </main>
    </>
  )
}

export default App
