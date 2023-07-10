import React, { useContext } from 'react'
import Form from '../../components/Form/Form'
import { TaskContext } from '../../context/taskContext';
// import taskReducer from "../../reducer/taskReducer"; 
// import { initialState } from "../../initialState/initialState"



export default function TaskForm() {
  const { state, dispatch } = useContext(TaskContext)
  return (
    <>
      <Form tasks={state.tasks} dispatch={dispatch} />
    </>
  );
}
