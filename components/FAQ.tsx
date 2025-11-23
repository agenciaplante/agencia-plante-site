import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "A Plante atende quais tipos de nicho?",
    answer: "Somos especialistas em adaptação. Nossa metodologia de 'raízes fortes' funciona tanto para negócios B2B tradicionais quanto para startups B2C inovadoras. Analisamos o DNA do seu negócio antes de propor qualquer ação."
  },
  {
    question: "Vocês trabalham com contratos pontuais ou mensais?",
    answer: "Trabalhamos com os dois formatos. Projetos de Branding e Identidade Visual costumam ser pontuais (com início, meio e fim), enquanto Gestão de Social Media e Tráfego funcionam melhor com contratos de recorrência mensal (fee mensal)."
  },
  {
    question: "Quanto tempo demora para ver resultados em tráfego?",
    answer: "O tráfego pago gera dados imediatos, mas a maturação das campanhas e otimização do ROI geralmente ocorre entre o 2º e 3º mês. Nosso foco é construir uma máquina de vendas consistente, não apenas cliques baratos."
  },
  {
    question: "O que está incluso na Identidade Visual?",
    answer: "Entregamos muito mais que um logo. Você recebe um Brandbook completo com: variações de marca, paleta de cores, tipografia, padrões gráficos, aplicações (mockups) e guia de uso para redes sociais."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border-b border-white/10 transition-colors duration-300 ${openIndex === index ? 'bg-white/5' : ''}`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
          >
            <span className={`text-lg font-brand font-bold pr-8 transition-colors ${openIndex === index ? 'text-plante-yellow' : 'text-white group-hover:text-plante-yellow'}`}>
              {faq.question}
            </span>
            <div className={`p-1 rounded-full border border-white/20 transition-all ${openIndex === index ? 'bg-plante-yellow text-plante-black rotate-180' : 'text-plante-yellow'}`}>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-gray-400 leading-relaxed text-base pr-8">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};