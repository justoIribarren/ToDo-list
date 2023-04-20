import { TasksBoard } from './components/tasks/TasksBoard'
import { Loader } from './components/loader/Loader'
import { Header } from './components/tasks/Header'
import { useEffect, useState } from 'react'

function App () {
  const [user, setUser] = useState('')
  const getUser = (us) => setUser(us)
  useEffect(() => setUser(window.localStorage.getItem('userName')), [])

  return (
    <>
      {!user && <Loader getUser={getUser} />}
      <header>
        <></>
      </header>
      <main className='main'>
        <section className='main__header'>
          <Header user={user} />
        </section>
        <TasksBoard user={user} />
      </main>
    </>
  )
}

export default App
