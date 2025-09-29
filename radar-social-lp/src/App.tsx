import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from    './sections/Home';
import QuemSomos from './sections/QuemSomos';
import Blog from './sections/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="quem-somos">
          <QuemSomos />
        </section>
        <section id="blog">
          <Blog />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;