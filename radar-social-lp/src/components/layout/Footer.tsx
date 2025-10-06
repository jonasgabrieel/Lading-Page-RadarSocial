import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

import logo from '../../assets/images/logo.png'; 
import FapitecLogo from '../../assets/images/fapitecLogo.png';
import googlePlayBadge from '../../assets/images/playLogo.png';

const Footer: React.FC = () => {
  const sitemapLinks = [
    { title: 'Home', href: '/' },
    { title: 'Quem Somos', href: '/quem-somos' },
    { title: 'Radar Social', href: 'https://link-para-seu-sistema.com', isExternal: true },
    { title: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
            <Link to="/">
              <img src={logo} alt="RadarSocial Logo" className="h-16 w-auto mb-4" />
            </Link>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} RadarSocial & UFS. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-sans font-bold text-lg text-brand-purple mb-4">Mapa do Site</h3>
            <ul className="space-y-2">
              {sitemapLinks.map(link => (
                <li key={link.title}>
                  {link.isExternal ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-orange transition-colors">
                      {link.title}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-600 hover:text-brand-orange transition-colors">
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8">
            <div>
              <h3 className="font-sans text-brand-purple font-bold text-lg mb-4">Nossas Redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-gray-500 hover:text-brand-orange transition-colors">
                    <social.Icon size={28} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <a href="#"><img src={googlePlayBadge} alt="Disponível no Google Play" className="h-12 w-auto" /></a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-sans text-brand-purple font-bold text-lg mb-4">Realização</h3>
            <a href="https://fapitec.se.gov.br/" target="_blank" rel="noopener noreferrer">
              <img src={FapitecLogo} alt="Logo da Fapitec" className="h-16 w-auto" />
            </a>
          </div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;