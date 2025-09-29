import React from 'react';

const Home: React.FC = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gray-50 text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Adicione uma imagem ou ícone do seu projeto aqui */}
        {/* <img src="/assets/hero-image.png" alt="RadarSocial" className="mx-auto w-64 h-64 mb-8" /> */}

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Conectando quem ajuda com quem precisa.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Uma plataforma para gerenciar, divulgar e conectar projetos sociais a voluntários, doadores e apoiadores.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://seuapp.com.br/download"
            className="bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Baixar App
          </a>
          <a
            href="#quem-somos"
            className="bg-transparent border border-gray-400 text-gray-800 text-lg px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;