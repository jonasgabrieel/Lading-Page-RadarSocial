import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo e Copyright */}
        <div className="mb-4 md:mb-0">
          <p className="text-xl font-bold mb-2">RadarSocial</p>
          <p className="text-sm text-gray-400">
            © 2025 RadarSocial. Todos os direitos reservados.
          </p>
        </div>
        
        {/* Links ou Contato */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Termos de Uso
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;