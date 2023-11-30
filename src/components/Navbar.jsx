import React from 'react'
import useBuscadorContext from '../hooks/useBuscadorContext'

const Navbar = () => {

    const {titulo, buscarPelicula, handleChangeTitulo} = useBuscadorContext()

  return (
    <nav>
        <a 
            href="#"
            className='logo'
        >
            Minamon
        </a>
        <div>
            <form
                onSubmit={buscarPelicula}
            >
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
