import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((data) => {
        if (data.status === 200) history.push('/main');
      })
      .catch((err) => console.log('Error from POST request: ', err));
  };

  const handleSignup = () => {
    fetch('http://localhost:5000/user/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log('Response from POST: ', data))
      .catch((err) => console.log('Error from POST request: ', err));
  };

  return (
    <div id="login-container">
      <div className="login-input">
        <TextField
          id="outlined-basic"
          label="Username"
          value={username}
          onChange={handleUserChange}
        />
      </div>
      <div className="login-input">
        <TextField
          id="outlined-basic"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button
        id="login-button"
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disableElevation
      >
        Log In
      </Button>
      <Button
        id="signup-button"
        variant="contained"
        onClick={handleSignup}
        disableElevation
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Login;
