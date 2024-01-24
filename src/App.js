import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';


const App=()=> {
  return (
    <div className="App">
      <Navbar/>
      <div className='bg-secondary text-white display-1 p-5 fw-bolder'>
        The Generics
      </div>
      <div className='fw-bold fs-1 my-3'>
        Music
      </div>
    </div>
  );
}

export default App;
