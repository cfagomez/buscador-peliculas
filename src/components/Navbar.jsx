import useBuscadorContext from '../hooks/useBuscadorContext'
import Error from './Error'

const Navbar = () => {

    const {titulo, validarFormulario, handleChangeTitulo, error} = useBuscadorContext()

    const buscador = document.getElementById("buscador")

  return (
    <nav>
        <a 
            href="index"
            className='logo'
        >
            Minamón
        </a>
        <div>
            <form
                onSubmit={validarFormulario}
            >
                {
                    error ? (

                        <Error />

                    ) : (

                        null

                    )
                }
                <input 
                    type="text"
                    id='buscador'
                    placeholder='Buscar...'
                    value={titulo}
                    onChange={handleChangeTitulo}
                />
                <input 
                    type="submit" 
                    value="Buscar"
                />
            </form>
        </div>
    </nav>
  )
}

export default Navbar
