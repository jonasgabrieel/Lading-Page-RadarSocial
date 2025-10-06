import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react'; 
import efect from '../assets/images/efect.png';
import phone from '../assets/images/phone.png';

import blogImage from '../assets/images/blogImg.png';


const blogPosts = [
  {
    title: '5 Maneiras de Mudar o Mundo a Partir de Casa',
    summary: 'Ajudar a sociedade não exige grandes gestos. Descubra como pequenas atitudes podem fazer uma grande diferença...',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYPlxSH9nltvqGDTiPZt0X2vAPM_HmsjL9Q&s',
    link: '#',
  },

  {
    title: 'Inovação Social: Desafios e Oportunidades no Século XXI',
    summary: 'Explorando como novas abordagens e tecnologias podem resolver problemas sociais complexos...',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'O Poder da Colaboração em Projetos Comunitários',
    summary: 'Descubra a importância da união e do trabalho em equipe para o sucesso de iniciativas locais...',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjrF8FxPBFQ5Jb5hPU_YIuQ8DQawyJXTI_A&s',
    link: '#',
  },
];

const Blog: React.FC = () => {
  return (
    <>
      <section className="bg-brand-yellow py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

          <div className="flex-1 text-center md:text-left space-y-6">

            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <span className="bg-white text-brand-orange font-semibold px-4 py-2 rounded-full shadow-md">
                Tecnologia
              </span>
              <span className="bg-brand-orange text-brand-purple font-semibold px-4 py-2 rounded-full shadow-md">
                Inovação
              </span>
              <span className="bg-brand-purple text-white font-semibold px-4 py-2 rounded-full shadow-md ">
                Sociedade
              </span>
            </div>

            <h1 className="font-heading text-6xl md:text-7xl text-white leading-tight mt-30">
              Blog
            </h1>
            <p className="font-pt-sans text-xl md:text-3xl  text-brand-purple max-w-lg md:max-w-md mx-auto md:mx-0">
              Veja artigos, notícias e atualizações sobre o Radar Social e ações de Inovação Social na UFS.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-30">
            <img
              src={blogImage}
              alt="Pessoas lendo e colaborando"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </section>

      <section id="blog-posts" className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">

          <div className="mb-12 flex justify-center">
            <div className="flex gap-4 w-full max-w-xl mb-18">
              {/* Barra de Pesquisa */}
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="text"
                  placeholder="Buscar por matérias, autores ou tags..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
              {/* Ícone de Filtro */}
              <button className="flex-shrink-0 bg-white p-3 border border-gray-300 rounded-lg shadow-sm hover:bg-brand-yellow transition-colors">
                <Filter className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="font-sans text-gray-600 mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <Link
                    to={post.link}
                    className="font-sans text-brand-purple hover:underline font-medium transition-colors"
                  >
                    Leia a matéria &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button
              className="bg-brand-purple text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Ver mais matérias
            </button>
          </div>
        </div>
      </section>
      <section id="download" className="bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Imagem de fundo com efeito de textura */}
      <img
        src={efect}
        alt="Background abstrato"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60" 
      />

      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Esquerda: Título, Texto e Botões */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start">
          <h2 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Baixe Agora!
          </h2>
          <p className="font-pt-sans text-lg text-xl md:text-2xl text-white leading-relaxed max-w-md mb-18">
            Nascemos do desejo de transformar conhecimento científico em impacto real!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://seuapp.com.br/webapp" // Link para a versão web
              className="font-sans bg-brand-orange text-white text-lg px-8 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              USAR NA WEB
            </a>
            <a
              href="https://seuapp.com.br/download" // Link para baixar o app
              className="font-sans bg-brand-yellow text-brand-orange text-lg px-8 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              BAIXAR O APP
            </a>
          </div>
        </div>

          <div className="relative min-h-[400px] mt-12 md:mt-0">
          <img 
            src={phone} 
            alt="Mockup do aplicativo Radar Social"
            className="absolute bottom-0 translate-y-72  h-[800px] w-auto"
          />
        </div>

      </div>
    </section>
    </>
  );
};

export default Blog;