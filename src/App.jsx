import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [taskList, setTaskList] = useState([])
  let [currentTask, setCurrentTask] = useState("");


  const onTaskChange = (event) => {
    setCurrentTask(event.target.value);
  }

  const onButtonClick = () => {
    if (currentTask != "") {
      setTaskList([...taskList, currentTask])
      setCurrentTask("")
    }
    else {
      alert("Please enter a valid task")
    }


  }

  const onTaskClick = (idx) => {
    setTaskList(taskList.filter((task, i) => { return i != idx }))
  }


  
  return (
    <>
      <div className='container'>
        <div className='header'>
          <input placeholder = "Enter the task" onChange={onTaskChange}  value ={currentTask} type="text" />
          <button onClick={onButtonClick}>Add Task</button>
        </div>
        <ul className='taskList'>
          {taskList.map((task, idx) => {
            if (task=="pink"){
              return (<li className="pink" onClick={() => { onTaskClick(idx,task) }}>{task}</li>)
            }
            else{
              return (<div className='taskCard'>
                <div className='taskCardLeft'>{task}</div>
                <div onClick={() => { onTaskClick(idx,task) }} className='taskCardRight'>Delete</div>
                </div>)
            }
            
          })}
        </ul>
      </div>
    </>
  )
}



export default App
