
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente Pessoa Física",
      content: "As mini pizzas da Mini Pizza RJ são simplesmente incríveis! O sabor me lembra da infância, aquela comida feita com carinho. Sempre peço para as festas da família.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "João Santos",
      role: "Proprietário de Lanchonete",
      content: "Trabalho com a Mini Pizza RJ há 2 anos. A qualidade é sempre consistente e meus clientes adoram. A logística de entrega é perfeita e o atendimento é excepcional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Costa",
      role: "Organizadora de Eventos",
      content: "Descobri a Mini Pizza RJ através de uma amiga e desde então são minha primeira opção para eventos. Prático, gostoso e sempre um sucesso com os convidados!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor de Escola",
      content: "As mini pizzas são um sucesso na nossa cantina escolar. As crianças adoram e os pais aprovam a qualidade. Parceria que já dura mais de 1 ano!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Lucia Ferreira",
      role: "Dona de Casa",
      content: "Quando não tenho tempo de cozinhar, as mini pizzas da Mini Pizza RJ salvam meu dia! Meus filhos preferem elas a qualquer pizza grande. Sabor caseiro incomparável.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Lima",
      role: "Proprietário de Buffet",
      content: "A Mini Pizza RJ é nossa parceira há 3 anos. A qualidade nunca decepciona e nossos clientes sempre elogiam. Recomendo de olhos fechados para qualquer evento!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-accent fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="depoimentos" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O que nossos <span className="text-primary font-script">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles falam sobre nossas mini pizzas artesanais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll service-card border border-border/50 shadow-card hover:shadow-pizza transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(5)}
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  5.0 - Baseado em centenas de avaliações
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Junte-se aos nossos <span className="text-primary">Clientes Satisfeitos</span>
            </h3>
            <p className="text-muted-foreground">
              Faça seu pedido hoje e descubra por que somos a escolha preferida 
              para mini pizzas artesanais no Rio de Janeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
