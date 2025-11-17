import { useState, useEffect } from "react";

export default function VozesDaQuebrada() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const frasesPeriferia = [
    {
      texto: "A quebrada é potência!",
      autor: "Mano Brown",
    },
    {
      texto: "Da ponte pra cá é nós que faz",
      autor: "Emicida",
    },
    {
      texto: "A periferia é o centro do mundo",
      autor: "Djonga",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => 
        prev === frasesPeriferia.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = frasesPeriferia[currentQuoteIndex];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          
          <h2 className="text-2xl font-black text-[#7B5BA8] mb-8">
            VOZES DA QUEBRADA
          </h2>

          {/* Quote Minimalista */}
          <div className="mb-6">
            <blockquote className="text-lg text-gray-900 font-medium leading-relaxed mb-3">
              "{currentQuote.texto}"
            </blockquote>
            
            <div className="text-[#7B5BA8]">
              <cite className="text-sm font-semibold">{currentQuote.autor}</cite>
            </div>
          </div>

          {/* Indicadores Simples */}
          <div className="flex justify-center gap-1">
            {frasesPeriferia.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuoteIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentQuoteIndex 
                    ? 'bg-[#7B5BA8]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
