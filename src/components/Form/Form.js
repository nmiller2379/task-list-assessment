import React, { useState } from "react";
import IntroText from "../IntroText/IntroText";
import { ADD_TASK } from "../../reducer/taskReducer";
import { TaskContext } from "../../context/taskContext"

const formatDate = (date) => {
  let tempDate = new Date(date);
  let month = tempDate.getMonth() + 1;
  let day = tempDate.getDate();
  let year = tempDate.getFullYear();

  if (month < 9) {
    month = "0" + month;
  }
  if (day < 9) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};

export default function Form({ tasks, addTask, dispatch }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(formatDate(new Date().toLocaleDateString()));

  const handleAddTask = (e) => {
    let newTask;
    e.preventDefault();
    if (name !== "" && description !== "") {
      newTask = {
        id: Date.now(),
        name: name,
        description: description,
        date: date,
      };
    }
    dispatch({ type: ADD_TASK, payload: newTask });
  };

  return (
    <>
      <IntroText
        id="form-intro"
        message="Input a task"
        children="Complete the information about a task you would like to schedule. Click the submit button when complete."
      />
      <form onSubmit={handleAddTask}>
        <div>
          <label>Task name:</label>
          <input
            type="text"
            name="task"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Task description:</label>
          <textarea
            type="text"
            name="task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Task description:</label>
          <input
            type="date"
            name="task"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
