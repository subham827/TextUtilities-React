
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import React, { useState } from 'react'



function App() {
  const [ mode, setMode ] = useState('light');
  const [ text, setText ] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      
      
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = '#343a40';
    }
    else{
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor = '#f8f9fa';
    }
      
    }
  
  return (
 <>
  

 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text}/> 
 <div className="container my-3" >
 
  

 <Forms heading="Enter a text" mode={mode} toggleMode={toggleMode}></Forms>
  
   </div>

 </>
  );
}

export default App;
