import './App.css';
import { Headers } from './components/Headers';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { useEffect, useState } from 'react';


function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [currentTask, setCurrentTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  },[taskList])
  return (
    <div className="App">
      <Headers />
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList} 
        currentTask={currentTask} 
        setCurrentTask={setCurrentTask}
      />
      <ShowTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        currentTask={currentTask} 
        setCurrentTask={setCurrentTask}
      />
    </div>
  );
}

export default App;
