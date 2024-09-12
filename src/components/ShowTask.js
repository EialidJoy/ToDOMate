export const ShowTask = ({taskList, setTaskList, currentTask, setCurrentTask}) => {
    const handleUpdate = (id) => {
        setCurrentTask(taskList.find(task => task.id === id))
    }
    const handleTrash = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id))
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">ToDo</span>
                <span className="count">{taskList.length}</span>
            </div>
            <button onClick={() => setTaskList([])} className="clearAll" type="submit">Clear All</button>
        </div>
        <ul>
            { taskList.map((task) => (
                <li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i onClick={() => handleUpdate(task.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleTrash(task.id)} className="bi bi-trash"></i>
                </li>
            ))}
        </ul>        
    </section>
  )
}
