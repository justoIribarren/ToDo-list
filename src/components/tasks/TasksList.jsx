export const TasksList = ({ tasks, handleDelete, handleCheck }) => {
  return (
    <>
      {tasks.map((task) => (
        <div className={`main__list--task ${task.completed ? 'completed' : ''}`} key={task.id}>
          {console.log('render en list')}
          <p>{task.content}</p>
          <div className='button'>
            <button className='btn material-symbols-outlined' onClick={() => handleCheck(task.id)}>
              {task.completed ? 'check_box' : 'check_box_outline_blank'}
            </button>
            <button className='btn-red material-symbols-outlined' onClick={() => handleDelete(task.id)}>
              delete
            </button>
          </div>
        </div>))}
    </>
  )
}
