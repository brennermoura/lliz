import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Quais tipos de resíduos vocês coletam?",
    answer:
      "Coletamos todos os tipos de resíduos: domiciliares, comerciais, industriais, hospitalares e perigosos. Cada tipo tem seu protocolo específico de coleta e tratamento, sempre seguindo as normas ambientais vigentes.",
  },
  {
    question: "Vocês fornecem os containers?",
    answer:
      "Sim! Fornecemos todos os tipos de containers necessários: desde pequenos recipientes para residências até grandes containers para indústrias. Todos são higienizados regularmente e adequados para cada tipo de resíduo.",
  },
  {
    question: "Vocês têm todas as licenças necessárias?",
    answer:
      "Sim, possuímos todas as licenças ambientais, certificações ISO e autorizações necessárias para operação. Mantemos toda documentação atualizada e disponível para consulta dos nossos clientes.",
  },
  {
    question: "Qual o prazo para começar o serviço?",
    answer:
      "Após a contratação, iniciamos o serviço em até 48 horas. Para casos urgentes ou de grande volume, podemos mobilizar nossa equipe em até 24 horas.",
  },
  {
    question: "Vocês atendem em quais regiões?",
    answer:
      "Nosso atendimento cobre todo o estado do Rio de Janeiro. Para locais mais distantes, consultamos viabilidade e custos de deslocamento.",
  },
  {
    question: "E se eu precisar cancelar ou alterar o serviço?",
    answer:
      "Oferecemos total flexibilidade. Você pode alterar frequências, pausar temporariamente ou cancelar o serviço com aviso prévio de 30 dias, sem multas ou taxas extras.",
  },
];

export default function FAQ() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de gerenciamento de
            resíduos. Se não encontrar a resposta, entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                  <span>Dúvidas Mais Comuns</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Ainda tem dúvidas?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Nossa equipe está pronta para esclarecer todas as suas
                  questões sobre gerenciamento de resíduos.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">E-mail</div>
                      <div className="text-sm text-gray-600">
                        administrativo@lliz.com.br
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        WhatsApp
                      </div>
                      <div className="text-sm text-gray-600">21 97890-1932</div>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => scrollToSection("contact")}
                >
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            {/* <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Dicas Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Separe os resíduos por categoria para facilitar a coleta
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mantenha os containers sempre limpos e fechados</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Comunique mudanças na programação com antecedência
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Guarde sempre os certificados de destinação</span>
                  </li>
                </ul>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
}
