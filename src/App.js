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
    username: 'admin1',
    password: 'admin1'
  }
];

const App = () => {
  const [ users, setUsers ] = useState(USERS);
  const [ toggleLogin, setToggleLogin ] = useState(true);

  const handleLogin = (e, username, password) => {
    e.preventDefault();

    console.log('e:', e);
    console.log('username:', username);
    console.log('password:', password);

    if (e.target[0].value == 'user1' && e.target[1].value == 'pass1') {
      console.log('user logged in');
      setToggleLogin(prevState => {
        return !prevState;
      });
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
          { toggleLogin ? 
              <Route path='/login' element={<Login onLogin={handleLogin}/>}/>
            :
              <Route path='/tasks' element={<Tasks/>}/>
            }
          
          <Route path='/signup' element={<Signup/>}/>
          
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;