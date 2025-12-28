import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutOurCenter from './Pages/AboutOurCenter';
import Area from './Pages/Area';
import WhyChoose from './Pages/WhyChoose';
import Testimonia from './Pages/Testimonia';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Research from './Pages/Research';
import LogIn from './Pages/LogIn';
import SignIn from './Pages/SignIn';  
import CreateAccount from './Pages/CreateAccount';
import ForgotPassWord from './Pages/forgotPassWord';
    

//  component that contains all landing page sections
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

function MainContent() {
  const location = useLocation();
  const isPrograms = location.pathname === '/programs';

  return (
    <main className={`min-h-screen ${!isPrograms ? 'bg-black' : ''}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/research' element={<About />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  
  //   PAGE  THAT DOESN'T NEED NAV, MAIN & FOOTER
  const pagesWithoutLayout = [
    '/LogIn',
    '/SignIn',
    '/CreateAccount',
    '/forgotPassWord'
    
  ];
  
  // Check if current page should NOT have layout
  const isPageWithoutLayout = pagesWithoutLayout.includes(location.pathname);

  // If it's a page without layout, render ONLY that page
  if (isPageWithoutLayout) {
    return (
      <Routes>
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
        <Route path='/forgotPassWord' element={<ForgotPassWord/>}/>
        
      </Routes>
    );
  }

  // Otherwise, render pages WITH Navbar, MainContent, and Footer
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;