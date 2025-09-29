import React from 'react';

// Conteúdo de exemplo para o blog
const blogPosts = [
  {
    title: '5 Maneiras de Mudar o Mundo a Partir de Casa',
    summary: 'Ajudar a sociedade não exige grandes gestos. Descubra como pequenas atitudes podem fazer uma grande diferença...',
    imageUrl: 'https://images.unsplash.com/photo-1543269829-28c049962a98?fit=crop&w=400&q=80',
    link: '#', // Substitua por links reais dos posts
  },
  {
    title: 'Voluntariado e Saúde Mental: Uma Conexão Positiva',
    summary: 'Estudos mostram que o ato de ajudar o próximo não beneficia apenas a comunidade, mas também a nossa própria mente...',
    imageUrl: 'https://images.unsplash.com/photo-1517487881512-4467d301b7a6?fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Conheça o Projeto "Cães de Rua"',
    summary: 'Um exemplo inspirador de como a tecnologia pode ser usada para encontrar lares para animais abandonados...',
    imageUrl: 'https://images.unsplash.com/photo-1582234057088-fe2e22c17430?fit=crop&w=400&q=80',
    link: '#',
  },
];

const Blog: React.FC = () => {
  return (
    <div id="blog" className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Nosso Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <a
                  href={post.link}
                  className="text-primary hover:underline font-medium"
                >
                  Ler Mais &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;