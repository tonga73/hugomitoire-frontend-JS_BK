import React, { createContext, useState } from "react";

// creamos el contexto
export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

// creamos un provider que va a tener las funciones para el inicio de sesion y el cierre de sesion
const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth: isAuthenticated, login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
