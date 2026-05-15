import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"
import TEST from "./components/TEST.jsx";
import {Outlet, Route, Routes} from "react-router-dom";
import {Course} from "./components/Course.jsx";
import {NavBar} from "./components/NavBar.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {


  return (
    <>
         <NavBar/>
            <Outlet/>
         <Footer/>
    </>
  )
}

export default App
