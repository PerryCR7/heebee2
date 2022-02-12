import './App.css';
import Active from './components/Active';
import Done from './components/Done';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Active role={"kitchen"}/>} />
        <Route path="/barista" element={<Active role={"baristo"}/>} />
        <Route path="/done" element={<Done role={"kitchen"}/>}/>
        
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
