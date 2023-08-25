import './App.css';
import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import WelcomePage from "./pages/welcomepage/Welcomepage";
import Template from "./components/template/Template";
import VerticalList from "./components/verticallist/VerticalList";
import ImageGallery from "./components/General/ImageGallery";
import Breadcrumbs from "./components/General/Breadcrumbs";
import BreadcrumbsComponent from "./components/General/BreadcrumbsComponent";


const images = [
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-photo/mount-mont-blanc-covered-snow-reflecting-water-evening-chamonix-france_181624-33408.jpg?size=626&ext=jpg&ga=GA1.1.511160109.1692966321&semt=sph"
  // ... add more image URLs
];

const breadcrumbItems = ['Home', 'Category', 'Subcategory', 'Product'];


function App() {
  return (
    <div>
  <h1>Page Navigation with Breadcrumbs</h1>

     
        <BrowserRouter>
        <BreadcrumbsComponent />
        <Routes>
  
          <Route path="/">
            <Route index element={<WelcomePage/>} />
            <Route path="/image" element={<ImageGallery images={images}/>} />
            <Route path="/image/bread" element= {<Breadcrumbs items={breadcrumbItems} />} />
            <Route path="/image/bread/vertical" element={<VerticalList />} />
           
          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
