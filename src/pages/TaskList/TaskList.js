import React, { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';


export default function TaskList() {
  const { state, dispatch } = useContext(TaskContext)
  const handleDone = () => {
    console.log(`Done clicked: ${state.tasks.id}`)
  }
  return (
    <div>
      {state.tasks.map((task) => {
        return (<div key={task.id}>
          <h3>Task: {task.name}</h3> 
          <p><b>Task description:</b> {task.description}</p>
          <p><b>Due date:</b> {task.date}</p>
          <button onClick={handleDone}>Done</button>
          <hr />
        </div>)})}
    </div>
  )
}
