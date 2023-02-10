import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const LoginButton = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
    <div>
      {isAuth ? (
        <button onClick={() => login()}>Iniciar Sesión</button>
      ) : (
        <button onClick={() => logout()}>Cerrar Sesión</button>
      )}
    </div>
  );
};

export default LoginButton;
