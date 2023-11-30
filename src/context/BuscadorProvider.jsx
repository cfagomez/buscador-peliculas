import axios from "axios"
import { createContext, useState } from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [titulo, setTitulo] = useState('')
    const [listaPeliculas, setListaPeliculas] = useState([])

    const buscarPelicula = async (e) => {

        e.preventDefault()

        setTitulo('')

        try {

            const url = `https://www.omdbapi.com/?apikey=2e149a4c&s=${titulo}`
            const {data} = await axios(url)
            console.log(data.Search)
            setListaPeliculas(data.Search)

        } catch (error) {

            console.log(error)

        }

    }

    const handleChangeTitulo = (e) => {

        setTitulo(e.target.value)

    }

  return (
    <BuscadorContext.Provider value={{titulo, buscarPelicula, handleChangeTitulo, listaPeliculas}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
