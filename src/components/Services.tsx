import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PackageSearch,
  Truck,
  Factory,
  BatteryCharging,
  Lightbulb,
  Droplet,
  FlaskConical,
  Hospital,
  Home,
  Building,
  Recycle,
  Shield,
  Clock,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: PackageSearch,
    title: "Gestão e Destinação de Resíduos Industriais",
    description:
      "Coletamos e damos a destinação correta para resíduos perigosos e não perigosos. Sua empresa em conformidade com as normas, protegendo o meio ambiente.",
    features: [
      "Coleta de resíduos perigosos e não perigosos",
      "Transporte seguro com veículos homologados",
      "Gestão documental e emissão de laudos",
      "Destinação final em conformidade ambiental",
    ],
    price: "Consulte-nos",
  },
  {
    icon: Lightbulb,
    title: "Descarte Ecológico de Lâmpadas",
    description:
      "Descarte seguro de lâmpadas fluorescentes e de sódio que contêm mercúrio. Prevenimos a contaminação ambiental e garantimos o cumprimento das normas.",
    features: [
      "Coleta de lâmpadas fluorescentes e de vapor de sódio",
      "Manejo e transporte de resíduos perigosos",
      "Descontaminação e separação de materiais",
      "Destinação para reciclagem ou descarte seguro",
    ],
    price: "Consulte-nos",
  },
  {
    icon: Droplet,
    title: "Coleta e Tratamento de Efluentes Sanitários",
    description:
      "Serviço completo para coleta, transporte e tratamento de efluentes (esgoto). Solução ágil e segura para indústrias, empresas e condomínios.",
    features: [
      "Coleta de esgoto e água servida",
      "Caminhões equipados com bomba de sucção a vácuo",
      "Transporte para estações de tratamento",
      "Atendimento a empresas, condomínios e indústrias",
    ],
    price: "Consulte-nos",
  },
  {
    icon: BatteryCharging,
    title: "Reciclagem e Descarte de Pilhas e Baterias",
    description:
      "Serviço especializado para o descarte de pilhas e baterias. Coletamos e garantimos a destinação final, evitando a contaminação e preservando o meio ambiente.",
    features: [
      "Coleta de pilhas e baterias de diversos tipos",
      "Transporte seguro de resíduos perigosos",
      "Encaminhamento para reciclagem especializada",
      "Redução do impacto ambiental",
    ],
    price: "Consulte-nos",
  },
  {
    icon: FlaskConical,
    title: "Coleta e Tratamento de Efluentes Industriais",
    description:
      "Manejo seguro de efluentes líquidos industriais e perigosos. Nossa equipe realiza a coleta, transporte e tratamento para proteger o meio ambiente e sua empresa.",
    features: [
      "Coleta de efluentes líquidos industriais",
      "Transporte para tratamento e disposição final",
      "Caminhões equipados para resíduos químicos",
      "Cumprimento das normas ambientais (CONAMA e CETESB)",
    ],
    price: "Consulte-nos",
  },
  {
    icon: Hospital,
    title: "Gestão de Resíduos de Serviços de Saúde (RSS)",
    description:
      "Gerenciamento completo de resíduos de saúde (RSS). Seguimos as normas de biossegurança e ambientais para a coleta e destinação seguras de resíduos hospitalares.",
    features: [
      "Coleta de resíduos hospitalares (RSS)",
      "Transporte em veículos homologados pela ANVISA",
      "Destinação final em total conformidade",
      "Treinamento para manejo e armazenamento de resíduos",
    ],
    price: "Consulte-nos",
  },
];

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em gerenciamento de resíduos, desde a
            coleta até o tratamento final, sempre com foco na sustentabilidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className=" border-0 shadow-xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 ">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t">
                  <div className="text-lg font-semibold text-green-600 mb-3 text-center">
                    {service.price}
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => scrollToSection("contact")}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-green-50 rounded-2xl py-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a Lliz?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Garantimos conformidade com as normas nacionais e internacionais,
              gestão eficiente de riscos e soluções técnicas que asseguram
              competitividade, credibilidade e sustentabilidade para a sua
              organização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Pontualidade</h4>
              <p className="text-sm text-gray-600">
                Coletas sempre no horário combinado
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Certificações
              </h4>
              <p className="text-sm text-gray-600">
                Todas as licenças ambientais em dia
              </p>
            </div>
            <div className="text-center">
              <Recycle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Sustentabilidade
              </h4>
              <p className="text-sm text-gray-600">Processos 100% ecológicos</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Suporte Especializado
              </h4>
              <p className="text-sm text-gray-600">
                Equipe qualificada para cada demanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
