

import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function NavBar({ loggedIn, username, handleLogin, handleLogout }) {
  return (
    <div id="navbar">
      <h1>Auth System </h1>
      
        {
          loggedIn ?
            <div class="auth-box">
              <p>Welcome, {username}!</p>
              <button onClick={handleLogout}>
                Logout
              </button>
            </div>
            :
            <div class="auth-box">
            <button onClick={handleLogin}>
              Login
            </button>
            </div>
        }
      
    </div>
  );
}

export default NavBar;

export function NavBarWithContext() {

  const { loggedIn, username, setLoggedIn,setLogingIn } = useContext(AuthContext);

  const handleLogin = () => {
    setLogingIn(true);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div id="navbar">
      <h1>Auth System </h1>
   
        {
          loggedIn ?
          <div class="auth-box">
              <p>Welcome, {username}!</p>
              <button onClick={handleLogout}>
                Logout

              </button>
            </div>
            :
            <div class="auth-box">
            <button onClick={handleLogin}>
              Login
            </button>
            </div>
        }
    </div>
  )

}