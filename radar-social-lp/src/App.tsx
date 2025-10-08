import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; 
import { Outlet } from 'react-router-dom';


import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,   
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;