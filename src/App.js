import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Tournaments from "./Components/Tournaments";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Hero />
        
        
        <Tournaments />
      </Router>
    </div>
  );
}

export default App;
