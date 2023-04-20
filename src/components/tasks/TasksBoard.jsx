import { useState } from 'react'
import { TasksList } from './TasksList'
import { TasksActions } from './TasksActions'

export const TasksBoard = () => {
  const [tasks, setTask] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (e) => setNewTask(e.target.value)
  const handleEmpty = () => {
    if (tasks.length === 0) return
    setTask([])
  }
  const handleDelete = (id) => {
    const update = tasks.filter(task => id !== task.id)
    setTask(update)
  }
  const handleCheck = (id) => {
    const update = tasks.map(task => {
      if (id === task.id) return { ...task, completed: !task.completed }
      return task
    })
    setTask(update)
  }

  const addTask = (e) => {
    e.preventDefault()
    if (newTask === '') return
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1
    const taskToAdd = {
      id: lastId + 1,
      content: newTask,
      completed: false
    }
    setTask([...tasks, taskToAdd])
    setNewTask('')
  }

  return (
    <>
      <section className='main__actions'>
        <TasksActions handleChange={handleChange} addTask={addTask} handleEmpty={handleEmpty} newTask={newTask} />
      </section>

      <section className='main__list'>
        <TasksList tasks={tasks} handleDelete={handleDelete} handleCheck={handleCheck} />
      </section>
    </>
  )
}
