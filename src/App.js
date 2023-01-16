import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/inicio" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
