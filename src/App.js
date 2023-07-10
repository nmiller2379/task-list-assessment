import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from "./pages/TaskList/TaskList"
import TaskForm from './pages/TaskForm/TaskForm';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Error from './pages/Error/Error';
import { TaskContext } from './context/taskContext';
import { useReducer } from 'react';
import { initialState } from './initialState/initialState';
import taskReducer from "./reducer/taskReducer"; 

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TaskContext.Provider value={{state, dispatch}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<TaskForm />} />
            <Route path="list" element={<TaskList />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </TaskContext.Provider>
      </Router>
    </div>
  );
}

export default App;
