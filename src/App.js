import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  const username = "firman";
  return (
    <>
    <Header/>
    <div>
      <h1>{username}</h1>
      <p className="active">Hello</p>
      </div>
    <Footer/>
    </>
  )
}
