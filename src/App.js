import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>


    </>
  );
}

export default App;