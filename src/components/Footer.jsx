import useBuscadorContext from "../hooks/useBuscadorContext"

const Footer = () => {

    const {focusInput} = useBuscadorContext()

  return (
    <footer>
      <a 
        href="index"
        className='logo'
      >
        Minamón
      </a>
      <p>© 2019-2023 by Minamon.com, Inc</p>
      <button href="buscador" onClick={focusInput}>Ir arriba</button>
    </footer>
  )
}

export default Footer
