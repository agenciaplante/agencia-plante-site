import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { ContactForm } from './components/ContactForm';
import { IdeaGenerator } from './components/IdeaGenerator';
import { Marquee } from './components/Marquee';
import { FAQ } from './components/FAQ';
import { Menu, X, Instagram, Linkedin, ArrowRight, MessageCircle, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Direct link to the Google Drive image
  const LOGO_URL = 'https://drive.google.com/uc?export=view&id=1uFOcnJ5KQQtn7iWTdWeq_GftTBcZQ-2B';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-plante-black text-white selection:bg-plante-yellow selection:text-plante-black overflow-x-hidden font-sans relative">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-0 opacity-40"></div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-plante-black text-sm font-bold px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale com a gente
        </span>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 md:bottom-28 md:right-10 z-[55] bg-white/10 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/20 transition-all duration-500 hover:bg-plante-yellow hover:text-plante-black ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-plante-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
          
          {/* Mobile Menu Toggle (Left on Mobile) */}
          <button 
            className="md:hidden text-plante-yellow z-50 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Logo (Centered on Mobile, Left on Desktop) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:translate-x-0 md:translate-y-0">
            <Logo 
              src={LOGO_URL} 
              variant="yellow" 
              showText={false} 
              className="h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer" 
              onClick={scrollToTop}
            />
          </div>

          {/* Empty spacer for mobile balance */}
          <div className="w-8 md:hidden"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Serviços', 'Manifesto', 'FAQ', 'Contato'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-semibold tracking-wider hover:text-plante-yellow transition-colors uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-plante-yellow transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-plante-yellow text-plante-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors uppercase text-sm tracking-wide shadow-[0_0_15px_rgba(245,243,49,0.3)] hover:shadow-[0_0_25px_rgba(245,243,49,0.5)]"
            >
              Orçamento
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-plante-black z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
          {['Serviços', 'Manifesto', 'FAQ', 'Contato'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-3xl font-brand font-bold hover:text-plante-yellow transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-plante-yellow/30 bg-plante-yellow/5">
                <span className="w-2 h-2 rounded-full bg-plante-yellow animate-pulse"></span>
                <span className="text-plante-yellow text-xs font-bold tracking-widest uppercase">Agência Criativa Full-Service</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-brand font-bold leading-[1.05] text-white">
                Ideias que <br/>
                <span className="text-plante-yellow relative font-script text-6xl md:text-8xl block mt-2 transform -rotate-2 origin-left">
                  movimentam
                </span>
                <span className="block mt-2">o seu negócio.</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                Transformamos marcas através de estratégia, design e tecnologia. Não apenas criamos campanhas, cultivamos resultados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-plante-yellow text-plante-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-plante-yellow/20 flex items-center justify-center gap-2"
                >
                  Falar com especialista <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('serviços')}
                  className="px-8 py-4 rounded-lg font-bold text-lg border border-white/20 hover:border-plante-yellow hover:text-plante-yellow transition-colors"
                >
                  Conhecer serviços
                </button>
              </div>
            </div>

            {/* Interactive/Visual Component */}
            <div className="relative animate-float animate-in slide-in-from-right duration-700 fade-in">
              {/* Background paint splash effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-plante-yellow/10 blur-[80px] rounded-full opacity-40"></div>
              <IdeaGenerator />
            </div>

          </div>
        </div>
      </header>

      {/* Marquee Strip */}
      <Marquee items={['Estratégia', 'Branding', 'Design', 'Performance', 'Social Media', 'Tecnologia']} />

      {/* Social Proof / Trust Indicators */}
      <section className="py-16 bg-[#181818] border-b border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 font-semibold tracking-widest text-sm mb-8 uppercase">Marcas que já plantaram conosco</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos */}
             {['TechFlow', 'UrbanCo', 'GreenLife', 'Nexus', 'Stark'].map((brand, i) => (
                <div key={i} className="text-2xl font-brand font-bold text-white hover:text-plante-yellow cursor-default">{brand}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 px-6 relative bg-plante-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-plante-yellow font-script text-3xl mb-2 block">O que fazemos</span>
              <h2 className="text-4xl md:text-5xl font-brand font-bold text-white">Soluções Estratégicas para <br/>crescimento acelerado</h2>
            </div>
            <button onClick={() => scrollToSection('contato')} className="hidden md:flex items-center gap-2 text-gray-400 hover:text-plante-yellow transition-colors font-bold uppercase tracking-wider text-sm">
              Ver todos os serviços <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                title: 'Branding & Identidade', 
                desc: 'Criação de marcas memoráveis. Do logo ao tom de voz, construímos a personalidade da sua empresa.',
                tags: ['Naming', 'Logo', 'Brandbook']
              },
              { 
                title: 'Social Media & Content', 
                desc: 'Estratégias de conteúdo que engajam e constroem comunidade. Transformamos seguidores em fãs.',
                tags: ['Gestão', 'Criação', 'Copywriting']
              },
              { 
                title: 'Tráfego & Performance', 
                desc: 'Gestão de anúncios focada em ROI. O adubo certo para acelerar o crescimento das suas vendas.',
                tags: ['Google Ads', 'Meta Ads', 'Analytics']
              },
              { 
                title: 'Web Experience', 
                desc: 'Sites institucionais e Landing Pages de alta conversão. O terreno fértil para capturar seus leads.',
                tags: ['UI/UX', 'Dev', 'SEO']
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-[#2a2a2a] p-8 md:p-12 overflow-hidden hover:bg-plante-yellow transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:z-10 rounded-lg border border-white/5 hover:border-transparent">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-2xl font-bold font-brand text-white group-hover:text-plante-black transition-colors">{service.title}</h3>
                   <ArrowRight className="text-plante-yellow group-hover:text-plante-black transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-plante-black/80 transition-colors font-medium mb-8 text-lg">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 text-xs font-bold uppercase tracking-wide border border-white/10 rounded-full text-gray-400 group-hover:border-plante-black/20 group-hover:text-plante-black/70 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section (Circles from PDF) */}
      <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
         <div className="container mx-auto px-6 flex flex-col items-center">
            <h2 className="text-2xl font-brand font-bold text-gray-400 mb-16 uppercase tracking-widest text-center">Nosso DNA</h2>
            
            {/* Desktop Horizontal View / Mobile Vertical Stack */}
            <div className="relative flex flex-col md:flex-row items-center justify-center -space-y-6 md:-space-y-0 md:-space-x-8">
              {['ANTENADOS', 'INQUIETOS', 'CRIATIVOS', 'PRAGMÁTICOS', 'COLABORATIVOS'].map((value, index) => (
                <div 
                  key={index}
                  className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-plante-yellow flex items-center justify-center bg-plante-black/80 backdrop-blur-sm z-10 transition-all duration-300 hover:scale-110 hover:bg-plante-yellow hover:border-plante-yellow hover:z-20 group cursor-default shadow-xl"
                >
                  <span className="font-brand font-bold text-base md:text-xl text-white tracking-wider group-hover:text-plante-black transition-colors">{value}</span>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 bg-plante-yellow text-plante-black relative overflow-hidden">
        {/* Paper tear top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-[#1a1a1a]"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-plante-black text-plante-yellow text-xs font-bold uppercase tracking-widest mb-6">Sobre nós</div>
                <h2 className="text-4xl md:text-6xl font-brand font-bold mb-8 leading-tight">
                  O verdadeiro potencial do seu negócio está nas <span className="underline decoration-4 decoration-plante-black/20 underline-offset-4">raízes</span>.
                </h2>
                <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
                  <p>
                    Muitas agências focam apenas na colheita (vendas), mas esquecem do preparo do solo (branding).
                  </p>
                  <p>
                    Na Plante, equilibramos criatividade e dados. Somos pragmáticos para gerar caixa, mas inquietos para construir legado.
                  </p>
                </div>
             </div>
             <div className="flex-1 flex justify-center relative">
                {/* Visual Element */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-plante-black rounded-full animate-float opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                     {/* Logo na seção manifesto */}
                    <Logo src={LOGO_URL} variant="yellow" showText={false} className="w-full h-auto object-contain" />
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white text-plante-black px-4 py-2 font-bold font-brand shadow-lg rotate-12">
                    Desde 2020
                  </div>
                  <div className="absolute -bottom-8 -left-4 bg-white text-plante-black px-4 py-2 font-bold font-brand shadow-lg -rotate-6">
                    +150 Projetos
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Paper tear bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-plante-black"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-plante-black relative">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-16">
              <span className="text-plante-yellow font-script text-2xl md:text-3xl mb-2 block">Tira-dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-white">Perguntas Frequentes</h2>
           </div>
           <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6 relative bg-[#151515] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-brand font-bold text-white leading-none">
                Vamos <br/>
                <span className="text-plante-yellow font-script">plantar</span> <br/>
                o futuro?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Preencha o formulário para agendar uma consultoria gratuita de diagnóstico da sua marca.
              </p>
              
              <div className="space-y-6 pt-8 border-t border-white/10">
                <a 
                  href="https://www.instagram.com/agenciaplanteideias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-plante-yellow text-plante-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Instagram</span>
                    <span className="font-bold text-lg font-brand">@agenciaplanteideias</span>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/company/agenciaplante" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-plante-beige text-plante-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">LinkedIn</span>
                    <span className="font-bold text-lg font-brand">/company/agenciaplante</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-plante-black border border-white/10 p-8 md:p-10 relative rounded-2xl shadow-2xl">
               {/* Tape effect */}
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-plante-yellow/80 rotate-1 shadow-md z-10"></div>
               <div className="absolute inset-0 bg-noise opacity-10 rounded-2xl pointer-events-none"></div>
               <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-plante-black text-center md:text-left">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo src={LOGO_URL} variant="yellow" showText={false} className="h-12 w-auto object-contain" />
            <p className="text-gray-500 text-sm max-w-xs mt-2">
              Belo Horizonte, MG <br/>
              contato@agenciaplante.com.br
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <nav className="flex gap-6 text-sm font-bold text-white uppercase tracking-wider">
              <button onClick={() => scrollToSection('serviços')} className="hover:text-plante-yellow transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('manifesto')} className="hover:text-plante-yellow transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-plante-yellow transition-colors">FAQ</button>
            </nav>
            <div className="h-px w-full md:w-px md:h-8 bg-white/20"></div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/agenciaplanteideias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-plante-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/agenciaplante" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-plante-yellow transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 max-w-6xl mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
           <p>
             © {new Date().getFullYear()} Agência Plante. Todos os direitos reservados.
           </p>
           <div className="flex gap-4">
             <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;