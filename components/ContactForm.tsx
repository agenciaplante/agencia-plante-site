import React, { useState } from 'react';
import { ContactFormState, FormStatus } from '../types';
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.LOADING);
    
    // Simulate API submission
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="bg-plante-gray/50 border border-plante-yellow/30 p-8 rounded-xl text-center backdrop-blur-sm">
        <CheckCircle className="w-16 h-16 text-plante-yellow mx-auto mb-4" />
        <h3 className="text-2xl font-brand font-bold text-white mb-2">Mensagem Recebida!</h3>
        <p className="text-gray-300">Nossa equipe vai analisar sua ideia e entrar em contato em breve.</p>
        <button 
          onClick={() => setStatus(FormStatus.IDLE)}
          className="mt-6 text-plante-yellow hover:text-white underline underline-offset-4 font-semibold transition-colors"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-plante-black border-b-2 border-gray-700 focus:border-plante-yellow text-white px-4 py-3 outline-none transition-all placeholder:text-gray-600 rounded-t-lg focus:bg-white/5"
            placeholder="Seu nome completo"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-semibold text-gray-400 ml-1">Empresa</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-plante-black border-b-2 border-gray-700 focus:border-plante-yellow text-white px-4 py-3 outline-none transition-all placeholder:text-gray-600 rounded-t-lg focus:bg-white/5"
            placeholder="Nome da sua empresa"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1">Email Corporativo</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-plante-black border-b-2 border-gray-700 focus:border-plante-yellow text-white px-4 py-3 outline-none transition-all placeholder:text-gray-600 rounded-t-lg focus:bg-white/5"
          placeholder="voce@suaempresa.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1">Como podemos ajudar?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-plante-black border-b-2 border-gray-700 focus:border-plante-yellow text-white px-4 py-3 outline-none transition-all placeholder:text-gray-600 rounded-t-lg focus:bg-white/5 resize-none"
          placeholder="Conte um pouco sobre seus desafios atuais..."
        />
      </div>

      <button
        type="submit"
        disabled={status === FormStatus.LOADING}
        className="group w-full bg-plante-yellow text-plante-black font-bold font-brand text-lg py-4 px-8 rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(242,235,40,0.5)] flex items-center justify-center gap-2 mt-6"
      >
        {status === FormStatus.LOADING ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <>
            <span>PLANTAR IDEIA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};