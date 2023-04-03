import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const info = "Random";

  return (
    <div className="App">
      <Header />
      <TaskList title='Random' info={info}/>
      <Footer />
    </div>
  )
}

export default App;