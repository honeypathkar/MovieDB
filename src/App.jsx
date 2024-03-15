import './App.css'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import {
  HashRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Contact from './components/Contact';

function App() {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('mode');
    return storedMode ? storedMode : 'light'; // Default to 'light' if no preference is found
  });

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#0f162b' : 'white';
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    // setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    // Store mode preference in localStorage
    localStorage.setItem('mode', newMode);
  }

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <LoadingBar color="#f11946" height={5} progress={progress}/>
        <Routes>
          <Route exact path='/' element={<Main setProgress={setProgress} mode={mode}/>}/>
          <Route exact path='/movie' element={<Main type="movie" setProgress={setProgress} mode={mode}/>}/>
          <Route exact path='/series' element={<Main type="series" setProgress={setProgress} mode={mode}/>}/>
          <Route exact path='/contact' element={<Contact mode={mode} setProgress={setProgress}/>}/>
        </Routes>
      </Router>
      <div className='container'>
        <hr />
      </div>
    </>
  )
}

export default App;
