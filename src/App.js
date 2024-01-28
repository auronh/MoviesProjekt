import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Filmat from "./pages/Filmat"
import Nav from "./components/Nav"


function App() {
    
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/filmat" element={<Filmat/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
