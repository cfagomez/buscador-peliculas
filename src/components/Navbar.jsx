import useBuscadorContext from '../hooks/useBuscadorContext'
import Error from './Error'

const Navbar = () => {

    const {titulo, validarFormulario, handleChangeTitulo, error} = useBuscadorContext()

  return (
    <nav>
        <a 
            href="#"
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
