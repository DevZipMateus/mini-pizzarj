
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "WhatsApp",
      details: "(21) 99707-5667",
      link: "https://wa.me/5521997075667"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "E-mail",
      details: "ADM.MINIPIZZARJ@GMAIL.COM",
      link: "mailto:ADM.MINIPIZZARJ@GMAIL.COM"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Endereço",
      details: "Rua Iturbides Esteves, 9 - Rio de Janeiro - RJ",
      link: "https://maps.google.com/?q=Rua+Iturbides+Esteves+9+Rio+de+Janeiro"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário de Atendimento",
      details: "Segunda a Domingo, das 8h às 20h",
      link: null
    }
  ];

  return (
    <section id="contato" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Faça seu <span className="text-primary font-script">Pedido Agora</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Entre em contato conosco para fazer seu pedido de mini pizzas artesanais. 
            Atendemos pessoas físicas e empresas em todo o Rio de Janeiro.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  <p className="text-muted-foreground mb-8">
                    Para fazer pedidos de mini pizzas, solicitar orçamentos para eventos ou esclarecer dúvidas,
                    utilize um dos canais de atendimento abaixo. Atendemos todo o Rio de Janeiro com muito carinho.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <ContactInfoItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Siga-nos nas Redes Sociais</h4>
                    <div className="flex space-x-3">
                      <SocialLink 
                        icon={<Instagram size={20} />} 
                        href="https://www.instagram.com/minipizzarj/" 
                        label="Instagram - @minipizzarj" 
                      />
                      <SocialLink 
                        icon={<Facebook size={20} />} 
                        href="https://www.facebook.com/minipizzarj/" 
                        label="Facebook - Mini Pizza RJ" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-primary/5 rounded-xl max-w-md">
                    <div className="mb-4 text-primary">
                      <img 
                        src="/lovable-uploads/be0e2bdd-f1b3-419c-b83a-790e3709ddfd.png" 
                        alt="Mini Pizza RJ"
                        className="w-20 h-20 mx-auto rounded-full border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground mb-6">
                      Clique no botão do WhatsApp no canto inferior direito da tela para falar 
                      diretamente conosco e fazer seu pedido de mini pizzas artesanais.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-primary font-script text-lg">"Prático, Rápido e Gostoso"</strong>
                      <br />
                      <span className="text-xs">Tempo médio de resposta: 15 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 animate-on-scroll" id="localizacao">
          <Card className="border border-border/50 shadow-card overflow-hidden">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789!2d-43.2096!3d-22.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11c63b264aa0!2sRua%20Iturbides%20Esteves%2C%209%20-%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1627909542948!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização - Mini Pizza RJ - Rua Iturbides Esteves, 9"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default ContactSection;
