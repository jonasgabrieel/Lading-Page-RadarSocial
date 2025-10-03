import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin} from 'lucide-react';

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
    <footer className="bg-white text-white border-t border-gray-200">
      <div className="container mx-auto py-5">
        {/* Grid principal com 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4 translate-y-10">
            <Link to="/">
              <img src={logo} alt="RadarSocial Logo" className="h-28 w-auto" />
            </Link>

          </div>

          <div>
            <h3 className="font-pt-sans font-bold text-xl md:text-2xl text-brand-purple text-lg mb-4">Mapa do Site</h3>
            <ul className="space-y-2">
              {sitemapLinks.map(link => (
                <li key={link.title}>
                  {link.isExternal ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-brand-purple transition-colors">
                      {link.title}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-brand-purple hover:text-brand-orange transition-colors">
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-pt-sans text-brand-purple text-xl md:text-2xl font-bold text-lg mb-4">Nossas Redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-brand-purple hover:text-brand-yellow transition-colors">
                    <social.Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start gap-4">
                <a href="#"><img src={googlePlayBadge} alt="Disponível no Google Play" className="h-20 w-auto" /></a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3 className="font-sans text-brand-purple  text-xl md:text-2xl font-bold text-lg mb-4">Realização</h3>
              <a href="https://ufs.br" target="_blank" rel="noopener noreferrer">
                <img src={FapitecLogo} alt="Logo da Universidade Federal de Sergipe" className="h-20 w-auto translate-y-14" />
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Barra de Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 px-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} RadarSocial & UFS. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;