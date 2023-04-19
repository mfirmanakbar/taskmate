import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css';
import { AddTask } from './components/AddTask';
import { useState } from 'react';

function App() {
  const info = "Random";
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} title='Random' info={info}/>
      <Footer />
    </div>
  )
}

export default App;