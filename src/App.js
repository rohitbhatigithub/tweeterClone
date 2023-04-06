import './App.css';
import Home from "./Home"
import Login from "./Login";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [ check , setCheck] = useState({ email:"" , password:""})
console.log(check)
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home check={check}/>}/>
        <Route path="/Login" element={<Login  setCheck={setCheck} check={check}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
