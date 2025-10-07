// src/components/FaleConosco.tsx

import React from 'react';
import { useForm} from '@formspree/react';
import FaleImg from '../assets/images/fale.png'; 

const FaleConosco: React.FC = () => {
  const [state, handleSubmit] = useForm("mldplqqj"); 

  if (state.succeeded) {
    return (
      <section id="fale-conosco-success" className="bg-brand-purple py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-4">Obrigado pelo contato!</h2>
          <p className="font-sans text-xl text-white">Sua mensagem foi enviada com sucesso. Retornaremos em breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="fale-conosco" className="bg-brand-purple text-gray-800 py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="font-sans text-xl text-brand-orange mb-4">
            FALE CONOSCO
          </h2>
          <p className="font-heading text-5xl md:text-6xl text-white mb-8">
            Tire suas dúvidas!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nome"
              className="w-full bg-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-shadow"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-shadow"
            />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Telefone (opcional)"
              className="w-full bg-white px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-shadow"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Mensagem"
              rows={5}
              className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-shadow"
            ></textarea>

            <button
              type="submit"
              disabled={state.submitting}
              className="font-sans bg-brand-orange text-black text-lg px-8 py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105 self-start disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <img
            src={FaleImg}
            alt="Pessoas em uma reunião de trabalho"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;