import { createContext, useContext } from "react";

const AuthContext = createContext({
    useContextAPI: false,
    username: "",
    loggedIn: false,
    logingIn: false,
    setUseContextAPI: () => { },
    setLoggedIn: () => { },
    setLogingIn: () => { },
    setUsername: () => { }
});

export default AuthContext;

