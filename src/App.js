import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from 'axios';
import Navbar from "./components/Navbar";
import './App.css';
import Movies from "./components/Movies";
import FooterSection from "./components/FooterSection";

function App() {
  
  return (
    <>
      <Navbar/>
      
      <Home/>       
      <FooterSection/>
    </>
  );
}

export default App;
