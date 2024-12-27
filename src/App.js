import React from "react";
import Converter from "./components/pages/converter";
import RandomTunes from "./components/pages/randomTunes"
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import "../src/App.css"
import Contact from "./components/contact";
import Home from "./components/pages/home";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="containerApp d-flex flex-column min-vh-100">
        {/* Place your Navbar component outside of the Routes */}
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
          <Route exact path="/" 
          element={<Home />} />

          <Route path="/home"
          element={<Home />} />  
          <Route path="/contact" 
          element={<Contact />} />
          <Route path="/tunes" 
          element={<RandomTunes />} />
 

            <Route exact path="/converter" 
            element={<Converter />} />


            <Route exact path="/" 
            element={<RandomTunes />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
