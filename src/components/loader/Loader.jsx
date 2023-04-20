import { useState } from 'react'
import { RaceBy } from '@uiball/loaders'

export const Loader = ({ getUser }) => {
  const [user, setUser] = useState('')
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
    setTimeout(() => {
      setShow(false)
      window.localStorage.setItem('userName', user)
      getUser(user)
    }, 2700)
  }

  const handleChange = (e) => setUser(e.target.value)

  return (
    <div className='start'>
      {show && (
        <div className='loader'>
          <RaceBy
            size={80}
            lineWeight={5}
            speed={1.4}
            color='white'
          />
        </div>
      )}
      {!show && (
        <div className='start__user'>
          <h2>Bienvenido!</h2>
          <form className='start__user--form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Ingresa tu nombre' onChange={handleChange} />
            <button className='material-symbols-outlined'> done </button>
          </form>
        </div>
      )}
    </div>
  )
}
