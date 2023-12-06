import React, { useState } from 'react';
import Login from './Login';
import { Button } from 'semantic-ui-react';
import Signup from './Signup';
import Clock from './Clock';
// import Tasks from './Tasks';

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
    <div className="App">
      {/* <Tasks props={tasks}/> */}
      <Clock />
      <Signup />
      <Login handleLogin={handleLogin} />
      <Button 
        color='blue'
        onClick={() => handleInitialize('Login rendered.')}
      >
        Initialize
      </Button>
      {/* <Button
        color='orange'
        onClick={handleRenderTasksBtn('user clicked render tasks btn')}
      >
        Render Tasks
      </Button> */}
      <div>
        <h1>here</h1>
      </div>
    </div>
  );
};

export default App;