import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
