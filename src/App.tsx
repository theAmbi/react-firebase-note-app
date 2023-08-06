import React from "react";
import Navbar from "./assets/components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Notes from "./assets/components/pages/Dashboard";
import Home from "./assets/components/pages/Home";
import Docs from "./assets/components/pages/Docs";
import Contact from "./assets/components/pages/Contact";
import NotFound from "./assets/components/pages/NotFound";
import Login from "./assets/components/pages/Login";



function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/dashboard' element={<Notes />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
