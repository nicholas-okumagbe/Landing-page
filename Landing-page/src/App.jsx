import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutOurCenter from './Pages/AboutOurCenter';
import Area from './Pages/Area';
import WhyChoose from './Pages/WhyChoose';
import Testimonia from './Pages/Testimonia';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Research from './Pages/Research';
    

//  component that contains all  landing page sections
function Home() {
  return (
    <>
      <Hero />
      <AboutOurCenter />
      <Area />
      <WhyChoose />
      <Testimonia />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="bg-black min-h-screen">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/research' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;