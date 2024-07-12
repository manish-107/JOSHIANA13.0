// src/App.jsx
import React from 'react';
import './App.css';
import StarField from './components/StarField';
import Nav from './components/Nav';

function App() {
  return (
    <div >
      <div className="starfield-container">
        <StarField />
      </div>
      <Nav />
      {/* Other components can go here */}
    </div>
  );
}

export default App;
