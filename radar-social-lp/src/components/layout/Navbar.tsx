import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Quem Somos', href: '/quem-somos' },
    { title: 'Radar Social', href: 'https://link-para-seu-sistema.com', target: '_blank', isExternal: true },
    { title: 'Blog', href: '/blog' }, 
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link to="/">
          <img 
            src={logo}
            alt="RadarSocial Logo" 
            className="h-15 w-auto" 
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.title}
                href={link.href}
                target={link.target || '_self'}
                rel="noopener noreferrer"
                className="relative text-slate-700 font-medium transition-colors duration-300 hover:text-slate-900 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-brand-yellow after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.title}
              </a>
            ) : (
              <Link
                key={link.title}
                to={link.href}
                className="relative text-slate-700 font-medium transition-colors duration-300 hover:text-slate-900 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-brand-yellow after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.title}
              </Link>
            )
          ))}
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.cinttec.avalchek&pcampaignid=web_share"
          className="hidden md:inline-block bg-brand-yellow text-slate-900 font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-yellow/40"
        >
          Baixar App
        </a>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.title}
                href={link.href}
                target={link.target || '_self'}
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-slate-800 hover:text-brand-orange"
                onClick={handleLinkClick}
              >
                {link.title}
              </a>
            ) : (
              <Link
                key={link.title}
                to={link.href}
                className="text-2xl font-semibold text-slate-800 hover:text-brand-orange"
                onClick={handleLinkClick}
              >
                {link.title}
              </Link>
            )
          ))}
          <a
            href="#download"
            className="mt-4 bg-brand-yellow text-slate-900 font-semibold px-8 py-3 rounded-full shadow-sm"
            onClick={handleLinkClick}
          >
            Baixar App
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;