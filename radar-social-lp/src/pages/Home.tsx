import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import backgroundImage from '../assets/images/efect.png';
import homeImage from '../assets/images/home-image.png';
import PhoneImage from '../assets/images/phone.png';
import PhoneImage2 from '../assets/images/phone2.png';
import seloODS from '../assets/images/seloODS.png';
import FaleConosco from '../components/faleconosco';

const steps = [
  {
    title: 'Cadastra o seu projeto de Inovação Social',
  },
  {
    title: 'O aplicativo avalia o projeto com a SRL',
  },
  {
    title: 'Gera um relatório completo;',
  },
  {
    title: 'Mostra em um mapa de Inovações Sociais',
  },
  {
    title: 'E ainda oferece insights para crescer.',
  }
];


const Home: React.FC = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-brand-purple pt-32 pb-16 md:py-20 px-4 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background abstrato"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-16">

          <div className="flex-1 text-center md:text-left">
            <h1 data-aos="fade-left" className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6">
              O que é o <br />Radar Social?
            </h1>
            <p data-aos="fade-right" className="font-sans text-lg text-justify md:text-left md:text-xl text-white mb-10 max-w-xl mx-auto md:mx-0">
              O Radar Social é um aplicativo desenvolvido a partir da pesquisa acadêmica que criou a escala SRL (Social Readiness Level) – uma metodologia inédita para mapear e avaliar o nível de maturidade de projetos de inovação social. Nascemos do desejo de transformar conhecimento científico em impacto real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://seuapp.com.br/download"
                className="font-sans bg-brand-orange text-black text-lg px-8 py-3 rounded-full font-bold shadow-md hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/40 transition-all duration-300 transform"
              >
                USAR NA WEB
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.cinttec.avalchek&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans bg-brand-yellow border-2 border-brand-yellow text-black text-lg px-8 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg hover:shadow-brand-yellow/80 transition-all duration-300 transform"
              >
                BAIXAR O APP
              </a>
            </div>
          </div>

          <div data-aos="flip-left" className="flex-1 flex flex-col items-center gap-6">
            <img
              src={homeImage}
              alt="Ilustração do Radar Social"
              className="max-w-full h-auto rounded-lg max-w-[500px]"
            />
            <img
              src={seloODS}
              className="h-28 w-auto"
              alt="Selo dos Objetivos de Desenvolvimento Sustentável"
            />
          </div>
        </div>
      </section>
      <section className="relative bg-black text-white py-20 px-4 overflow-hidden">

        <img
          src={backgroundImage}
          alt="Background abstrato"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-40">

          <div>
            <h1 data-aos="fade-right" className="font-heading text-5xl md:text-7xl text-brand-yellow mb-12">
              Como Funciona?
            </h1>
            <h2 data-aos="fade-left" className="font-pt-sans font-bold text-2xl md:text-3xl text-white mb-8">
              É simples assim:
            </h2>
            <div data-aos="fade-up" className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 size={32} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-pt-sans font-bold text-xl md:text-3xl mb-2">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={PhoneImage}
              alt="Foto do aplicativo em um celular"
              className="rounded-lg shadow-2xl w-200 h-auto"
            />
          </div>
        </div>
      </section>
      <section id="inovacao" className="bg-brand-yellow text-brand-purple py-20 px-4">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-40">

          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div>
                <h2 data-aos="fade-left" className="font-heading text-6xl md:text-7xl leading-none">Radar</h2>
                <h2 data-aos="fade-left" className="font-heading text-6xl md:text-7xl leading-none">Social</h2>
              </div>
              <span data-aos="fade-right" className="font-heading text-6xl md:text-7xl font-bold">é inovação!</span>
            </div>

            <p data-aos="fade-up" className="font-pt-sans text-justify text-xl md:text-2xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Acreditamos que a inovação social é motor de mudança, e que, ao dar visibilidade e mensurar seu impacto, criamos caminhos mais sólidos para transformar realidades. O Radar Social está alinhado aos Objetivos de Desenvolvimento Sustentável:
            </p>

            <div data-aos="flip-left" className="hidden md:flex justify-center md:justify-start items-center py-4">
              <img
                src={seloODS}
                className="h-24 w-auto"
                alt="Selo dos Objetivos de Desenvolvimento Sustentável"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://seuapp.com.br/download"
                className="font-pt-sans bg-brand-orange text-white text-lg px-8 py-3 rounded-full font-bold shadow-md hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/40"
              >
                USAR NA WEB
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.cinttec.avalchek&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pt-sans bg-black border-2 text-brand-yellow text-lg px-8 py-3 rounded-full font-bold hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/40"
              >
                BAIXAR O APP
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={PhoneImage2}
              alt="Pessoas colaborando em um projeto de inovação"
              className="w-160 h-auto"
            />
          </div>
        </div>
      </section>
      <FaleConosco
      />
    </>
  );
};

export default Home;