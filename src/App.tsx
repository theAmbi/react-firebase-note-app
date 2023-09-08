import React from "react";
import Navbar from "./assets/components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Notes from "./assets/components/pages/Dashboard";
import Home from "./assets/components/pages/Home";
import Docs from "./assets/components/pages/Docs";
import Contact from "./assets/components/pages/Contact";
import NotFound from "./assets/components/pages/NotFound";
import Login from "./assets/components/pages/Login";
import PrivacyPolicy from "./assets/components/pages/PrivacyPolicy";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./assets/components/Footer";
import { useLocation } from 'react-router-dom'



function App() {
  const location = useLocation();
  const isDashboardRoute = location.pathname === '/dashboard';

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/dashboard' element={<Notes />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy id={0} title={""} description={""} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isDashboardRoute && <Footer />}

    </div>
  )
}

export default App;
