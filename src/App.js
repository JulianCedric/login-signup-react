import './App.css';
import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [ users, setUsers ] = useState(null);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;