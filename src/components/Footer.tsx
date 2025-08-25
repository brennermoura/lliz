import {
  Recycle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo-new-white.png"
                alt="Logo da Lliz"
                className="h-10"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Serviços técnicos de alta qualidade, focados em confiança e
              resultados, com responsabilidade e excelência para a tranquilidade
              do cliente.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <small>Gestão e Destinação de Resíduos Industriais</small>
              </li>
              <li>
                <small>Descarte Ecológico de Lâmpadas</small>
              </li>
              <li>
                <small>Coleta e Tratamento de Efluentes Sanitários</small>
              </li>
              <li>
                <small>Reciclagem e Descarte de Pilhas e Baterias</small>
              </li>
              <li>
                <small>Coleta e Tratamento de Efluentes Industriais</small>
              </li>
              <li>
                <small>Gestão de Resíduos de Serviços de Saúde (RSS)</small>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">21 97890-1932</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">
                  administrativo@lliz.com.br
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-400">
                  R. Bion, 28 - QD 17 LT 43
                  <br />
                  Chácaras Rio-Petrópolis, Duque de Caxias - RJ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Lliz Ambiental. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Certificações
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
