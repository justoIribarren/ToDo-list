export const TasksActions = ({ handleChange, addTask, handleEmpty, newTask }) => {
  return (
    <>
      <input type='text' placeholder='Ingresa una tarea' onChange={handleChange} value={newTask} />
      {console.log('render en actions')}
      <div className='buttons'>
        <button className='btn-red material-symbols-outlined' onClick={handleEmpty}>delete</button>
        <button className='add material-symbols-outlined' onClick={addTask}>
          add
        </button>
      </div>
    </>
  )
}
