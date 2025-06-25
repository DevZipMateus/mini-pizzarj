
import { Button } from '@/components/ui/button';
import { ChevronUp, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/be0e2bdd-f1b3-419c-b83a-790e3709ddfd.png" 
                alt="Mini Pizza RJ"
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Mini Pizza</span> 
                  <span className="text-accent font-script"> RJ</span>
                </h3>
                <p className="text-xs text-white/70">Prático, Rápido e Gostoso</p>
              </div>
            </div>
            <p className="text-white/80 max-w-xs">
              Mini pizzas artesanais feitas com amor pela família desde os anos 80. 
              Tradição que atravessa gerações.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink 
                href="https://www.instagram.com/minipizzarj/" 
                icon={<Instagram size={18} />}
                aria-label="Instagram - @minipizzarj" 
              />
              <FooterSocialLink 
                href="https://www.facebook.com/minipizzarj/" 
                icon={<Facebook size={18} />}
                aria-label="Facebook - Mini Pizza RJ" 
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#inicio">Início</FooterNavItem>
              <FooterNavItem href="#sobre">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#produtos">Produtos</FooterNavItem>
              <FooterNavItem href="#depoimentos">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contato">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Clientes</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#produtos">Pessoas Físicas</FooterNavItem>
              <FooterNavItem href="#produtos">Lanchonetes</FooterNavItem>
              <FooterNavItem href="#produtos">Buffets</FooterNavItem>
              <FooterNavItem href="#produtos">Escolas</FooterNavItem>
              <FooterNavItem href="#produtos">Casas de Festas</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(21) 99707-5667</li>
              <li>ADM.MINIPIZZARJ@GMAIL.COM</li>
              <li>Rua Iturbides Esteves, 9</li>
              <li>Rio de Janeiro - RJ</li>
              <li>Segunda a Domingo</li>
              <li>8h às 20h</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm mb-2">
              © {new Date().getFullYear()} Mini Pizza RJ. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-xs flex items-center justify-center md:justify-start">
              Feito com <Heart className="h-3 w-3 mx-1 text-red-400 fill-current" /> pela família 
              <span className="ml-1 font-script text-accent">Mini Pizza RJ</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

interface FooterSocialLinkProps {
  href: string;
  icon: React.ReactNode;
  'aria-label': string;
}

const FooterSocialLink = ({ href, icon, ...props }: FooterSocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-primary/80 transition-colors duration-200"
    {...props}
  >
    {icon}
  </a>
);

export default Footer;
