import useBuscadorContext from "../hooks/useBuscadorContext"

const PaginaPrincipal = () => {

  const {focusInput} = useBuscadorContext()

  return (
    <div>
        <div className="pagina-principal-container" id="index">
            <h2>¡Bienvenido a Minamón Películas!</h2>
            <div>
                <p>Dirígete al<button className="inst-1" href="buscador" onClick={focusInput}>buscador</button> y comienza la <span  className="inst-2">búsqueda</span>.</p>
                <p>Recuerda utilizar el <span className="inst-3">título</span> de las películas en su <span className="inst-4">idioma</span> original.</p>
            </div>
        </div>
    </div>
  )
}

export default PaginaPrincipal
