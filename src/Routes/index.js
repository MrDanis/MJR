import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Views/home';
function CustomerRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default CustomerRoutes