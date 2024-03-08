import './App.css'
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

function App() {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Router>
    <Navbar toggleMode={toggleMode} mode={mode} />
    <LoadingBar color="#f11946" height={5} progress={progress}/>
    <Routes>
    <Route exact path='/' element={<Main setProgress={setProgress} mode={mode}/>} />
    <Route exact path='/series' element={<Main type="series" setProgress={setProgress} mode={mode}/>}/>
    </Routes>
    </Router>
    <div className='container'>
    <hr />
    <Footer mode={mode}/>
    </div>
    
    </>
  )
}

export default App
