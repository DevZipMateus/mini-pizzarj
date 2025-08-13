
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="sobre" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Uma Tradição que <span className="text-primary font-script">Atravessa Gerações</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Conheça a história da Mini Pizza RJ, uma empresa familiar que nasceu do amor pela culinária
            e se reinventou para continuar levando sabor às famílias cariocas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="h-6 w-6 text-primary mr-2" />
                A História da Família
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A Mini Pizza RJ é uma empresa familiar que nasceu nos anos 80, no interior do Espírito Santo, 
                idealizada pela matriarca <strong>Gerlane</strong>. Uma mulher visionária que tinha o sonho de 
                compartilhar o sabor único de suas mini pizzas artesanais.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ao mudar para o Rio de Janeiro, os caminhos a levaram a trabalhar em outra área, 
                o que acabou ocasionando o encerramento das atividades. Mas uma boa receita familiar 
                nunca se perde...
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                <p className="text-foreground font-medium italic">
                  "Em 2020, devido à crise mundial ocasionada pela pandemia, Gerlane, suas filhas e neta 
                  reformularam o conceito das mini pizzas e voltaram a vender como fonte de renda."
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/0780f609-f781-4e6e-9144-4cd8115d311a.png" 
                alt="Mini pizzas artesanais da Mini Pizza RJ com diversos sabores"
                className="relative rounded-2xl shadow-pizza w-full object-cover h-[400px]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-foreground mb-1">Tradição Familiar</h4>
                <p className="text-sm text-muted-foreground">
                  Receitas passadas de geração em geração, com muito amor e carinho
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Mini pizzas sendo compartilhadas entre amigos"
                className="relative rounded-2xl shadow-cheese w-full object-cover h-[400px]"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                Desde 2020
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                O Renascimento
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                No início, os amigos começaram a comprar e divulgar. Logo depois, os amigos dos amigos, 
                amigos dos amigos dos amigos... <strong>até que virou um sucesso!</strong>
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                O que começou como uma necessidade se transformou novamente no sonho realizado de uma família. 
                O boca a boca fez com que a Mini Pizza RJ conquistasse o coração dos cariocas.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-foreground font-medium">
                  <strong>Hoje:</strong> A Mini Pizza RJ tem como clientes pessoas jurídicas 
                  (empresas de serviços de alimentos, escolas, casas de festas, buffets e lanchonetes) 
                  e pessoas físicas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AboutCard 
            icon={<Heart className="h-10 w-10 text-primary" />}
            title="Amor em Cada Fatia"
            description="Cada mini pizza é feita com ingredientes selecionados e muito carinho, mantendo a tradição familiar que começou nos anos 80."
          />
          <AboutCard 
            icon={<Award className="h-10 w-10 text-primary" />}
            title="Qualidade Reconhecida"
            description="A qualidade das nossas mini pizzas é reconhecida por clientes em todo o Rio de Janeiro, pessoas físicas e empresas."
          />
          <AboutCard 
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Tradição e Inovação"
            description="Mais de 40 anos de tradição familiar, sempre se reinventando para atender as necessidades dos nossos clientes."
          />
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
