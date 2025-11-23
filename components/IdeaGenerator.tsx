import React, { useState } from 'react';
import { generateSlogans } from '../services/geminiService';
import { Sparkles, RefreshCw, Copy } from 'lucide-react';

export const IdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [slogans, setSlogans] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGenerate = async () => {
    if (!niche.trim()) return;
    setLoading(true);
    setError(false);
    try {
      const results = await generateSlogans(niche);
      setSlogans(results);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-plante-black/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={80} className="text-plante-yellow" />
      </div>

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 bg-plante-yellow/10 text-plante-yellow text-xs font-bold tracking-wider rounded-full mb-4 border border-plante-yellow/20">
          POWERED BY GEMINI AI
        </span>
        <h3 className="text-2xl md:text-3xl font-brand font-bold text-white mb-2">
          Gerador de <span className="text-plante-yellow italic font-serif">Insights</span>
        </h3>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Sem ideias? Digite o nicho do seu negócio e deixe nossa IA plantar a primeira semente criativa para você.
        </p>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="Ex: Cafeteria, Tech, Moda..."
            className="flex-1 bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:border-plante-yellow outline-none transition-colors placeholder:text-gray-600"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !niche}
            className="bg-white text-plante-black hover:bg-plante-yellow font-bold rounded-lg px-4 md:px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? <RefreshCw className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
          </button>
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4">Algo deu errado. Tente novamente.</p>
        )}

        {slogans.length > 0 && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {slogans.map((slogan, index) => (
              <div 
                key={index}
                className="group/item flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/5 hover:border-plante-yellow/50 p-4 rounded-lg transition-all cursor-pointer"
                onClick={() => handleCopy(slogan)}
              >
                <p className="font-brand text-lg text-gray-200">"{slogan}"</p>
                <Copy className="w-4 h-4 text-gray-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};