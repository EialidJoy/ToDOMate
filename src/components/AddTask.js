export const AddTask = ({taskList, setTaskList, currentTask, setCurrentTask}) => {
    const handleChange = (event) => {
        event.preventDefault();
        if(currentTask.id){
            const taskDate=new Date();
            let updatedTaskList = taskList.map((todoTask) => (
                currentTask.id === todoTask.id ? {
                    id: currentTask.id,
                    name: currentTask.name,
                    time: `${taskDate.toLocaleTimeString()} ${taskDate.toLocaleDateString()}`
                } : todoTask
            ))
            setTaskList(updatedTaskList)
            setCurrentTask({})
        } else {
            const taskDate=new Date();
            const obj={
                id: taskDate.getTime(),
                name: event.target.addTask.value,
                time: `${taskDate.toLocaleTimeString()} ${taskDate.toLocaleDateString()}`
            }
            setTaskList([...taskList,obj])
            setCurrentTask({})
        }
    }
  return (
    <section className="addTask">
        <form onSubmit={handleChange}>
            <input type="text" autoComplete="off" value={currentTask.name || ""} placeholder="Add Task" name="addTask" maxLength="25" onChange={(e) => setCurrentTask({...currentTask, name: e.target.value})}/>
            <button type="submit">{currentTask.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
