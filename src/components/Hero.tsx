import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Shield, Truck } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero.webp')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-9">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight pt-8">
                Gerenciamento
                <span className="text-green-400"> Sustentável </span> de
                Resíduos
              </h1>
              {/* <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
                Coleta, tratamento e destinação adequada de resíduos.
              </p> */}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-t border-white/20 pt-8">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Recycle className="w-10 h-10 text-green-400" />
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    100% Sustentável
                  </h3>
                  <p className="text-gray-300">Processos ecológicos</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Shield className="w-10 h-10 text-green-400" />
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    Certificado
                  </h3>
                  <p className="text-gray-300">Licenças ambientais</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Truck className="w-10 h-10 text-green-400" />
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    Coleta Eficiente
                  </h3>
                  <p className="text-gray-300">Frota especializada</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center border-t border-white/20 pt-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 md:py-6 text-lg font-semibold shadow-xl"
                onClick={() => scrollToSection("contact")}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-green-700 hover:bg-white/90 hover:text-green-900 px-10 py-7 md:py-6 text-lg font-semibold backdrop-blur-sm"
                onClick={() => scrollToSection("services")}
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-0 mt-16 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 font-medium">
                  Clientes Atendidos
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  98%
                </div>
                <div className="text-gray-300 font-medium">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  15+
                </div>
                <div className="text-gray-300 font-medium">
                  Anos Experiência
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
