import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521997075667?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20das%20mini%20pizzas.', '_blank');
  };

  return (
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with pizza pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat pizza-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        {/* Pizza dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left text-white">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                Empresa Familiar desde os anos 80
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                <span className="font-script text-accent text-5xl md:text-6xl lg:text-7xl">Mini Pizza</span>
                <br />
                <span className="text-white">RJ</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-script text-accent mb-4 animate-slide-up [animation-delay:600ms]">
                "Prático, Rápido e Gostoso"
              </p>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Mini pizzas artesanais feitas com amor pela família. 
                Tradição que passou de geração em geração, agora no Rio de Janeiro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button size="lg" onClick={handleWhatsAppClick} className="bg-accent hover:bg-accent/90 text-accent-foreground cta-button group">
                  Fazer Pedido Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="relative border-2 border-white/30 text-white backdrop-blur-sm bg-white/5 overflow-hidden group transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/20 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white">Nossa História</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-white/90 text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-accent mr-2 fill-current" />
                  Receita tradicional familiar
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-accent mr-2 fill-current" />
                  Atendemos todo o Rio de Janeiro
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform rotate-12"></div>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                  <div className="text-center text-white">
                    <div className="mb-4">
                      <video 
                        src="/lovable-uploads/hero-video.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-72 mx-auto rounded-xl object-cover border-2 border-white/30" 
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">Para Todos os Gostos</h3>
                    <p className="text-white/80 mb-6">
                      Atendemos pessoas físicas e jurídicas. Perfeito para festas, eventos, lanchonetes e muito mais!
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">40+</div>
                        <div>Anos de Tradição</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">100%</div>
                        <div>Satisfação</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
