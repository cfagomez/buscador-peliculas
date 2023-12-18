import useBuscadorContext from "../hooks/useBuscadorContext"

const ModalError = () => {

    const {titulo, cerrarModalError} = useBuscadorContext()

  return (
    <div className='modal'>
        <div className='modal-content modal-content-w-75'>
            <p className="message-error">No se han encontrado resultados para <span>"{titulo}"</span>.</p>
            <button
                className="close-btn"
                type="button"
                onClick={cerrarModalError}
            >
              Cerrar
            </button>
        </div>
    </div>
  )
}

export default ModalError
