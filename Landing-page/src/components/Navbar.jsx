import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';  
import Logo from '../assets/Logo.png';

const NavLinks = [
  {
    "id": 1,
    "title": "Home",
    "link": "/"  
  },
  {
    "id": 2,
    "title": "About us",
    "link": "/about"  
  },
  {
    "id": 3,
    "title": "Program",
    "link": "/programs"  
  },
  {
    "id": 4,
    "title": "Research",
    "link": "/research" 
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <>
      <header className="fixed z-50 w-full pt-4 px-3">
        <nav className='w-full container mx-auto bg-white py-3 px-4 md:py-4 md:px-6  flex flex-row justify-between items-center rounded-xl shadow-sm'>
          
          {/* Logo Section */}
          <Link to="/" className='flex items-center justify-start gap-2 cursor-pointer'>
            <img src="https://cefpads-frontend.vercel.app/assets/Logo-B7HpFSaX.png" alt="Logo" className="Logo w-8 md:w-10"/>
            <h1 className="text-black font-bold text-sm md:text-base">CEFPADs</h1>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className='hidden md:flex'>
            {
              NavLinks.map((link) => {
                const isActive = location.pathname === link.link;
                return (
                  <Link 
                    key={link.id}
                    to={link.link} 
                    className={`mx-3 xl:mx-4 text-gray-700 hover:text-teal-800 transition-colors font-medium text-sm xl:text-base pb-1 ${
                      isActive ? 'border-b-2 border-teal-800' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                )
              })
            }
          </div>
          
          {/* Desktop Enroll Button */}
          <div className='hidden md:block'>
            <button className="bg-teal-800 hover:bg-teal-600 px-3 xl:px-4 py-2 text-white rounded-lg flex flex-row gap-1 font-medium cursor-pointer transition-colors text-sm xl:text-base">
              Enroll now 
              <span className="scale-75 ml-1 bg-white text-black rounded w-6 h-7 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Hamburger Menu Button (Mobile/Tablet - 768px and below) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none'
            aria-label="Toggle menu"
          >
            <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
          
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden container mx-auto bg-white rounded-xl shadow-lg mt-2 py-4 px-4 animate-fadeIn'>
            <div className='flex flex-col space-y-4'>
              {
                NavLinks.map((link) => {
                  const isActive = location.pathname === link.link;
                  return (
                    <Link 
                      key={link.id}
                      to={link.link} 
                      className={`text-gray-700 hover:text-teal-800 transition-colors font-medium py-2 border-b border-gray-100 last:border-b-0 ${
                        isActive ? 'text-teal-800 font-semibold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )
                })
              }
              
              {/* Mobile Enroll Button */}
              <button 
                className="bg-teal-800 hover:bg-teal-600 px-4 py-3 text-white rounded-lg flex flex-row gap-2 items-center justify-center font-medium cursor-pointer transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Enroll now 
                <span className="bg-white text-black rounded w-6 h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Navbar;