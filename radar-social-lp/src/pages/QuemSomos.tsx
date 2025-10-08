import React from 'react';
import { Mail, Instagram, Linkedin, GraduationCap } from 'lucide-react';

// --- IMAGENS ---
import QuemSomosImg from '../assets/images/quemsomos.png';
import foguete from '../assets/images/fogueteIMG.png';
import PhoneImage2 from '../assets/images/phone2.png';
import seloODS from '../assets/images/seloODS.png';

// Imagens da Equipe
import antonioImg from '../assets/images/team/antonio.jpg';
import mariaImg from '../assets/images/team/maria.jpg';
import camilaImg from '../assets/images/team/camila.jpg';
import luanImg from '../assets/images/team/luan.jpg';
import vicentImg from '../assets/images/team/bernardo.jpg';
import rodrigoImg from '../assets/images/team/rodrigo.jpg';
import leonardoImg from '../assets/images/team/leonardo.jpg';
import jonasImg from '../assets/images/team/jonas.jpg';


const teamMembers = [
  {
    name: 'Antonio Martins',
    role: 'Doutor em Engenharia Química',
    imageUrl: antonioImg,
    socials: { email: 'amartins@academico.ufs.br', instagram: 'https://instagram.com/amartins.junior', linkedin: 'https://linkedin.com/in/antonio-martins-o-0310a216', lattes: 'http://lattes.cnpq.br/6812943821298890' },
  },
  {
    name: 'Maria Costa',
    role: 'Me. em Ciência Propriedade Intelectual',
    imageUrl: mariaImg,
    socials: { email: 'mariadpcs@gmail.com', instagram: 'https://instagram.com/mariacosta.23', linkedin: 'https://linkedin.com/in/maria-costa-94ab02358', lattes: 'http://lattes.cnpq.br/3170179642916181' },
  },
  {
    name: 'Camila Torres ',
    role: 'Internacionalista',
    imageUrl: camilaImg,
    socials: { email: 'camila.torresaju@gmail.com', instagram: 'https://instagram.com/camilasanres', linkedin: 'https://linkedin.com/in/camila-torres-59256a346', lattes: 'http://lattes.cnpq.br/7444288783958452' },
  },
  {
    name: 'Luan Kyrtinem',
    role: 'Desenvolvedor de Software',
    imageUrl: luanImg,
    socials: { email: 'kyrtinem@gmail.com', instagram: 'https://instagram.com/luan_kyrtinem', linkedin: 'https://linkedin.com/in/luankyrtinem', lattes: 'http://lattes.cnpq.br/6816499096595685' },
  },
  {
    name: 'Vicent Bernardo ',
    role: 'Me. em Designer Gráfico',
    imageUrl: vicentImg,
    socials: { email: 'vicentbernardoalves@gmail.com', instagram: 'https://instagram.com/vicenttbernardo', linkedin: 'https://linkedin.com/in/vicentbernardo/', lattes: 'http://lattes.cnpq.br/2132383905871497', },
  },
  {
    name: 'Rodrigo da Silva ',
    role: 'Designer Gráfico',
    imageUrl: rodrigoImg,
    socials: { email: 'digodsign@gmail.com', instagram: 'https://instagram.com/digosays', linkedin: 'https://linkedin.com/in/digodsg', lattes: 'https://lattes.cnpq.br/6190852082800733' },
  },
  {
    name: 'Leonardo Villalva',
    role: 'Desenvolvedor de Software',
    imageUrl: leonardoImg,
    socials: { email: 'leonardo.villalva.contato@gmail.com', instagram: 'https://instagram.com/leovillalva', linkedin: 'https://linkedin.com/in/leovillalva', lattes: 'http://lattes.cnpq.br/2765036226147131' },
  },
  {
    name: 'Jonas Gabriel',
    role: 'Desenvolvedor de Software',
    imageUrl: jonasImg,
    socials: { email: 'jonasgabrieel@gmail.com', instagram: 'https://instagram.com/jhonn_john', linkedin: 'https://linkedin.com/in/jonas-gabriel-993a371b7', lattes: 'http://lattes.cnpq.br/3754147836639068' },
  },
];


const QuemSomos: React.FC = () => {
  return (
    <>
      <section id="sobre" className="bg-brand-orange text-white py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">


          <div className="text-center md:text-left">
            <h2 className="font-pt-sans text-5xl md:text-8xl mb-4">
              A inovação não se
              <br />
              <span className="font-heading text-5xl md:text-7xl">FAZ SOZINHA</span>
            </h2>
            <p className="font-pt-sans text-lg text-brand-purple md:text-2xl leading-relaxed">
              Conheça o Radar Social e quem foi responsável por torná-lo possível!
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={QuemSomosImg}
              alt="Ilustração sobre inovação social"
              className="rounded-lg w-full max-w-md md:max-w-full h-auto"
            />
          </div>

        </div>
      </section>
      <section className="bg-white text-gray-800 py-20 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-12 w-full">
            <span className="font-heading text-4xl md:text-6xl text-black">
              Sobre o
            </span>
            <div className="text-black">
              <h2 className="font-heading text-5xl md:text-7xl leading-none">Radar</h2>
              <h2 className="font-heading text-5xl md:text-7xl leading-none">Social</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="font-pt-sans text-lg md:text-xl text-black leading-relaxed text-justify">
              <p>
                O <strong>Radar Social</strong> é uma ferramenta estratégica, desenvolvida e registrada como software pela Universidade Federal de Sergipe, projetada para mapear e valorar o ecossistema de inovação social. A plataforma funciona em duas frentes conectadas: um aplicativo móvel, que serve como porta de entrada para inovadores cadastrarem suas iniciativas e, através de um questionário dinâmico baseado na escala de maturidade <strong>Social Readiness Level (SRL)</strong>, receberem um diagnóstico instantâneo sobre o nível de prontidão do seu projeto e um direcionamento claro para os próximos passos; e uma plataforma web, que agrega todos os diagnósticos individuais para criar um mapa vivo e inteligente do ecossistema.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={foguete}
                alt="Equipe do Radar Social em colaboração"
                className="rounded-lg w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="inovacao" className="bg-brand-yellow text-brand-purple py-20 px-4"> 
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div>
                <h2 className="font-heading text-6xl md:text-7xl leading-none">Radar</h2>
                <h2 className="font-heading text-6xl md:text-7xl leading-none">Social</h2>
              </div>
              <span className="font-heading text-6xl md:text-7xl font-bold">é inovação!</span>
            </div>

            <p className="font-pt-sans text-justify text-xl md:text-2xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Acreditamos que a inovação social é motor de mudança, e que, ao dar visibilidade e mensurar seu impacto, criamos caminhos mais sólidos para transformar realidades. O Radar Social está alinhado aos Objetivos de Desenvolvimento Sustentável:
            </p>

            <div className="hidden md:flex justify-center md:justify-start items-center py-4">
              <img
                src={seloODS}
                className="h-28 w-auto" 
                alt="Selo dos Objetivos de Desenvolvimento Sustentável"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://seuapp.com.br/download"
                className="font-sans bg-brand-orange text-white text-lg px-8 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105" // Corrigido 'font-pt-sans'
              >
                USAR NA WEB
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.cinttec.avalchek&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans bg-black border-2 text-brand-yellow text-lg px-8 py-3 rounded-full font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 transform hover:scale-105" // Corrigido 'font-pt-sans'
              >
                BAIXAR O APP
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={PhoneImage2}
              alt="Pessoas colaborando em um projeto de inovação"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="equipe" className="py-24 px-4 bg-white">
  <div className="container mx-auto">
    
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mb-16">
      <span className="font-heading text-4xl md:text-6xl text-black">
        QUEM FAZ O
      </span>
      <div className="text-black">
        <h2 className="font-heading text-5xl md:text-6xl leading-none">Radar</h2>
        <h2 className="font-heading text-5xl md:text-6xl leading-none">Social</h2>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member) => (
        <div 
          key={member.name} 
          className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          <div className="h-24 bg-brand-purple"></div>
          
          <img
            src={member.imageUrl}
            alt={`Foto de ${member.name}`}
            className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
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
                <a href={`mailto:${member.socials.email}`} title="Email" className="text-gray-500 hover:text-black transition-colors">
                  <Mail size={24} />
                </a>
              )}
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-500 hover:text-brand-yellow transition-colors">
                  <Instagram size={24} />
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 hover:text-brand-purple transition-colors">
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

    </>
  );
};

export default QuemSomos;