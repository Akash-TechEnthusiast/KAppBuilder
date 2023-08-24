import './App.css';
import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import WelcomePage from "./pages/welcomepage/Welcomepage";



function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<WelcomePage/>} />
           


          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
