import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista de links para facilitar a manutenção
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Quem Somos', href: '#quem-somos' },
    { title: 'Radar Social', href: 'https://link-para-seu-sistema.com', target: '_blank' }, 
    { title: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-800">
          RadarSocial
        </a>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.target || '_self'}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Botão Baixar App (Desktop) */}
        <a
          href="#download"
          className="hidden md:inline-block bg-brand-yellow text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
        >
          Baixar App
        </a>

        {/* Botão de Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.target || '_self'}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                className="text-lg text-gray-700 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-[#FFCD00] text-gray-900 font-semibold px-8 py-3 rounded-full"
            >
              Baixar App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;