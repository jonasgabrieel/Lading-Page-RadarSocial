import React from 'react';
import backgroundImage from '../assets/images/efect.png';
import homeImage from '../assets/images/home-image.png';

const Home: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-brand-purple py-20 px-4 overflow-hidden">
      <img
        src={backgroundImage}
        alt="Background abstrato"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" 
      />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center md:text-left z-5">
          <h1 className="font-heading text-5xl md:text-7xl  text-[#FFFFFF] leading-tight mb-6 z-10">
            O que é o <br></br>Radar  Social?
          </h1>
          <p className="font-pt-sans text-lg text-justify md:text-2xl text-[#FFFFFF] mb-10 max-w-xl z-5">
            O Radar Social é um aplicativo desenvolvido a partir da pesquisa acadêmica que criou a escala SRL (Social Readiness Level) – uma metodologia inédita para mapear e avaliar o nível de maturidade de projetos de inovação social. Nascemos do desejo de transformar conhecimento científico em impacto real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://seuapp.com.br/download"
              className=" font-pt-sans bg-brand-orange text-gray-900 text-lg px-8 py-3 rounded-full font-bold z-10 shadow-md hover:bg-[#e0b000] transition-all duration-300 transform hover:scale-105"
            >
              USAR NA WEB
            </a>
            <a
              href="https://seusistema.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-pt-sans bg-brand-yellow border-2 border-[#FFCD00] text-[#000000] text-lg px-8 py-3 rounded-full z-5 font-bold hover:bg-[#FF6801] hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              BAIXAR O APP
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 z-10">
          <img
            src={homeImage}
            alt="Ilustração do Radar Social"
            className="max-w-full h-auto rounded-lg "
            style={{ maxWidth: '600px' }}
          />
        </div>

      </div>
    </div>
  );
};

export default Home;