//@ts-check

/*
-------------------------- NICE STATE MANAGEMENT --------------------------
*/
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, pass) => { }
});

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // Do not run in the component, else you will have a nice endless-loop
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedLoggedIn === '1') {
            setIsLoggedIn(snapshot => true);
        }
        // With empty array, useEffect runs only the first time
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(_ => false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(_ => true);
    }
    // @ts-ignore
    return <AuthContext.Provider value={
        {
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }
    }>{props.children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };