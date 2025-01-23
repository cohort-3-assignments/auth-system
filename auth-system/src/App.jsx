import { useState } from 'react'
import './App.css'
import NavBar, { NavBarWithContext } from './components/NavBar'
import Login, { LoginWithContext } from './components/Login';
import { useEffect } from 'react';

import AuthContext from './context/AuthContext';
import { useContext } from 'react';
import { use } from 'react';

function App() {

  const [useContextAPI, setUseContextAPI] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [logingIn, setLogingIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setLoggedIn(false);
    setUsername("");
    
  }, [useContextAPI])


  return (
    <div className="App">
      {
        useContextAPI ?
          <AuthContext.Provider value={{ useContextAPI, username, loggedIn, logingIn, setUseContextAPI, setLoggedIn, setLogingIn, setUsername }}>
            <AppWithContextAPI />
          </AuthContext.Provider>
          :
          <AppWithoutContextAPI
            useContextAPI={useContextAPI}
            setUseContextAPI={setUseContextAPI}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            logingIn={logingIn}
            setLogingIn={setLogingIn}
            username={username}
            setUsername={setUsername}
          />
      }
    </div>
  );
}

function AppWithoutContextAPI({ useContextAPI, setUseContextAPI, loggedIn, setLoggedIn, logingIn, setLogingIn, username, setUsername }) {

  const handleLogin = () => {
    setLogingIn(true);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  useEffect(() => {

  }, [loggedIn])

  return (
    <div>
      <NavBar loggedIn={loggedIn} username={username} handleLogin={handleLogin} handleLogout={handleLogout} />
      <ToggleBar useContextAPI={useContextAPI} setUseContextAPI={setUseContextAPI} />
      {
        logingIn ?
          <Login setLogingIn={setLogingIn} setLoggedIn={setLoggedIn} setUsername={setUsername} />
          : null
      }
    </div>
  )
}

function AppWithContextAPI() {

  const { logingIn } = useContext(AuthContext);

  return (
    <div>
      <NavBarWithContext />
      <ToggleBarwithContext />
      {
        logingIn ?
          <LoginWithContext />
          : null
      }
    </div>
  )

}

function ToggleBar({ useContextAPI, setUseContextAPI }) {
  return (
    <div id="toggle-bar">
      <input type="checkbox" id="useContextAPI" checked={useContextAPI} onChange={() => setUseContextAPI(!useContextAPI)} />
      <label htmlFor="useContextAPI"> Use Context API : {useContextAPI ? 'on' : 'off'} </label>
    </div>
  )
}


function ToggleBarwithContext() {

  const { useContextAPI, setUseContextAPI } = useContext(AuthContext);

  return (
    <div id="toggle-bar">
      <input type="checkbox" id="useContextAPI" checked={useContextAPI} onChange={() => setUseContextAPI(!useContextAPI)} />
      <label htmlFor="useContextAPI"> Use Context API : {useContextAPI ? 'on' : 'off'} </label>
    </div>
  )

}


export default App;
