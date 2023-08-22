import './App.css';
import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Home/>} />
           


          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
