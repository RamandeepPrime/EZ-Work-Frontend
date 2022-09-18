import './App.css';
import React, { useContext } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import States from './Context/Context';

function App() {
  const context = useContext(States);
  const {width} = context;
		
  return (
    <>
      <Navbar />
      <div className="container">
          {width>700 && <Sidebar/>}

        <Main />
        
      </div>
    </>
  );
}

export default App;
