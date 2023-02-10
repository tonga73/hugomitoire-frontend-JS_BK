import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";

import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";

import { Book } from "./scenes/Book";
import { Books } from "./scenes/Books";
import { Landing } from "./scenes/Landing";
import { NotFound } from "./scenes/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/libros" element={<Books />} />
        <Route path="/libros/:id" element={<Book />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/libros" element={<Books />} />
        <Route path="/libros/:name" element={<Book />} />
        <Route path="/media" element={<MediaPage />}>
          <Route index element={<MediaSections />} />
          <Route path="audio-video" element={<Media />} />
          <Route path="fan-art" element={<FanArt />} />
        </Route>
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
