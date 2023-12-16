import axios from "axios"
import { createContext, useState } from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [titulo, setTitulo] = useState('')
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [datosPelicula, setDatosPelicula] = useState([])
    const [modal, setModal] = useState(false)
    const [error, setError] = useState(false)
    const [generos, setGeneros] = useState([])
    const [modalError, setModalError] = useState(false)

    const buscarPelicula = async () => {

        try {

            const url = `https://www.omdbapi.com/?apikey=2e149a4c&s=${titulo}`
            const {data} = await axios(url)

            if (data.Response === 'True') {

                setListaPeliculas(data.Search)
                setTitulo('')
   
            } else {

                setModalError(true)

            }

        } catch (error) {

            console.log(error)

        }

    }

    const validarFormulario = (e) => {

        e.preventDefault()

        if (!titulo.trim()) {

            setError('¡Debes completar el campo!')

            return

        } else {

            buscarPelicula()

            setError('')

        }

    }

    const obtenerDatosPelicula = async (Title) => {

        try {

            const url = `https://www.omdbapi.com/?apikey=2e149a4c&t=${Title}`
            const {data} = await axios(url)
            setModal(true)
            setDatosPelicula(data)

            let generos = data.Genre
            const arrayGeneros = generos.split(',')
            setGeneros(arrayGeneros)

        } catch (error) {

            console.log(error)

        }

    }

    const handleChangeTitulo = (e) => {

        setTitulo(e.target.value)

    }

    const cerrarModal = () => {

        setModal(false)

    }

    const cerrarModalError = () => {

        setTitulo('')
        setModalError(false)

    }

    const focusInput = () => {

        const buscador = document.getElementById('buscador')

        buscador.focus()

    }

  return (
    <BuscadorContext.Provider value={{titulo, validarFormulario, handleChangeTitulo, listaPeliculas, obtenerDatosPelicula, datosPelicula, modal, error, generos, cerrarModal, modalError, cerrarModalError, focusInput}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
