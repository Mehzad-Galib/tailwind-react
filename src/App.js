import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Tournaments from './Components/Tournaments';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero />
      <Tournaments />
    </div>
  );
}

export default App;
