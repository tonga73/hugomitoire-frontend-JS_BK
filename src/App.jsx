import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";

import { Button } from "@mui/material";

import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import { ProtectedRoute } from "./utils/routeGuard";

import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";

import { Admin } from "./scenes/Admin";
import { Book } from "./scenes/Book";
import { Books } from "./scenes/Books";
import { Landing } from "./scenes/Landing";
import { Login } from "./scenes/Login";
import { NotFound } from "./scenes/NotFound";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <AuthContextProvider>
        <TopBar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Landing />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/book" element={<Book />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

App.contextTypes = {
  test: PropTypes.string,
};

export default App;
