import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    // Carrega o script do Elfsight
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Intervalo para remover o branding
    const interval = setInterval(() => {
      const el = document.querySelector(
        'a[href*="elfsight.com/instagram-feed-instashow"]'
      );
      if (el) {
        el.remove();
        clearInterval(interval);
      }
    }, 500);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="gallery" className="pt-20">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Acompanhe nosso dia a dia, projetos e iniciativas sustentáveis
            diretamente do nosso Instagram.
          </p>
        </div>

        {/* Div onde o widget do Elfsight será injetado */}
        <div
          className="elfsight-app-0d2466ee-34a4-4ff7-98ee-5acf38497957"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
