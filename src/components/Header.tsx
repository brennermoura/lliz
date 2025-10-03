import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-green-50 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">EW</span>
            </div>
            <span className="text-xl font-bold text-gray-800">EcoWaste</span> */}
            <img
              src="/images/logo-new.png"
              alt="Logo da Lliz"
              className="h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Serviços
            </button>
            {/* <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Sobre
            </button> */}
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Galeria
            </button>
            {/* <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Avaliações
            </button> */}
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span> 21 97890-1932</span>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-green-600 hover:bg-green-700"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                FAQ
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 w-full"
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
