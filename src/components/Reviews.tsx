import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Construtora Silva & Filhos',
    rating: 5,
    text: 'Excelente serviço! A EcoWaste sempre pontual e muito profissional. Recomendo para qualquer empresa que precise de coleta especializada.',
    avatar: 'MS',
    type: 'Empresarial'
  },
  {
    id: 2,
    name: 'João Santos',
    company: 'Condomínio Residencial Green Park',
    rating: 5,
    text: 'Trabalham conosco há 3 anos. Nunca tivemos problemas, sempre no horário e com ótimo atendimento. Equipe muito educada.',
    avatar: 'JS',
    type: 'Condomínio'
  },
  {
    id: 3,
    name: 'Ana Costa',
    company: 'Indústria Química Costa',
    rating: 5,
    text: 'Para resíduos industriais, não tem melhor! Eles cuidam de toda a documentação e certificação. Total profissionalismo.',
    avatar: 'AC',
    type: 'Industrial'
  },
  {
    id: 4,
    name: 'Roberto Oliveira',
    company: 'Shopping Center Plaza',
    rating: 5,
    text: 'Atendimento excepcional e preços justos. A coleta é discreta e eficiente, fundamental para nosso estabelecimento.',
    avatar: 'RO',
    type: 'Comercial'
  },
  {
    id: 5,
    name: 'Fernanda Lima',
    company: 'Hospital São José',
    rating: 5,
    text: 'Trabalho impecável com resíduos hospitalares. Seguem todos os protocolos de segurança e são extremamente confiáveis.',
    avatar: 'FL',
    type: 'Hospitalar'
  },
  {
    id: 6,
    name: 'Carlos Mendes',
    company: 'Residencial',
    rating: 5,
    text: 'Uso o serviço residencial há 2 anos. Sempre pontuais, educados e com preço justo. Muito satisfeito com o atendimento.',
    avatar: 'CM',
    type: 'Residencial'
  }
];

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja os depoimentos de quem confia na EcoWaste.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              <RatingStars rating={5} />
            </div>
            <div className="text-sm text-gray-600">Avaliação média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-gray-600 mb-2">Clientes ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-sm text-gray-600 mb-2">Recomendariam</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-sm text-gray-600 mb-2">Anos no mercado</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                
                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                
                {/* Rating */}
                <div className="mb-4">
                  <RatingStars rating={review.rating} />
                </div>
                
                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-green-100 text-green-600 font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.company}</div>
                  </div>
                  <Badge variant="outline" className="border-green-600 text-green-600">
                    {review.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Faça parte dos nossos clientes satisfeitos
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de clientes que já confiam na EcoWaste para suas necessidades de gerenciamento de resíduos.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}