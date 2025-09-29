import React from 'react';

const QuemSomos: React.FC = () => {
  return (
    <div id="quem-somos" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O que é o RadarSocial?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          O Radar Social é um aplicativo desenvolvido a partir da pesquisa acadêmica que criou a escala SRL (Social Readiness Level) – uma metodologia inédita para mapear e avaliar o nível de maturidade de projetos de inovação social. Nascemos do desejo detransformar conhecimento científico em impacto real.
        </p>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contato
          </h3>
          <p className="text-gray-600">
            Tem alguma dúvida ou sugestão? Entre em contato conosco!
          </p>
          <a href="mailto:contato@radarsocial.com" className="text-primary hover:underline font-medium mt-2 block">
            contato@radarsocial.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;