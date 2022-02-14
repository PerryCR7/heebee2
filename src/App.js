import './App.css';
import Active from './components/Active';
import Done from './components/Done';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{useState} from 'react';

function App() {
  const [whichrole,setTheRole]=useState("kitchen")
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Active role={"kitchen"} setTheRole={setTheRole}/>} />
        <Route path="/barista" element={<Active role={"baristo"} setTheRole={setTheRole}/>} />
        <Route path="/done" element={<Done role={whichrole}/>}/>
        
      </Routes>
      <div className='conatiner-fluid mt-3'></div>
    </div>
  </Router>
   
  );
}

export default App;
