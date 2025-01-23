import React, { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Login({ setLogingIn, setLoggedIn, setUsername }) {


    const [inputUserName, setInputUserName] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputUserName) {
            setUsername(inputUserName);
            setLoggedIn(true);
            setLogingIn(false);
        }
        else {
            alert("Please enter a username");
        }
    }

    return (
        <div class="login">
            <h1>Login</h1>
            <form>

                <label for="username">Username</label>
                <input type="text" placeholder="Username" name="username" id="username" value={inputUserName} onChange={(e) => setInputUserName(e.target.value)} />
                <button type="submit" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    )

}


export function LoginWithContext() {

    const [inputUserName, setInputUserName] = useState("");
    
    const { setLogingIn, setLoggedIn, setUsername } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputUserName) {
            setUsername(inputUserName);
            setLoggedIn(true);
            setLogingIn(false);
        }
        else {
            alert("Please enter a username");
        }
    }

    return (
        <div class="login">
            <h1>Login</h1>
            <form>

                <label for="username">Username</label>
                <input type="text" placeholder="Username" name="username" id="username" value={inputUserName} onChange={(e) => setInputUserName(e.target.value)} />
                <button type="submit" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}