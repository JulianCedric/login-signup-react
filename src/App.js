import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Tasks from './Tasks';
import Clock from './Clock';

const USERS = [
  {
    id: 1,
    firstName: 'Lil',
    lastName: 'JJ',
    username: 'user1',
    password: 'pass1'
  }
];

const App = () => {
  const [ users, setUsers ] = useState(USERS);

  const handleInitialize = message => {
    console.log('[ TEST ] message:', message);
  };

  // const handleRenderTasksBtn = () => {
  //   console.log('tasks:', tasks);
  //   console.log('TASKS:', TASKS);
  // };

  const handleLogin = e => {
    e.preventDefault();
    console.log('Login event:', e);
    console.log('e.target[0].value:', e.target[0].value);

    if (e.target[0].value == 'user1' && e.target[1].value == 'pass1') {
      console.log('user logged in');
    } else {
      alert('The username or password you entered is incorrect. Please try again.');
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[0].focus();
    };
  };

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;