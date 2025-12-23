import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, Utensils, Star, Heart } from 'lucide-react';

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Auto-rotate images for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (type: string) => {
    const message = `Olá! Gostaria de saber mais sobre as mini pizzas para ${type}.`;
    window.open(`https://wa.me/5521997075667?text=${encodeURIComponent(message)}`, '_blank');
  };

  const pessoasFisicasImages = [
    "/lovable-uploads/mini-pizzas-prato.jpg",
    "/lovable-uploads/mini-pizzas-logo.jpg"
  ];

  const products = [
    {
      title: "Para Pessoas Físicas",
      description: "Mini pizzas perfeitas para sua família, festas pessoais e momentos especiais",
      icon: <Users className="h-12 w-12 text-primary" />,
      images: pessoasFisicasImages,
      features: [
        "Entrega em domicílio",
        "Diversos sabores",
        "Perfeito para festas",
        "Preço acessível"
      ],
      type: "pessoas físicas"
    },
    {
      title: "Para Empresas",
      description: "Soluções corporativas para lanchonetes, buffets, escolas e casas de festas",
      icon: <Building className="h-12 w-12 text-primary" />,
      video: "/lovable-uploads/video-empresas.mp4",
      features: [
        "Fornecimento em grande quantidade",
        "Preços especiais",
        "Logística especializada",
        "Parcerias duradouras"
      ],
      type: "empresas"
    }
  ];

  const characteristics = [
    {
      icon: <Utensils className="h-8 w-8 text-accent" />,
      title: "Prático",
      description: "Fácil de servir e consumir em qualquer ocasião"
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "Rápido",
      description: "Aquecimento rápido, sabor na hora que você quiser"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Gostoso",
      description: "Sabor tradicional que conquista todos os paladares"
    }
  ];

  return (
    <section id="produtos" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Mini Pizzas <span className="text-primary font-script">Artesanais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos mini pizzas para todos os tipos de ocasião e cliente, 
            mantendo sempre a qualidade e o sabor que nos tornaram referência.
          </p>
        </div>

        {/* Características principais */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {characteristics.map((char, index) => (
            <div 
              key={index}
              className="text-center animate-on-scroll service-card bg-white rounded-xl p-6 shadow-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                {char.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{char.title}</h3>
              <p className="text-muted-foreground">{char.description}</p>
            </div>
          ))}
        </div>

        {/* Produtos principais */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-on-scroll product-card border-0 shadow-pizza"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                {product.video ? (
                  <video 
                    src={product.video} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover product-image"
                  />
                ) : product.images ? (
                  <>
                    {product.images.map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={img} 
                        alt={`${product.title} ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover product-image transition-opacity duration-700 ${
                          imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {product.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setCurrentImageIndex(imgIndex)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {product.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cta-button group"
                  onClick={() => handleWhatsAppClick(product.type)}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Quer experimentar nossas <span className="text-primary font-script">Mini Pizzas</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco pelo WhatsApp e descubra por que somos a escolha 
              preferida de famílias e empresas em todo o Rio de Janeiro.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground cta-button"
              onClick={() => handleWhatsAppClick('informações gerais')}
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
