import useBuscadorContext from '../hooks/useBuscadorContext'

const Error = () => {

    const {error} = useBuscadorContext()

  return (
    <span className='error-message-container'>
      {error}
    </span>
  )
}

export default Error
