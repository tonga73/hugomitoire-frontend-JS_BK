import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";

import { Button } from "@mui/material";

import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";

import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";

import Admin from "./scenes/Admin";
import Book from "./scenes/Book";
import Books from "./scenes/Books";
import Landing from "./scenes/Landing";
import Login from "./scenes/Login";
import NotFound from "./scenes/NotFound";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <AuthContextProvider>
        {isAuth ? <TopBar /> : null}
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/libros" element={<Books />} />
              <Route path="/libro/:id" element={<Book />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
        {isAuth ? <Footer /> : null}
      </AuthContextProvider>
    </>
  );
}

App.contextTypes = {
  test: PropTypes.string,
};

export default App;
