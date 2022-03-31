import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/details" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
