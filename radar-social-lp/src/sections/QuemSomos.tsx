import React from 'react';
import { Mail, Instagram, Linkedin, GraduationCap } from 'lucide-react';

import antonioImg from '../assets/images/team/antonio.jpg';
import mariaImg from '../assets/images/team/maria.jpg';
import camilaImg from '../assets/images/team/camila.jpg';
import luanImg from '../assets/images/team/luan.jpg';
import bernardoImg from '../assets/images/team/bernardo.jpg';
import rodrigoImg from '../assets/images/team/rodrigo.jpg';
import leonardoImg from '../assets/images/team/leonardo.jpg';
import jonasImg from '../assets/images/team/jonas.jpg';

const teamMembers = [
  {
    name: 'Antonio Martins de Oliveira Júnior',
    role: 'Prof. Dr. do Magistério Superior',
    imageUrl: antonioImg,
    socials: { email: 'amartins@academico.ufs.br', instagram: 'https://instagram.com/amartins.junior', linkedin: 'https://linkedin.com/in/antonio-martins-o-0310a216', lattes: 'http://lattes.cnpq.br/6812943821298890' },
  },
  {
    name: 'Maria dos Prazeres Santos Costa',
    role: 'Gestora de Empreendedorismo Inovador',
    imageUrl: mariaImg,
    socials: { email: 'mariadpcs@gmail.com', instagram: 'https://instagram.com/mariacosta.23', linkedin: 'https://linkedin.com/in/maria-costa-94ab02358', lattes: 'http://lattes.cnpq.br/3170179642916181' },
  },
  {
    name: 'Camila Torres Santos',
    role: 'Gestora de Governança',
    imageUrl: camilaImg,
    socials: { email: 'camila.torresaju@gmail.com', instagram: 'https://instagram.com/camilasanres', linkedin: 'https://linkedin.com/in/camila-torres-59256a346', lattes: 'http://lattes.cnpq.br/7444288783958452' },
  },
  {
    name: 'Luan Kyrtinem de Oliveira Gomes',
    role: 'Desenvolvedor de Software',
    imageUrl: luanImg,
    socials: { email: 'kyrtinem@gmail.com', instagram: 'https://instagram.com/luan_kyrtinem', linkedin: 'https://linkedin.com/in/luankyrtinem', lattes: 'http://lattes.cnpq.br/6816499096595685' },
  },
  {
    name: 'Rodrigo da Silva Santos',
    role: 'Coordenador de Comunicação',
    imageUrl: rodrigoImg,
    socials: { email: 'digodsign@gmail.com', instagram: 'https://instagram.com/digosays', linkedin: 'https://linkedin.com/in/digodsg', lattes: 'https://lattes.cnpq.br/6190852082800733' },
  },
  {
    name: 'Leonardo Oliveira Villalva',
    role: 'Desenvolvedor de Software',
    imageUrl: leonardoImg,
    socials: { email: 'leonardo.villalva.contato@gmail.com', instagram: 'https://instagram.com/leovillalva', linkedin: 'https://linkedin.com/in/leovillalva', lattes: 'http://lattes.cnpq.br/2765036226147131' },
  },
  {
    name: 'Jonas Gabriel Dos Santos Ribeiro',
    role: 'Desenvolvedor de Software',
    imageUrl: jonasImg,
    socials: { email: 'jonasgabrieel@gmail.com', instagram: 'https://instagram.com/jhonn_john', linkedin: 'https://linkedin.com/in/jonas-gabriel-993a371b7', lattes: 'http://lattes.cnpq.br/3754147836639068' },
  },
  { 
    name: 'Vicent Bernardo Alves Santos',
    role: 'Prof. Msc. em Design',
    imageUrl: bernardoImg,
    socials: {email: 'vicentbernardoalves@gmail.com', instagram: 'https://instagram.com/vicenttbernardo', linkedin: 'https://linkedin.com/in/vicentbernardo/', lattes: 'http://lattes.cnpq.br/2132383905871497',},
  },
];

const QuemSomos: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 px-4 bg-brand-orange">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-heading text-5xl md:text-7xl text-white mb-2">
            Quem Somos
          </h2>
          <p className=" font-pt-sans text-xl md:text-3xl text-brand-purple font-semibold">
            Equipe Radar Social
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
          <h3 className="font-pt-sans text-3xl font-bold text-brand-purple mb-6">
            Sobre o RADAR SOCIAL
          </h3>
          <p className="font-pt-sans text-lg  text-xl text-white leading-relaxed text-justify">
            O Radar Social é uma ferramenta estratégica, desenvolvida e registrada como software pela Universidade Federal de Sergipe, projetada para mapear e valorar o ecossistema de inovação social. A plataforma funciona em duas frentes conectadas: um aplicativo móvel, que serve como porta de entrada para inovadores cadastrarem suas iniciativas e, através de um questionário dinâmico baseado na escala de maturidade Social Readiness Level (SRL), receberem um diagnóstico instantâneo sobre o nível de prontidão do seu projeto e um direcionamento claro para os próximos passos; e uma plataforma web, que agrega todos os diagnósticos individuais para criar um mapa vivo e inteligente do ecossistema. Nesta visão macro, gestores, investidores e inovadores podem usar filtros para analisar o cenário por setor, região e nível de maturidade, identificando gargalos, oportunidades de investimento e potenciais parceiros, transformando dados individuais em inteligência coletiva e servindo como uma verdadeira sala de comando para o desenvolvimento de políticas públicas e estratégias de investimento mais eficazes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-24 bg-brand-purple-light"></div>
              <img
                src={member.imageUrl}
                alt={`Foto de ${member.name}`}
                className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-30 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="pt-20 p-6 text-center">
                <h4 className="font-sans font-bold text-xl text-brand-purple">
                  {member.name}
                </h4>
                <p className="font-sans text-brand-orange font-semibold text-sm mb-4">
                  {member.role}
                </p>
                <hr className="my-4 border-t border-gray-200" />
                <div className="flex justify-center space-x-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.socials.email && (
                    <a href={`mailto:${member.socials.email}`} title="Email" className="text-gray-500 hover:text-brand-orange transition-colors">
                      <Mail size={24} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-500 hover:text-brand-orange transition-colors">
                      <Instagram size={24} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 hover:text-brand-orange transition-colors">
                      <Linkedin size={24} />
                    </a>
                  )}
                  {member.socials.lattes && (
                    <a href={member.socials.lattes} target="_blank" rel="noopener noreferrer" title="Currículo Lattes" className="text-gray-500 hover:text-brand-orange transition-colors">
                      <GraduationCap size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;